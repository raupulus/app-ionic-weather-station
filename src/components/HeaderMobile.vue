<template>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-header collapse="condense">
        <ion-toolbar>
            <ion-title size="large">Chipiona</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
    name: 'HeaderMobile',
    props: {
        title: {
            type: String,
            default: 'El tiempo en Chipiona'
        }
    },
    components: {
        IonButtons,
        IonHeader,
        IonMenuButton,
        IonTitle,
        IonToolbar,
    },
});
</script>

<style scoped>

</style>
