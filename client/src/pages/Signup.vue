<script setup lang="ts">

import { ref } from "@vue/reactivity";
import {User} from "../models/user";
import { useSession } from "../models/session";
import vSelect from 'vue-select';
import Autocomplete from 'vue3-autocomplete'
// Optional: Import default CSS
import 'vue-select/dist/vue-select.css';

const session = useSession();

const name= ref();
const username = ref();
const password = ref();
const email = ref();

function signup()
{
    const user: User={
        name: name.value,
        handle: username.value,
        password: password.value,
        email: email.value,
        id:0,
        pic: ''
    }
    session.Signup(user);
}
const data= ref([]);

       const selected= null;

      function filteredDataArray() {
        session.getCountriesByKeyword(selected).then(countries=>{
            data.value = countries
        })
      }
</script>

<template>
     <div class="section">
         <h1 class="title">Signup</h1>
         <div>
            <label for="Name">Name</label>
            <input id="name" class="input" placeholder="Name" v-model="name" />
        </div>
        <div>
            <label for="username">User Name</label>
            <input id="username" class="input" placeholder="User Name " v-model="username" />
        </div>
        <div>
            <label for="email">Email</label>
            <input id="email" class="input" placeholder="email" v-model="email" />
        </div>
        <div>
            <label for="password">Password</label>
            <input id="password" class="input" placeholder="Password" v-model="password" />
        </div>
        <div>
           <section>
    <o-field label="country">
      <o-autocomplete rounded expanded v-model="selected" :data="filteredDataArray" placeholder="e.g. jQuery" icon="search" clearable @select="option => selected = option">
        <template slot="empty">No results found</template>
      </o-autocomplete>
    </o-field>
  </section>
        </div>
        
        <button class="button is-primary my-5" @click="signup"> 
            <span class="icon">
               <i class="fa fa-sign-in"></i>
            </span>
            <span>Signup</span>
        </button>
        &nbsp;
        <router-link class="button is-warning my-5" to="/login">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Login</span>
        </router-link>
    </div>
</template>

<style scoped>

</style>