<template>


    <div class="box-card">
        <div class="divisor divisor-top">
            {{data.name}}
        </div>

        <div class="divisor divisor-middle"
             :class="'divisor-middle-' + getColumns(data).length">
            <div class="divisor-middle-item"
                v-for="column, idx in getColumns(data)" :key="idx">
                <span>
                    {{data[column]}}
                </span>
            </div>
        </div>

        <div class="divisor divisor-bottom">
            <p>
                Parte inferior (Una gráfica aquí, con la evolución de última hora)
            </p>

            <p class="center">
                <small>
                    {{data.created_at}}
                </small>
            </p>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'MiniStatusCard',
    props: {
        data: {
            type: Object,
            required: true,
        }
    },

    components: {

    },

    setup(props: any) {
        let diffColumns = ref(['name', 'slug', 'created_at']);

        const getColumns = (data: any) => Object.keys(data).filter((item: any) => {
            return diffColumns.value.indexOf(item) === -1;
        });

        return {
            getColumns,
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

    .divisor-middle-item span {
        display: block;
        margin: auto;
        padding: 15px;
        font-size: 3.2rem;
        font-weight: 800;
        background-color: rgba(46, 46, 45, 0.159);
        border-radius: 5px;
    }

    .divisor-bottom {
        text-align: center;
    }
</style>
