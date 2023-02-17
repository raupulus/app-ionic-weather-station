<template>
    <div class="m-auto time-line-status-container md:max-w-lg">
        <div>
            <div>Ahora</div>
            <div>Records</div>
        </div>
        <div class="time-line-status-container-top">
            <TimeLineStatusTop hour="18:00"></TimeLineStatusTop>
        </div>

        <div class="time-line-status-container-points">
            <TimeLineStatusPoint hour="17:00"></TimeLineStatusPoint>
            <TimeLineStatusPoint hour="16:00"></TimeLineStatusPoint>
            <TimeLineStatusPoint hour="15:00"></TimeLineStatusPoint>
            <TimeLineStatusPoint hour="14:00"></TimeLineStatusPoint>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TimeLineStatusTop from '@/components/TimelineStatus/TimeLineStatusTop.vue';

import TimeLineStatusPoint from '@/components/TimelineStatus/TimeLineStatusPoint.vue';

export default defineComponent({
    name: 'TimeLineStatus',
    components: {
        TimeLineStatusTop,
        TimeLineStatusPoint,
    },
});
</script>

<style scoped lang="scss">
.time-line-status-container-top {
    background-color: var(--ion-color-warning-shade);
}

.time-line-status-container-points {
    background: linear-gradient(var(--ion-color-warning-shade), 150px, var(--ion-color-primary-tint));
}
</style>
