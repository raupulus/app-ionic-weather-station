<template>

    <div class="">
        <h1 class="title" :style="{
            background: `linear-gradient(transparent, 70%, var(--ion-color-warning-shade)), url(${require(`@/assets/images/titlebackground.jpg`)}) no-repeat top center fixed`,
            backgroundSize: 'cover',
        }">
            Clima Chipiona
        </h1>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TitleSlide',
    components: {
    },
});
</script>

<style scoped>
.title {
    margin-top: 0;
    padding: 40px 0;
    text-align: center;
    font-weight: 800;
    font-size: 3rem;
    color: #ded8d8;
    text-shadow:
        1px 1px 1px rgb(37, 36, 36),
        -1px 1px 1px rgb(37, 36, 36),
        1px -1px 1px rgb(37, 36, 36),
        -1px -1px 1px rgb(37, 36, 36);
}
</style>
