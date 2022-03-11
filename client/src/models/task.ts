import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const usetasks = defineStore('tasks', {

    state: () => ({
        tasks: [
            { id:0, assignedTo: 1, isCompleted: false, message: 'Make Bulma great again', dueDate: new Date("07-05-2021"), isOwned: 2 },
            { id:1, assignedTo: 2, isCompleted: true, message: 'Add some more features' , dueDate: new Date("07-26-2021"), isOwned: 2 },
            { id:2, assignedTo: 3, isCompleted: false, message: 'Make a github account' , dueDate: new Date("08-23-2021"), isOwned: 3 },
            { id:3, assignedTo: 2, isCompleted: true, message: 'Learn how to use github' , dueDate: new Date("09-10-2021"),isOwned: 3},
            { id:4, assignedTo: 3, isCompleted: false, message: 'add a .gitignore file' , dueDate: new Date("07-10-2022"), isOwned: 1 },
        ] 
    }),
    actions: {
        close(index: number) {
            this.tasks.splice(index, 1);
        },

        createTasks(id: any, message: any, dueDate: any, assignedTo: any, userId: any , isCompleted: any= false){
            this.tasks.push({id:id, isCompleted: isCompleted,message: message, dueDate: new Date(dueDate),isOwned: userId,assignedTo: assignedTo});
        }
    }
})