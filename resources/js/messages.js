import Messenger from "./components/massages/Messenger.vue";
import ChatList from "./components/massages/ChatList";
import {createApp} from "@vue/runtime-dom";
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');




const chatApp = createApp({
    data() {
        return {
            conversations: [],
            conversation:null,
            messages: [],
            userId: userId,
            csrfToken: csrfToken,
            laravelEcho: null,
            users:[]
        }
    },
    mounted() {
        this.laravelEcho = new Echo({
                broadcaster: 'pusher',
                key: process.env.MIX_PUSHER_APP_KEY,
                cluster: process.env.MIX_PUSHER_APP_CLUSTER,
                forceTLS: true
            });

        this.laravelEcho
            .join(`Messenger`)
            .joining((user) => {
                for (let i in this.conversations){
                    let conversation = this.conversations[i];
                    if (conversation.participants[0].id == user.id){
                        this.conversations[i].participants[0].isOnline=true;
                        return;
                    }
                }
            })
            .listen('.new-message', (data) => {
                this.messages.push(data.message);
                //auto scroll to bottom
                let container = document.querySelector('#chat-body');
                container.scrollTop = container.scrollHeight;
            })
            .leaving((user) => {
            for (let i in this.conversations){
                let conversation = this.conversations[i];
                if (conversation.participants[0].id == user.id){
                    this.conversations[i].participants[0].isOnline=false;
                    return;
                }
            }
        });
        },
    methods: {
        moment(time){
            return moment(time);
        },
        isOnline(user){
            for (let i in this.users){
                if (this.users[i].id === user.id){
                    return this.users[i].isOnline;
                }
            }
            return false;
        }
    }})
    .component('Messenger',Messenger)
    .component('ChatList',ChatList)
    .mount('#chat-app');
