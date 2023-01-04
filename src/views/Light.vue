<template>
    <ion-page>

        <HeaderMobile :title="datas ? datas.name : 'Loading...'"></HeaderMobile>

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

import { lightData } from '@/composables/lightData';

export default defineComponent({
    name: 'LightPage',
    components: {
        IonContent,
        IonPage,
        HeaderMobile,
        TitleSlide,
        MainWidgetResume
    },
    setup() {
        let datas = lightData();

        return {
            datas
        }
    }
});
</script>

<style scoped>

</style>
