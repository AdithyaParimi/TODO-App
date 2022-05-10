<script setup lang="ts">
import { ref } from "@vue/reactivity"
import { useSession } from "../models/session";
const session = useSession();
const username= ref();
const password= ref();

function login()
{
    session.Login(username.value, password.value)
}

function directLogin(email: string, password: string)
{
    session.Login(email, password);
}

</script>

<template>
     <div id="main">
    <form  @submit.prevent="login">
      <h1>Login</h1>
      <div>
            <label for="username">User Name</label>
            <input id="username" class="input form-control" placeholder="User Name " v-model="username" />
      </div>
      <div>
            <label for="password">Password</label>
            <input id="password" class="input form-control" placeholder="Password" type="password" v-model="password" />
      </div>
      <input type="submit" class="btn btn-primary" style="margin-top: 15px"/>
    </form>
    &nbsp;
        <div>
            <input type="button" value="Direct Login" class="btn btn-primary" @click="directLogin('president@newpaltz.edu','hugo')"/>      
        </div>
        <router-link class="button is-warning my-5" to="/signup">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Signup</span>
        </router-link>
  </div>
</template>


<style scoped>

</style>