<script setup>
import Form from "./pages/Form.vue";
import Login from "./pages/Login.vue";
import CreateTask from "./pages/CreateTask.vue";
import "bootstrap/dist/css/bootstrap.css";
</script>

<template>
  <!-- <Form /> -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- <router-link class="margin-right" to="/">Login</router-link>
        <router-link class="margin-right" to="/createTask"
          >Create Task</router-link
        > -->
      </div>
    </div>
  </div>
  <!-- <router-view></router-view> -->

  <div v-if="loginStatus">
    <Login @lcallback="updateLogin" />
  </div>
  <div v-if="!loginStatus">
    <CreateTask />
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginStatus: true,
    };
  },
  methods: {
    updateLogin: function () {
      this.loginStatus = false;
    },
  },
};
</script>
<style scoped>
.margin-right {
  margin-right: 20px;
}
</style>
