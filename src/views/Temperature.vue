<template>
    <ion-page>

        <HeaderMobile></HeaderMobile>

        <ion-content :fullscreen="true">
            <div id="container">
                <TitleSlide></TitleSlide>

                <div class="box-cards">
                    <div>
                        <TemperatureResume :datas="datas"></TemperatureResume>
                    </div>
                    <h1>
                        AQUÍ TODO EL CONTENIDO EN TARJETITAS
                    </h1>
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

import TemperatureResume from '@/components/temperature/TemperatureResume.vue';

import { temperatureData } from '../composables/temperatureData';

export default defineComponent({
    name: 'FolderPage',
    components: {
        IonContent,
        IonPage,
        HeaderMobile,
        TitleSlide,
        TemperatureResume
    },
    setup() {
        let datas = temperatureData();

        return {
            datas
        }
    }
});
</script>

<style scoped>

</style>
