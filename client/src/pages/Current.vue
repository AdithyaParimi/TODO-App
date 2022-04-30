
<script setup>
import { computed, ref } from 'vue';
import moment from 'moment';

import { usetasks } from '../models/task'
import * as users from "../models/user";
import session from '../models/session'


const currentTab = ref( 'All' );
const allTasks = usetasks();
const tasks = computed(() => { 
  if(currentTab.value == 'Completed')
    return allTasks.completedTasks;
  else if(currentTab.value == 'Current')
    return allTasks.currentTasks;
  else
    return allTasks.tasks;
}); 
const newTask=ref();
const dueDate=ref();
const assignedTo=ref();

function submitForm(e){
  allTasks.createTasks(Math.max(...allTasks.tasks.map(_=>_.id))+1, newTask.value, dueDate.value, assignedTo.value, session.user.id)
   console.log(newTask);
}

</script>
<template>
       <div class="section">
       <div class="container">
        <div class="columns">
          <div class="column">
              <article class="panel">
                <div class="tabs is-boxed">
                  <ul>
                    <li class="is-current" :class="{ 'is-active': currentTab == 'Current'}" @click="currentTab='Current'">
                      <a>
                        <span class="icon is-small"><i class="fas fa-clipboard-list" aria-hidden="true"></i></span>
                        <span>Current</span>
                      </a>
                    </li>
                    <li class="is-completed" :class="{ 'is-active': currentTab == 'Completed'}" @click="currentTab='Completed'">
                      <a>
                        <span class="icon is-small"><i class="fas fa-calendar-times" aria-hidden="true"></i></span>
                        <span>Completed</span>
                      </a>
                    </li>
                    <li class="is-upcoming" :class="{ 'is-active': currentTab == 'Upcoming'}" @click="currentTab='Upcoming'">
                      <a>
                        <span class="icon is-small"><i class="fas fa-calendar-day" aria-hidden="true"></i></span>
                        <span>Upcoming</span>
                      </a>
                    </li>
                    <li class="is-all" :class="{ 'is-active': currentTab == 'All'}" @click="currentTab='All'">
                      <a>
                        <span class="icon is-small"><i class="fas fa-calendar" aria-hidden="true"></i></span>
                        <span>All</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="panel-block">
                  <form @submit.prevent="submitForm">
                  <p class="control has-icons-left">
                    <input class="input is-primary" type="text" placeholder="New Task" v-model="newTask">
                    {{newTask}}
                    <span class="icon is-left">
                      <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                    </span>
                  </p>
                  <div>
                    <input type="date" class="input" v-model="dueDate"/>
                     <select v-model="assignedTo">
                      <option disabled selected>Assign to</option>
                      <option v-for="user in users.list" :key="user.id">{{user.handle}}</option>
                    </select>
                    <button  type="submit" class="button">Create</button>
                  </div>
                  </form>
                </div>
                <a class="panel-block columns title is-4" >
                      <div class="column is-two-quarter">
                        <span class="Heading">Task Title</span>
                      </div>
                       <div class="column is-one-quarter">
                        Due Date
                      </div>
                    <div class="column is-one-quarter">
                      Assigned To
                    </div>
                </a>
                <div class="panel-block columns" v-for="task in tasks" :key="task.message" :class="{'text-dec-line-through' : task.completed==true}" >
                      <div class="column is-two-quarter">
                        <input type="checkbox" class="checkbox" v-model="task.completed" :disabled="task.assignedTo!=session.user?.id">
                        <span>{{task.message }}</span>
                      </div>
                       <div class="column is-one-quarter">
                        {{moment(String(task.dueDate)).format('MMM-DD-YYYY') }}
                      </div>
                      <div class="select column is-one-quarter" v-if="task.createdBy==session.user?.id">
                        <select v-model="task.assignedTo" class="select">
                          <option v-for="user in users.list" :value="user.id">{{user.handle}}</option>
                        </select>
                      </div>
                    <div v-else class="column is-one-quarter">
                      {{users.list.find(u => u.id === task.assignedTo).handle}}
                    </div>
                </div>
              </article>
          </div>
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>

</style>