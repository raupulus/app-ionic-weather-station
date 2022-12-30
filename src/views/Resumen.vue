<template>
    <ion-page>
        <div class="p-5 flex flex-col space-y-4">
            <div class="flex flex-col space-y-2">
                <div>Basic badges</div>
                <div class="flex space-x-2">
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-xs px-3 bg-gray-200 text-gray-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-xs px-3 bg-red-200 text-red-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-xs px-3 bg-orange-200 text-orange-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-xs px-3 bg-yellow-200 text-yellow-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-xs px-3 bg-green-200 text-green-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-xs px-3 bg-teal-200 text-teal-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-xs px-3 bg-blue-200 text-blue-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-xs px-3 bg-purple-200 text-purple-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-xs px-3 bg-indigo-200 text-indigo-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-xs px-3 bg-pink-200 text-pink-800 rounded-full">Badge</div>
                </div>
            </div>

            <div class="flex flex-col space-y-2">
                <div>Large badges</div>
                <div class="flex space-x-2">
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-sm px-3 bg-gray-200 text-gray-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-sm px-3 bg-red-200 text-red-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-sm px-3 bg-orange-200 text-orange-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-sm px-3 bg-yellow-200 text-yellow-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-sm px-3 bg-green-200 text-green-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-sm px-3 bg-teal-200 text-teal-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-sm px-3 bg-blue-200 text-blue-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-sm px-3 bg-purple-200 text-purple-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-sm px-3 bg-indigo-200 text-indigo-800 rounded-full">Badge</div>
                    <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                        class="text-sm px-3 bg-pink-200 text-pink-800 rounded-full">Badge</div>
                </div>
            </div>

            <div class="flex flex-col space-y-2">
                <div>Badge with dot</div>
                <div class="flex space-x-2">
                    <div style="padding-top: 0.2em; padding-bottom: 0.2rem"
                        class="flex items-center space-x-1 text-xs px-2 bg-gray-200 text-gray-800 rounded-full">
                        <div style="width: 0.4rem; height: 0.4rem" class="bg-gray-500 rounded-full"></div>
                        <div>Badge</div>
                    </div>
                    <div style="padding-top: 0.2em; padding-bottom: 0.2rem"
                        class="flex items-center space-x-1 text-sm px-2 bg-gray-200 text-gray-800 rounded-full">
                        <div style="width: 0.4rem; height: 0.4rem" class="bg-gray-500 rounded-full"></div>
                        <div>Badge</div>
                    </div>
                </div>
            </div>
        </div>

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
                    <div v-for="data of datas" :key="data.slug">
                        <mini-status-card :data="data"></mini-status-card>
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
import MiniStatusCard from '../components/MiniStatusCard.vue';

export default defineComponent({
    name: 'FolderPage',
    components: {
        IonButtons,
        IonContent,
        IonHeader,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar,
        MiniStatusCard,
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
    background-position: center;
    background-size: cover;
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

@media (max-width: 768px) {
    .box-cards {
        margin: 0;
        max-width: 100%;
        padding: 0;
        display: block;
        grid-template-columns: repeat(1, 1fr);
    }
}


</style>
