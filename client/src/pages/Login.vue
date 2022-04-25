<script setup lang="ts">
    emailLogin: "";
    passwordLogin: "";
    function doLogin(e) {
      alert(this.emailLogin + " " + this.passwordLogin);
      this.$emit("lcallback");
    // method to format as currency
  }
</script>

<template>
  <div id="main">
    <form v-cloak>
      <h1>Login</h1>
      <input
        v-model="emailLogin"
        type="email"
        class="form-control"
        placeholder="Email"
        required
      />
      <input
        v-model="passwordLogin"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      />
      <input type="submit" class="btn btn-primary" @click="doLogin" />
    </form>
  </div>
</template>


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
</style>
