<template>
    <div>
        <div class="container justify-center w-full mx-auto mt-16 lg:mt-64 lg:px-40">
            <div class="flex flex-wrap w-full lg:w-auto">
                <div class="flex w-full bg-auto rounded-lg lg:w-1/2"
                    :style="{ backgroundImage: `url(${require(`@/assets/images/backgrounds/temperature.webp`)})` }">
                    <div class="w-full py-6 pl-8 pr-32 text-white bg-blue-400 rounded-lg opacity-90">
                        <div class="mb-20">

                            <h2 class="pb-1 text-3xl font-bold leading-none">
                                {{ dayOfWeek }}
                            </h2>

                            <h3 class="pb-2 pl-1 leading-none">
                                {{ date }}
                            </h3>
                        </div>

                        <div>
                            <ion-icon :icon="sunnyOutline" class="text-8xl"></ion-icon>
                            <strong class="block text-6xl leading-none font-weight-bolder">
                                {{ datas.value }}ºC
                            </strong>
                            <b class="block text-2xl font-bold">Sunny</b>
                        </div>
                    </div>
                </div>







                <div class="flex w-full ml-0 lg:w-1/2">
                    <div class="w-full p-8 text-white bg-gray-800 lg:my-3 lg:rounded-r-lg">
                        <div class="flex justify-between w-64 w-full mb-4">
                            <div class="w-auto text-right">10 %</div>
                        </div>
                        <div class="flex justify-between w-64 w-full mb-4">
                            <div class="w-auto text-right">29 %</div>
                        </div>
                        <div class="flex justify-between w-64 w-full mb-8">
                            <div class="w-auto text-right">12 Mph</div>
                        </div>
                        <div class="flex flex-row">
                            <div class="flex flex-col w-1/4 pb-4 text-black bg-gray-100 rounded-lg">
                                <div class="pt-2 mb-2 text-center">
                                    <svg class="w-10 mx-auto" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129"
                                        enable-background="new 0 0 129 129">
                                        <g>
                                            <path
                                                d="m64.5,92.6c15.5,0 28-12.6 28-28s-12.6-28-28-28-28,12.6-28,28 12.5,28 28,28zm0-47.9c11,0 19.9,8.9 19.9,19.9 0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#000000" />
                                            <path
                                                d="m68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#000000" />
                                            <path
                                                d="m60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#000000" />
                                            <path
                                                d="m96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#000000" />
                                            <path
                                                d="m23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#000000" />
                                            <path
                                                d="m122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#000000" />
                                            <path
                                                d="m10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#000000" />
                                            <path
                                                d="m102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#000000" />
                                            <path
                                                d="m38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#000000" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="text-center">
                                    <b class="font-normal">Tue</b><br>
                                    <strong class="text-xl">29ºC</strong>
                                </div>
                            </div>

                            <div class="flex flex-col w-1/4 bg-gray-900 rounded-lg">
                                <div class="pt-2 mb-2 text-center">
                                    <svg class="w-10 mx-auto" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px"
                                        y="0px" viewBox="0 0 33.062 33.062"
                                        style="enable-background:new 0 0 33.062 33.062;" xml:space="preserve">
                                        <path
                                            d="M25.615,26.608H6.442C2.89,26.608,0,23.719,0,20.168c0-3.502,2.81-6.361,6.294-6.439c1.241-4.304,5.161-7.275,9.67-7.275   c3.736,0,7.101,2.023,8.866,5.306c0.26-0.026,0.522-0.04,0.784-0.04c4.106,0,7.446,3.339,7.446,7.443   C33.062,23.268,29.721,26.608,25.615,26.608z M6.527,14.732C3.437,14.732,1,17.17,1,20.168c0,2.999,2.441,5.439,5.442,5.439h19.173   c3.555,0,6.446-2.892,6.446-6.445c0-3.553-2.892-6.443-6.446-6.443c-0.314,0-0.63,0.022-0.939,0.066   c-0.229,0.063-0.469-0.046-0.574-0.259c-1.545-3.13-4.663-5.073-8.137-5.073c-4.183,0-7.803,2.839-8.804,6.904   c-0.056,0.228-0.278,0.372-0.498,0.381l-0.127-0.007C6.533,14.732,6.53,14.732,6.527,14.732z"
                                            data-original="#000000" class="active-path" data-old_color="#000000"
                                            fill="#FFFFFF" />
                                    </svg>
                                </div>
                                <div class="text-center">
                                    <b class="font-normal">Wed</b><br>
                                    <strong class="text-xl">21ºC</strong>
                                </div>
                            </div>
                            <div class="flex flex-col w-1/4 bg-gray-900 rounded-lg">
                                <div class="pt-2 mb-2 text-center">
                                    <svg class="w-10 mx-auto" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px"
                                        y="0px" viewBox="0 0 33.062 33.062"
                                        style="enable-background:new 0 0 33.062 33.062;" xml:space="preserve">
                                        <path
                                            d="M25.615,26.608H6.442C2.89,26.608,0,23.719,0,20.168c0-3.502,2.81-6.361,6.294-6.439c1.241-4.304,5.161-7.275,9.67-7.275   c3.736,0,7.101,2.023,8.866,5.306c0.26-0.026,0.522-0.04,0.784-0.04c4.106,0,7.446,3.339,7.446,7.443   C33.062,23.268,29.721,26.608,25.615,26.608z M6.527,14.732C3.437,14.732,1,17.17,1,20.168c0,2.999,2.441,5.439,5.442,5.439h19.173   c3.555,0,6.446-2.892,6.446-6.445c0-3.553-2.892-6.443-6.446-6.443c-0.314,0-0.63,0.022-0.939,0.066   c-0.229,0.063-0.469-0.046-0.574-0.259c-1.545-3.13-4.663-5.073-8.137-5.073c-4.183,0-7.803,2.839-8.804,6.904   c-0.056,0.228-0.278,0.372-0.498,0.381l-0.127-0.007C6.533,14.732,6.53,14.732,6.527,14.732z"
                                            data-original="#000000" class="active-path" data-old_color="#000000"
                                            fill="#FFFFFF" />
                                    </svg>
                                </div>
                                <div class="text-center">
                                    <b class="font-normal">Thu</b><br>
                                    <strong class="text-xl">18ºC</strong>
                                </div>
                            </div>
                            <div class="flex flex-col w-1/4 bg-gray-900 rounded-lg">
                                <div class="pt-2 mb-2 text-center">
                                    <svg class="w-10 mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1"
                                        viewBox="0 0 129 129" enable-background="new 0 0 129 129">
                                        <g>
                                            <path
                                                d="m64.5,92.6c15.5,0 28-12.6 28-28s-12.6-28-28-28-28,12.6-28,28 12.5,28 28,28zm0-47.9c11,0 19.9,8.9 19.9,19.9 0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#FFFFFF" />
                                            <path
                                                d="m68.6,23.6v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#FFFFFF" />
                                            <path
                                                d="m60.4,105.6v12.9c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1,1.8-4.1,4.1z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#FFFFFF" />
                                            <path
                                                d="m96.4,38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8 0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#FFFFFF" />
                                            <path
                                                d="m23.5,105.6c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8,0l-9.1,9.1c-1.6,1.6-1.6,4.2 0,5.8z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#FFFFFF" />
                                            <path
                                                d="m122.5,64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.8,4.1 4.1,4.1h12.9c2.2,1.42109e-14 4.1-1.8 4.1-4.1z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#FFFFFF" />
                                            <path
                                                d="m10.6,68.7h12.9c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3,0-4.1,1.8-4.1,4.1 0,2.3 1.9,4.1 4.1,4.1z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#FFFFFF" />
                                            <path
                                                d="m102.6,106.8c1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.9,1.2 2.9,1.2z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#FFFFFF" />
                                            <path
                                                d="m38.4,38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l9.1,9.1c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2z"
                                                data-original="#000000" class="active-path" data-old_color="#000000"
                                                fill="#FFFFFF" />
                                        </g>
                                    </svg>
                                </div>
                                <div class="text-center">
                                    <b class="font-normal">Fri</b><br>
                                    <strong class="text-xl">25ºC</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { sunnyOutline } from 'ionicons/icons';
import { TemperatureType } from '../../types/TemperatureType';
import { PropType } from 'vue';

export default defineComponent({
    name: 'TemperatureResume',
    components: {
        IonIcon,
    },
    props: {
        datas: {
            type: Object as PropType<TemperatureType>,
            required: false,
        }
    },
    setup(props: any) {
        console.log(props.datas.value);
        console.log(props.datas.slug);

        const dayOfWeek = 'Thuesday';
        const date = '02 Jan 23';


        return {
            dayOfWeek,
            date,
            sunnyOutline
        };
    },
});

</script>

<style scoped>

</style>
