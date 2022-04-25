<template>
  <div class="container margin-10">
    <div class="row">
      <p>Task Details</p>
      <div class="col-md-12 margin-10">
        <input
          v-model="title"
          type="text"
          class="form-control"
          placeholder="Title"
          required
        />
        <input
          v-model="dueDate"
          type="date"
          class="form-control"
          placeholder="Due date"
          required
        />
        <input
          v-model="assigner"
          type="text"
          class="form-control"
          placeholder="Assigner"
          required
        />
        <input
          v-model="status"
          type="text"
          class="form-control"
          placeholder="Status"
          required
        />
        <button
          v-if="!isEdit"
          class="btn btn-primary margin-10"
          @click="createTask"
        >
          Create task
        </button>
        <button
          v-if="isEdit"
          class="btn btn-primary margin-10"
          @click="updateTaskInfo"
        >
          Update task
        </button>
        <button
          class="btn btn-primary margin-10 margin-left"
          @click="sortByTaskDate"
        >
          Sort by Date
        </button>
      </div>
    </div>
    <div class="col-md-12 margin-10">
      <p>List Task</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Due Date</th>
            <th scope="col">Assigner</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody v-for="item in tasklists">
          <tr>
            <th scope="row">{{ item.title }}</th>
            <td>{{ item.dueDate }}</td>
            <td>{{ item.assginer }}</td>
            <td>{{ item.status }}</td>
            <td>
              <button class="btn btn-primary" v-on:click="updateTask(item)">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasklists: [
        {
          title: "test",
          dueDate: "2022-04-27	",
          assginer: "Ramkumar",
          id: 1,
        },
      ],
      id: 1,
      title: "",
      dueDate: "",
      assigner: "",
      status: "",
      isEdit: false,
    };
  },
  methods: {
    sortByTaskDate: function () {
      const sortedItems = this.tasklists.sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
      this.tasklists = [...sortedItems];
    },
    // this method will toggle an item to make it active/inactive (no change necessary)
    toggleActive: function (s) {
      s.active = !s.active;
    },
    updateTaskInfo: function () {
      const tasks = [...this.tasklists];
      const updatedList = [];
      tasks.forEach((data) => {
        if (data.id === this.id) {
          updatedList.push({
            id: this.id,
            title: this.title,
            dueDate: this.dueDate,
            assginer: this.assigner,
            status: this.status,
          });
        } else {
          updatedList.push(data);
        }
      });

      this.tasklists = [...updatedList];
      this.isEdit = false;
    },

    createTask: function () {
      const tasks = [...this.tasklists];
      tasks.push({
        id: Math.floor(Math.random() * 100),
        title: this.title,
        dueDate: this.dueDate,
        assginer: this.assigner,
        status: this.status,
      });
      this.tasklists = [...tasks];
    },
    updateTask: function (item) {
      this.title = item.title;
      this.dueDate = item.dueDate;
      this.assigner = item.assginer;
      this.status = item.status;
      this.id = item.id;
      this.isEdit = true;
    },
    // method to calculate the total amount

    // method to format as currency
    formatCurrency(value) {
      // put dollar sign in front of value and show 2 deci,al places e.g $500.00
      return `$ ${(Math.round(value * 100) / 100).toFixed(2)}`;
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Shadows+Into+Light);
[v-cloak] {
  display: none;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font: 15px/1.3 "Open Sans", sans-serif;
  color: #5e5b64;
  text-align: center;
}

a,
a:visited {
  outline: none;
  color: #389dc1;
}

a:hover {
  text-decoration: none;
}

section,
footer,
header,
aside,
nav {
  display: block;
}

/*-------------------------
    The order form
--------------------------*/

form {
  background-color: #8931ef;
  border-radius: 2px;
  box-shadow: 0 1px 1px #ccc;
  width: 400px;
  padding: 35px 60px;
  margin: 50px auto;
}

form h1 {
  color: #fff;
  font-size: 64px;
  font-family: "Cookie", cursive;
  font-weight: normal;
  line-height: 1;
  text-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
}

form ul {
  list-style: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0 15px;
}

form ul li {
  padding: 20px 30px;
  background-color: #a5949a;
  margin-bottom: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

form ul li span {
  float: right;
}

form ul li.active {
  background-color: #87e911;
}

div.total {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #fff;
}

div.total span {
  float: right;
}
.margin-10 {
  margin-top: 30px;
}
.margin-left {
  margin-left: 20px;
}
</style>
