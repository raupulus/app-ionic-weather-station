<template>
    <div class="time-line-status-container">
        <div class="time-line-status-container-top">
            <TimeLineStatusTop></TimeLineStatusTop>
        </div>

        <div class="time-line-status-container-points">
            <TimeLineStatusPoint></TimeLineStatusPoint>
            <TimeLineStatusPoint></TimeLineStatusPoint>
            <TimeLineStatusPoint></TimeLineStatusPoint>
            <TimeLineStatusPoint></TimeLineStatusPoint>
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

<style scoped>
.time-line-status-container {}

.time-line-status-container-top {
    background-color: var(--ion-color-warning-shade);
}

.time-line-status-container-points {
    background: linear-gradient(var(--ion-color-warning-shade), 150px, var(--ion-color-primary-tint));
}
</style>
