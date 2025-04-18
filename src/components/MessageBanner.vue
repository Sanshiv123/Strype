<template>
    <b-modal
        v-if="showModal"
        :visible="showModal"
        hide-footer
        size="xl"
        @close="close()"
    >
        <img
            class="w-100" 
            :src="image"
        />
    </b-modal>
    <div
        v-else 
        class="message-banner-container"
    >
        <span 
            v-if="message.message"
            v-t="message.message"></span>
        <span class="message-banner-cross" v-on:click="close">&#x2716;</span>
        
        <br/>
        <button 
            v-for="(button,index) in message.buttons"
            :key="'messageButton-'+index"
            v-on:click="onButtonClick(button.action)"
            v-t="button.label">
        </button>
    </div>
</template>

<script lang="ts">
import { useStore } from "@/store/store";
import { MessageDefinedActions, MessageDefinition, MessageDefinitions, MessageTypes, VoidFunction } from "@/types/types";
import { mapStores } from "pinia";
import Vue from "vue";

export default Vue.extend({
    name: "MessageBanner",

    data: function() {
        return {
            image: "" as string,
        };
    },

    created() {
        this.image = (this.message.path.length > 0) ? require("@/assets/images/"+this.message.path) : "";
    },
    
    //Updated is needed in case one message pops and before its gone another is shown
    updated() {
        this.image = (this.message.path.length > 0) ? require("@/assets/images/"+this.message.path) : "";
    },

    computed: {
        ...mapStores(useStore),
        
        message(): MessageDefinition {
            return this.appStore.currentMessage;
        },

        showModal(): boolean{
            return this.message.type === MessageTypes.imageDisplay;
        },
    },

    methods: {
        close(): void {
            this.appStore.currentMessage = MessageDefinitions.NoMessage;
        },

        onButtonClick(payload: VoidFunction | string){
            // If the type of the action associated with this button is a function
            // we run this function. If the type is string then we run a predefined action. 
            if((typeof payload) === "function"){
                (payload as VoidFunction)();
            }
            else{
                switch(payload){
                case MessageDefinedActions.closeBanner:
                    this.appStore.currentMessage = MessageDefinitions.NoMessage;
                    break;
                case MessageDefinedActions.undo:
                    this.appStore.applyStateUndoRedoChanges(true);
                    this.appStore.currentMessage = MessageDefinitions.NoMessage;
                    break;
                default:
                    break;
                }
            }
        },
    },
});
</script>

<style lang="scss">
.message-banner-container {
    display: inline-block;
    width: 100%;
    background-color: #BBBBBB;
    padding:5px;
}

.message-banner-cross {
    float: right;
    margin-right:15px;
    cursor:pointer;
}
</style>
