<template>
    <ion-page>

        <HeaderMobile title="About"></HeaderMobile>

        <ion-content :fullscreen="true">
            <div id="container">

                <div class="text-center">
                    <IonImg :src="require('@/assets/images/about-landing.webp')"
                        class="w-full mx-auto mb-2 sm:w-3/4 lg:w-2/4">
                    </IonImg>
                </div>

                <div class="text-center">
                    <h1 class="max-w-5xl mx-auto mb-6 text-5xl font-extrabold leading-none tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight tails-selected-element"
                        contenteditable="true"> Sobre el proyecto <span
                            class="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">
                            Estación Meteorológica en tiempo real </span>
                        para<br class="hidden lg:block"> Chipiona </h1>
                </div>


                <div class="container px-0 px-8 mx-auto sm:px-12 xl:px-5 tails-selected-element" contenteditable="true">
                    <p class="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold"
                        data-primary="pink-500">
                        Proyecto open source iot.
                    </p>

                    <h3
                        class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
                        Información sobre el Proyecto
                    </h3>

                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
                        data-rounded="rounded-lg" data-rounded-max="rounded-full">
                        <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl" data-primary="purple-500">
                            Objetivos
                        </h3>

                        <div class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">

                            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                                Esta aplicación pretende mostrar el tiempo, en tiempo real, en Chipiona, Cádiz, España.
                            </p>

                            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                                Para conseguirlo, utilizo solo mis propios medios desarrollando toda la infraestructura
                                usando microcontroladores, sensores, vps y distintos lenguajes de programación.
                            </p>
                        </div>
                    </div>

                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
                        data-rounded="rounded-lg" data-rounded-max="rounded-full">
                        <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl" data-primary="purple-500">
                            Motivos para realizar este proyecto
                        </h3>

                        <div class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            <ul role="list" class="list-inside">
                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>

                                    Trabajar con IOT, en concreto con el microcontrolador ESP32 y raspberry pi pico para
                                    recoger datos de sensores y subirlo a la nube
                                </li>

                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>

                                    Utilizar websockets para mostrar los datos en tiempo real tanto con laravel como en
                                    ionic/vuejs.
                                </li>

                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>

                                    Aprender Ionic y typescript, reforzar conocimientos de Vue 3.
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
                        data-rounded="rounded-lg" data-rounded-max="rounded-full">
                        <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl" data-primary="purple-500">
                            ¿Qué tecnologías he usado?</h3>
                        <div class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            <ul role="list" class="list-inside">
                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>
                                    Php/Laravel para el backend, panel de control y API
                                </li>

                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>
                                    Ionic 5, Vue 3 y Typescript para el frontend/app
                                </li>

                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>
                                    ESP32/raspberry pi pico para recoger datos de sensores y subirlos a la nube
                                </li>

                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>
                                    Websockets para mostrar los datos en tiempo real
                                </li>

                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>
                                    VPS para alojar la aplicación/datos
                                </li>

                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>
                                    Gitlab&Github para el control de versiones
                                </li>

                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>
                                    GoCd para el desarrollo continuo
                                </li>

                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>
                                    C++ Para esp32 y obtener datos de estación meteorológica usando RF 868mhz
                                </li>

                                <li class="mt-2">
                                    <i class="text-purple-500 wi wi-day-sunny" style="font-weight: 900;"></i>
                                    C++ y Micropython con Raspberry pi pico para obtener lecturas de sensores.
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3"
                        data-rounded="rounded-lg" data-rounded-max="rounded-full">
                        <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl" data-primary="purple-500">
                            Garantía y Fiabilidad
                        </h3>
                        <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            Estos datos los he ido comparando fielmente con los que ofrecen otras estaciones
                            meteorológicas como AEMET pero no garantizan una precisión y/o fiabilidad total.
                        </p>

                        <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            Todavía estamos en una versión muy verde dónde no se garantiza que se muestren datos
                            reales/fiables aunque haré todo lo posible por que así sea.
                        </p>

                        <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                            Si descubres algún error puedes notificármelo y haré lo posible por solucionarlo cuanto
                            antes.
                        </p>
                    </div>
                </div>


            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonImg, IonContent, IonPage } from '@ionic/vue';

import HeaderMobile from '@/components/HeaderMobile.vue';

export default defineComponent({
    name: 'AboutPage',
    components: {
        IonContent,
        IonPage,
        HeaderMobile,
        IonImg,
    },
    setup() {

        return {
        }
    }
});
</script>

<style scoped>

</style>
