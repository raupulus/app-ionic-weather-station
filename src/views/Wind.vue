<template>
    <ion-page>

        <HeaderMobile title="Viento"></HeaderMobile>

        <ion-content :fullscreen="true">
            <div id="container">
                <TitleSlide></TitleSlide>

                <div class="box-cards">
                    <div v-if="datas">
                        <MainWidgetResume :datas="datas"></MainWidgetResume>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage } from '@ionic/vue';

import HeaderMobile from '@/components/HeaderMobile.vue';
import TitleSlide from '@/components/TitleSlide.vue';

import MainWidgetResume from '@/components/MainWidgetResume.vue';

import { windData } from '@/composables/windData';

export default defineComponent({
    name: 'WindPage',
    components: {
        IonContent,
        IonPage,
        HeaderMobile,
        TitleSlide,
        MainWidgetResume
    },
    setup() {
        let datas = windData();

        return {
            datas
        }
    }
});
</script>

<style scoped>

</style>
