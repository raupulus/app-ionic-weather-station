<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>{{ $route.params.id }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">test</ion-title>
                </ion-toolbar>
            </ion-header>

            <div id="container">

                <h1 class="title" :style="{ backgroundImage: `url(${require(`@/assets/images/titlebackground.jpg`) })` }">
                    Resumen
                </h1>

                <div class="box-cards">
                    <div class="card-resume"
                    v-for="data of datas" :key="data.slug">
                        -{{ data.slug }}-
                    </div>

                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { useResumeData } from '../composables/useResumeData';

export default defineComponent({
    name: 'FolderPage',
    components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar
    },
    setup() {

        const datas = useResumeData().datas;

        return {
            //datas: useResumeData()
            datas
        }
    }
});
</script>

<style scoped>
.title {
    margin-top: 0;
    padding: 40px 0;
    text-align: center;
    font-weight: 800;
    font-size: 3rem;
    background-color: rgb(164, 199, 252);
    color: #ded8d8;
    text-shadow:
        1px 1px 1px rgb(37, 36, 36),
        -1px 1px 1px rgb(37, 36, 36),
        1px -1px 1px rgb(37, 36, 36),
        -1px -1px 1px rgb(37, 36, 36);
}
.box-cards {
    margin: auto;
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.card-resume {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}
</style>
