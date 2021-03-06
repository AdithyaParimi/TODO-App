
import router from "../router";

import * as users from "../models/user";
import { useMessages } from "./messages";
import { api } from "./myFetch";
import { defineStore } from "pinia";


export const useSession = defineStore('session', {
    state: () => ({
        user: null as users.User | null,
        users: [] as users.User[],
        destinationUrl: null as string | null,
    }),
    actions: {
        async Login(email: string, password: string) {

            const messages = useMessages();

            try {

                const user = await this.api("users/login", { email, password });

                if (user) {

                    messages.notifications.push({
                        type: "success",
                        message: `Welcome back ${user.firstName}!`,
                    });

                    this.user = user;
                    router.push(this.destinationUrl ?? '/tasks');
                }

            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
                console.table(messages.notifications)
            }
        },

        async Signup(newUser: users.User) {
            const messages = useMessages();

            try {

                const user = await this.api("users", newUser, "POST");
                if (user) {

                    messages.notifications.push({
                        type: "success",
                        message: `Welcome back ${user.firstName}!`,
                    });

                    this.user = user;
                    router.push(this.destinationUrl ?? '/tasks');
                }

            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
                console.table(messages.notifications)
            }
        },

       async getUsers(){
            this.users = await this.api("users");
        },

        Logout() {
            this.user = null;
            router.push('/login');
        },

        async api(url: string, data?: any, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', headers: any = {}) {
            const messages = useMessages();

            if (this.user?.token) {
                headers.Authorization = `Bearer ${this.user.token}`;
            }

            try {
                const response = await api(url, data, method, headers);
                if (response.errors?.length) {
                    throw { message: response.errors.join(', ') };
                }
                return await response.data;
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
                //console.table(messages.notifications)
            }

        },

        async getCountries(){
            return await this.api("countries");
        },

        async getCountriesByKeyword(search:string){
            return await this.api("countries/"+search);
        },
    }
})

