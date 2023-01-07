<template>
    <ion-page>

        <HeaderMobile title="Aemet"></HeaderMobile>

        <ion-content :fullscreen="true">
            <div id="container">
                <TitleSlide></TitleSlide>

                <div class="box-cards">
                    <h1>
                        OBTENER DATOS AEMET
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

export default defineComponent({
    name: 'AemetPage',
    components: {
        IonContent,
        IonPage,
        HeaderMobile,
        TitleSlide,
    },
    setup() {

        return {
        }
    }
});
</script>

<style scoped>

</style>
