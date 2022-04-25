import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const usetasks = defineStore('tasks', {

    state: () => ({
        tasks: [
            { id:0, assignedTo: 1, completed: true, message: 'Make Bulma great again', dueDate: new Date("12-01-2022"), createdBy: 2 },
            { id:1, assignedTo: 2, completed: true, message: 'Add some more features' , dueDate: new Date("10-30-2022"), createdBy: 2 },
            { id:2, assignedTo: 3, completed: false, message: 'Make a github account' , dueDate: new Date("1-27-2021"), createdBy: 3 },
            { id:3, assignedTo: 2, completed: true, message: 'Learn how to use github' , dueDate: new Date("2-11-2021"),createdBy: 3},
            { id:4, assignedTo: 3, completed: false, message: 'add a .gitignore file' , dueDate: new Date("08-09-2023"), createdBy: 1 },
        ] 
    }),
    getters:{
        completedTasks(): any{
            return this.tasks.filter(t=>t.completed);
        },

        currentTasks(): any{
            return this.tasks.filter(t=>!t.completed);
        }
    },
    actions: {
        close(index: number) {
            this.tasks.splice(index, 1);
        },

        addNewTask(id: any, message: any, dueDate: any, assignedTo: any, userId: any , completed: any= false){
            this.tasks.unshift({id:id, completed: completed,message: message, dueDate: new Date(dueDate),createdBy: userId,assignedTo: assignedTo});
        },

        
    }
})