import Messenger from "./components/massages/Messenger.vue";
import ChatList from "./components/massages/ChatList";

import {createApp} from "@vue/runtime-dom";

const chatApp = createApp({
    data() {
        return {
            conversation:null,
            userId: userId,
            csrfToken: csrfToken
        }
    },
    methods: {
        moment(time){
            return moment(time);
        },
    }})
    .component('Messenger',Messenger)
    .component('ChatList',ChatList)
    .mount('#chat-app');
