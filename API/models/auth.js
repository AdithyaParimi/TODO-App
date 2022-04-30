// const requireAuth = (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer ")
//   ) {
//     try {
//       // Get token from the header
//       token = req.headers.authorization.split(" ")[1];
//       // Verify the token
//       const decoded = jwt.verify(token, "abcd1234");
//       next();
//     } catch (err) {
//       console.log(err);
//       res.status(401);
//       throw new Error("Not authorized, Invalid Token!");
//     }
//   }
//   if (!token) {
//     res.status(401);
//     throw new Error("Not authorized, No Token!");
//   }
// };

// module.exports = {
//   requireAuth,
// };

module.exports = {
  requireAuth(req, res, next) {
    if (!req.user) {
      next({ statusCode: 401, message: "Unauthorized" });
    } else {
      next();
    }
  },
};
