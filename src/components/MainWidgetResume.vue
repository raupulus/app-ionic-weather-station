<template>
    <div v-if="datas">
        <div class="container justify-center w-full px-4 mx-auto mt-8 lg:mt-16">
            <div class="flex flex-wrap w-full lg:w-auto">
                <div class="flex w-full bg-auto rounded-lg lg:w-1/2"
                    :style="{ backgroundImage: `url(${datas.image})` }">
                    <div class="w-full py-6 pl-8 pr-32 text-white bg-blue-400 rounded-lg opacity-90">
                        <div class="mb-2">

                            <i :class="datas.icon"></i>

                            <h2 class="pb-1 text-3xl font-bold leading-none">
                                {{ stringUTCToWeekDay(datas.created_at) }}
                            </h2>

                            <h3 class="pb-2 pl-1 leading-none">
                                {{ stringUTCToLocaleDate(datas.created_at) }}
                            </h3>
                        </div>

                        <div v-for="column, idx in getColumns(datas)" class="inline-block text-center" :key="idx">
                            <i class="text-8xl" :class="datas.icon" v-if="idx === 0"></i>

                            <strong
                                class="block p-2 mt-4 ml-2 text-4xl leading-none bg-gray-800 rounded-md font-weight-bolder">
                                {{ datas[column] }}
                                {{ getUnity(datas.slug, column) }}
                            </strong>

                        </div>

                        <span class="block text-xl font-bold capitalize">
                            {{ datas.dayStatus }}
                        </span>
                    </div>
                </div>


                <div class="flex w-full ml-0 -mt-3 lg:w-1/2">
                    <div class="w-full p-8 text-white bg-gray-800 lg:my-3 lg:rounded-r-lg">

                        <div class="flex flex-row">

                            <div class="flex flex-col w-1/4 mx-1 bg-gray-900 rounded-lg"
                                v-for="historical of datas.historical" :key="historical.slug">
                                <div class="pt-2 mb-2 text-center">
                                    <i :class="historical.icon"></i>
                                </div>
                                <div class="text-center">
                                    <b class="font-normal">
                                        {{ stringUTCToHour(historical.created_at) }}
                                    </b>

                                    <br>

                                    <strong class="text-xl">
                                        {{ historical.value }}
                                        {{ getUnity(datas.slug, getColumns(datas)[0]) }}
                                    </strong>
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
import { defineComponent, PropType } from 'vue';
import { TemperatureType } from '@/types/TemperatureType';
import { temperatureIcon } from '@/helpers/IconHelper';
import { stringUTCToHour, stringUTCToLocaleDate, stringUTCToWeekDay } from '@/helpers/DateHelper';
import { getUnity, getColumns } from '@/helpers/UnitHelper';
import { HumidityType } from '../types/HumidityType';

//import { ObjectToString } from '@/types/UnitType';

export default defineComponent({
    name: 'MainWidgetResume',
    components: {
    },
    props: {
        datas: {
            type: Object as PropType<TemperatureType | HumidityType>,
            required: false,
        }
    },
    setup() {
        return {
            temperatureIcon,
            stringUTCToHour,
            getUnity,
            getColumns,
            stringUTCToLocaleDate,
            stringUTCToWeekDay,
        };
    },
});

</script>

<style scoped>

</style>
