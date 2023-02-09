<template>
    <div>
        <ion-grid class="box-timeline-status-Point">
            <ion-row>
                <ion-col class="text-center" size="6">
                    [ SOLECITO ]
                </ion-col>

                <ion-col class="text-left card-with-text" size="6">
                    <div>Actual</div>
                    <div>Soleado/Nublado</div>
                    <div>[ ICON ] Brisa/Calma 20ºC</div>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TimeLineStatusPoint',
});
</script>

<style scoped>
.box-timeline-status-Point {}

.card-with-text {
    background-color: #01203050;
    border-radius: 10px;
    padding: 10px;
}
</style>
