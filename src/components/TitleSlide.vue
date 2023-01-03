<template>
    <h1 class="title" :style="{ backgroundImage: `url(${require(`@/assets/images/titlebackground.jpg`)})` }">
        Clima Chipiona
    </h1>
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
    background-color: rgb(164, 199, 252);
    background-position: center;
    background-size: cover;
    color: #ded8d8;
    text-shadow:
        1px 1px 1px rgb(37, 36, 36),
        -1px 1px 1px rgb(37, 36, 36),
        1px -1px 1px rgb(37, 36, 36),
        -1px -1px 1px rgb(37, 36, 36);
}
</style>
