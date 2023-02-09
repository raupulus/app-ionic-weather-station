<template>
    <ion-grid class="box-timeline-status-top">
        <ion-row>
            <ion-col class="text-center" size="6">
                [ SOL ]
            </ion-col>

            <ion-col class="text-right card-with-text" size="6">
                <div>Actual</div>
                <div>Soleado/Nublado</div>
                <div>[ ICON ] Brisa/Calma 20ºC</div>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TimeLineStatusTop',
});
</script>

<style scoped>
.box-timeline-status-top {}

.card-with-text {
    background-color: #01203050;
    border-radius: 10px;
    padding: 10px;
}
</style>
