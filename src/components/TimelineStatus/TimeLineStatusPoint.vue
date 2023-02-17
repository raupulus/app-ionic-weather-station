<template>
    <div>
        <ion-grid class="p-0 box-timeline-status-Point">
            <ion-row class="ion-align-items-center">
                <ion-col class="p-0 text-center background-line-vertical">
                    <img class="w-5/6 p-8 m-auto"
                         :src="require(`@/assets/images/sun/Sol1.svg`)">
                </ion-col>

                <ion-col size="5" size-sm="4" size-lg="3">
                    <div class="p-3 mr-2 card-with-text">
                        <div class="text-center ">
                            <span class="text-4xl font-extrabold">
                                20ºC
                            </span>
                        </div>
                        <div class="mt-3 text-center">
                            <IonIcon :icon="sunnyOutline"
                                    class="text-lg font-bold"></IonIcon>

                            <span class="text-lg font-bold">
                                Soleado
                            </span>
                        </div>

                        <div class="mt-5 text-2xl font-semibold text-center bg-gray-900 rounded bg-opacity-60">
                            {{hour}}
                        </div>
                    </div>


                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCol, IonGrid, IonRow, IonIcon } from '@ionic/vue';
import { sunnyOutline } from 'ionicons/icons';


export default defineComponent({
    name: 'TimeLineStatusPoint',
    components: { IonCol, IonGrid, IonRow, IonIcon },
    props:  [
        'hour',
    ],
    setup() {
        return {
            sunnyOutline,
        };
    },
});
</script>

<style scoped lang="scss">
.card-with-text {
    background-color: #01203050;
    border-radius: 10px;
}

.background-line-vertical {
    background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,0) 48%, rgba(255,255,255,0.7087155963302753) 50%, rgba(0,0,0,0) 52%);
}
</style>
