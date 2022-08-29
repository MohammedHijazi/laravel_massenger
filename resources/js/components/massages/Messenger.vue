<template>
    <main class="main is-visible" data-dropzone-area="">
        <div class="container h-100">

            <div class="d-flex flex-column h-100 position-relative">
                <!-- Chat: Header -->
                <ChatHeader :conversation="conversation" />
                <!-- Chat: Header -->

                <!-- Chat: Content -->
                <ChatContent :conversation="conversation" />
                <!-- Chat: Content -->

                <!-- Chat: Footer -->
                <ChatFooter :conversation="conversation" />
                <!-- Chat: Footer -->
            </div>

        </div>
    </main>
</template>
<script>
import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import ChatFooter from "./ChatFooter";
export default {
    components: {ChatFooter, ChatHeader , ChatContent},
    props:[
        'conversation',
    ],
    data() {
        return {
            messages: [],
        };
    },

}
</script>
