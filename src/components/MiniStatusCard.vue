<template>
    <div class="box-card">
        <div class="divisor divisor-top">
            {{data.name}}
        </div>

        <div class="divisor divisor-middle"
             :class="'divisor-middle-' + getColumns(data).length">
            <div class="divisor-middle-item"
                v-for="column, idx in getColumns(data)" :key="idx">
                <span class="data">
                    {{data[column]}}

                    <span v-if="getUnity(data.slug, column)" class="data-unity">
                        {{getUnity(data.slug, column)}}
                    </span>
                </span>

            </div>
        </div>

        <div class="divisor divisor-bottom">
            <apexchart type="bar"
            width="200px"
                class="chart"
            :options="chartOptions" :series="series"></apexchart>

            <p class="center">
                <small>
                    {{data.created_at}}
                </small>
            </p>
        </div>

    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'

// https://apexcharts.com/vue-chart-demos/area-charts/datetime-x-axis/
// https://github.com/apexcharts/vue3-apexcharts
import VueApexCharts from "vue3-apexcharts";

import { units } from '@/helpers/UnitHelper';


export default defineComponent({
    name: 'MiniStatusCard',
    props: {
        data: {
            type: Object,
            required: true,
        }
    },

    components: {
        apexchart: VueApexCharts,
    },

    setup(props: any) {
        let diffColumns = ref(['name', 'slug', 'created_at', 'historical']);

        const getColumns = (data: any) => Object.keys(data).filter((item: any) => {
            return diffColumns.value.indexOf(item) === -1;
        });

        /**
         * Obtiene las unidades de medidas de las columnas
         *
         * @param slug Slug de la columna
         * @param column Nombre de la columna
         */
        function getUnity(slug: string, column: string) {
            let datas = units();

            return datas[slug] && datas[slug][column] ? datas[slug][column] : '';
        }

        return {
            getColumns,
            getUnity,
            series: [{
                name: props.data.name,
                type: 'area',
                color: '#ffb300',
                data: props.data.historical ? props.data.historical.map((item: any) => {
                    return item.value;
                }) : []
            }],
            chartOptions: {
                chart: {
                    zoom: {
                        enabled: false,
                    },
                },

                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth',
                },
                markers: {
                    size: 10,
                    colors: undefined,
                    strokeColors: '#000',
                    strokeWidth: 2,
                    strokeOpacity: 0.9,
                    strokeDashArray: 0,
                    fillOpacity: 1,
                    discrete: [],
                    shape: "circle",
                    radius: 3,
                    offsetX: 0,
                    offsetY: 0,
                    onClick: undefined,
                    onDblClick: undefined,
                    showNullDataPoints: true,
                    hover: {
                        size: undefined,
                        sizeOffset: 3
                    }
                },

                plotOptions: {
                    bar: {
                        columnWidth: "20%"
                    }
                },

                xaxis: {
                    type: 'datetime',
                    categories: props.data.historical ? props.data.historical.map((item: any) => {
                        return item.timestamp;
                    }) : []

                },

                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },

            selection: 'all',
        }
    }
});
</script>



<style scoped>
.box-card {
        margin: 10px;
        padding: 10px;
                width: 100%;
        height: 100%;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .divisor {
        width: 100%;
        margin: 5px 0;
        font-size: 1.2rem;
    }

    .divisor-top {
        text-align: center;
        font-weight: 800;
        font-size: 1.5rem;
    }

    .divisor-middle {
        display: grid;
        text-align: center;
    }

    .divisor-middle-1 {
        grid-template-columns: repeat(1, 1fr);
    }

    .divisor-middle-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .divisor-middle-3 {
        grid-template-columns: repeat(3, 1fr);
    }

    .divisor-middle-4 {
        grid-template-columns: repeat(4, 1fr);
    }

    .divisor-middle-5 {
        grid-template-columns: repeat(5, 1fr);
    }

    .divisor-middle-6 {
        grid-template-columns: repeat(6, 1fr);
    }

    .divisor-middle-item {
        margin: 5px 2px;
        padding: 5px 8px;
        background-color: rgba(135, 167, 246, 0.469);
        border-radius: 5px;
    }

    @media screen and (max-width: 768px) {
        .box-card {
            width: 100%;
            margin: 0;
        }
    }

    .divisor-middle-item span.data {
        display: block;
        margin: auto;
        padding: 15px;
        font-size: 2.5rem;
        font-weight: 800;
        background-color: rgba(46, 46, 45, 0.159);
        border-radius: 5px;
    }

    .divisor-bottom {
        text-align: center;
    }

    .data-unity {
        font-size: 1rem !important;
        font-weight: 400 !important;
    }
    .chart {
        margin:auto;
        width: 200px;
        max-width: 200px;
    }
</style>
