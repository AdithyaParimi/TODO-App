import { defineStore } from 'pinia'
import {useSession} from '../models/session'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const usetasks = defineStore('tasks', {

    state: () => ({
        tasks: [],
        currentTasks: [],
        completedTasks: [],
        session: useSession(),
    }),
    getters:{
        async completedTasks(){
            const tasks = await this.session.api('tasks/completed');
            this.completedTasks = tasks;
        },

        async currentTasks(){
            const tasks = await this.session.api('tasks/current');
            this.currentTasks = tasks;
        },

        async currentUserTasks(){
            const tasks = await this.session.api('tasks/currentUserTasks');
            this.currentTasks = tasks;
        }
    },
    actions: {
        close(index: number) {
            this.tasks.splice(index, 1);
        },

        async addNewTask(id: any, message: any, dueDate: any, assignedTo: any, userId: any , completed: any= false){
            return await this.session.api("tasks",{id:id, completed: completed,message: message, dueDate: new Date(dueDate), createdBy: userId, assignedTo: assignedTo});
        },

        
    }
})