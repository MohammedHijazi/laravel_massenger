import Messenger from "./components/massages/Messenger.vue";

import {createApp} from "@vue/runtime-dom";

const chatApp = createApp({})
    .component('Messenger',Messenger)
    .mount('#chat-app');
