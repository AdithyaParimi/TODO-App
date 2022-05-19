require('dotenv').config();
const express = require("express");
const userRoutes = require("./controllers/user");
const taskRoutes = require("./controllers/task");
const countryRoutes = require("./controllers/country");
const userModel = require('./models/user');

const app = express();
const port = process.env.PORT || 3005;
app.use(express.json())
    .use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    })
    .use((req, res, next) => {
        const auth = req.headers.authorization;
        if (auth) {
            const token = auth.split(' ')[1];
            userModel.fromToken(token)
                .then(user => {
                    req.user = user;
                    next();
                }).catch(next);
        } else {
            next();
        }
    })
    .use("/api/tasks/", taskRoutes)
    .use("/api/users/", userRoutes)
    .use("/api/countries/", countryRoutes)
    .use((err, req, res, next) => {
        console.error(err);
        res .status(err.statusCode || 500)
            .send({ errors: [ err.message ?? 'Internal server error' ] });
    })
app.listen(port, () => console.log(`Server running on port ${port}`));
