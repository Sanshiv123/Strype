<!-- this acts as a wrapper around the bootstrap modals, to have centralised control and customisation -->
<template>
    <b-modal no-close-on-backdrop hide-header-close :id="dlgId" :title="dlgTitle" :ok-only="okOnly" 
        :ok-title="okTitle" :cancel-title="cancelTitle" :size="size" :auto-focus-button="autoFocusButton">
            <slot/>
            <!-- the footer part is entirely optional if other buttons than the default OK/Cancel or Yes/No are required -->
            <template #modal-footer="{ok, cancel, hide}">
                <slot name="modal-footer-content" :ok="ok" :cancel="cancel" :hide="hide"/>
            </template>
    </b-modal>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { mapStores } from "pinia";
import { useStore } from "@/store/store";
import { BvModalEvent } from "bootstrap-vue";
import { BootstrapDlgAutoFocusButton, BootstrapDlgSize } from "@/types/types";

export default Vue.extend({
    name: "ModalDlg",

    props:{
        dlgId: String,
        dlgTitle: String,
        okOnly: Boolean,
        okCustomTitle: String,
        cancelCustomTitle: String,
        size:  {
            type: String as PropType<BootstrapDlgSize>,
            required: false,
        },
        autoFocusButton:{
            type: String as PropType<BootstrapDlgAutoFocusButton>,
            required: false,
        },
        elementToFocusId: String,
        useYesNo: Boolean, // by default, the values of the buttons are OK and Cancel, this flag allows using Yes/No (in combination with okOnly) if needed
    },

    mounted(){
        // The events from Bootstrap modal are registered to the root app element.
        // For a given dialog we need to register a generic listener for the shown even
        this.$root.$on("bv::modal::shown", this.onModalDlgShown);
        this.$root.$on("bv::modal::hidden", this.onModalDlgHidden);
        window.addEventListener("keydown", this.validateOnEnterKeyDown);
    },

    computed: {
        ...mapStores(useStore),

        okTitle(): string {
            return this.okCustomTitle ?? (this.$i18n.t((this.useYesNo) ? "buttonLabel.yes" : "buttonLabel.ok") as string);
        },
        
        cancelTitle(): string {
            return this.cancelCustomTitle ?? (this.$i18n.t((this.useYesNo) ? "buttonLabel.no" : "buttonLabel.cancel") as string);
        },
    },

    methods: {
        onModalDlgShown(event: BvModalEvent, modalDlgId: string){
            // For any modal window, notify the editor that a modal is displayed
            this.appStore.isModalDlgShown = true;
            this.appStore.currentModalDlgId = modalDlgId;
            // If an element is request to show focus we try to set it here
            document.getElementById(this.elementToFocusId)?.focus();
        },

        onModalDlgHidden(event: BvModalEvent, modalDlgId: string){
            // For any modal window, notify the editor that a modal is hidden
            this.appStore.isModalDlgShown = false;
            this.appStore.currentModalDlgId = "";
        },

        validateOnEnterKeyDown(event: KeyboardEvent){
            // Hitting "enter" on the dialog triggers its validation (the trigger property of the BvModalEvent sent by Bootstrap will be "event" in that case)
            // Only if there is not focus on a button already (then it show leave the action on that button to be performed)
            if((document.activeElement?.tagName.toLocaleLowerCase()??"") != "button" && event.code.toLowerCase() == "enter" && this.appStore.isModalDlgShown && this.dlgId == this.appStore.currentModalDlgId){
                this.$root.$emit("bv::hide::modal", this.dlgId);
            }
        },
    },

    beforeDestroy(){
        // Just in case, we remove event listeners 
        this.$root.$off("bv::modal::shown", this.onModalDlgShown);
        this.$root.$off("bv::modal::hidden", this.onModalDlgHidden);
        window.removeEventListener("keydown", this.validateOnEnterKeyDown);
    },
});
</script>

<style lang="scss">
</style>