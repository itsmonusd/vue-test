<template src="./modal.html"></template>
<script lang="ts">
import Vue from 'vue';
import { Component,Prop } from "vue-property-decorator";

import AddUser from "@/components/user/AddUser.vue";
@Component({
components :{
    AddUser
}
})
export default class Modal extends Vue{
    @Prop() data:any;
    @Prop() title:string;
    @Prop() component:string;
    @Prop() show:boolean;
    @Prop() animationType:string;
    @Prop() width:string|null;
    @Prop() bgOverlay : string|null;

    Close(){
        this.$emit("closeModal");
    }

    closeModal(){
        this.$emit("closeModal");
    }
}
</script>