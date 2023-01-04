<template>
    <ion-page>

        <HeaderMobile title="Resumen Global"></HeaderMobile>

        <ion-content :fullscreen="true">
            <div id="container">
                <TitleSlide></TitleSlide>

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
import { IonContent, IonPage } from '@ionic/vue';
import { useResumeData } from '../composables/useResumeData';
import MiniStatusCard from '@/components/MiniStatusCard.vue';

import HeaderMobile from '@/components/HeaderMobile.vue';
import TitleSlide from '@/components/TitleSlide.vue';

export default defineComponent({
    name: 'ResumePage',
    components: {
        IonContent,
        IonPage,
        MiniStatusCard,
        HeaderMobile,
        TitleSlide
    },
    setup() {

        const datas = useResumeData().datas;

        return {
            datas
        }
    }
});
</script>

<style scoped>
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
