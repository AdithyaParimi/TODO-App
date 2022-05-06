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
    actions: {
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
            this.tasks = tasks;
        },
        close(index: number) {
            this.tasks.splice(index, 1);
        },

        async addNewTask(message: any, dueDate: any, assignedTo: any, userId: any , completed: any= false){
            return await this.session.api("tasks",{completed: completed,message: message, dueDate: new Date(dueDate), createdBy: userId, assignedTo: assignedTo});
        },

        
    }
})