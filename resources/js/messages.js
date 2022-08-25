import Messenger from "./components/massages/Messenger.vue";
import ChatList from "./components/massages/ChatList";

import {createApp} from "@vue/runtime-dom";

const chatApp = createApp({
    data() {
        return {
            conversation:null,
            messages: [],
        }
    }})
    .component('Messenger',Messenger)
    .component('ChatList',ChatList)
    .mount('#chat-app');
