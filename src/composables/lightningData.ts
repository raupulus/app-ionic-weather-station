import { ref } from 'vue'
import { LightningType } from '@/types/LightningType';
import { LaravelEcho } from '../plugins/LaravelEcho';
import { prepareLightning } from '../helpers/PrepareDataFromApiHelper';

export function lightningData() {
    const datas = ref<LightningType | null>(null)

    const API_URL = process.env.VUE_APP_API_URL

    fetch(API_URL + '/weatherstation/v1/lightning')
        .then(response => response.json())
        .then(data => datas.value = prepareLightning(data.datas));

    const echo = LaravelEcho();

    echo.channel('weather-station')
        .listen('WeatherStationUpdateEvent', async (data: any) => {

            if (datas.value && data.datas.slug === 'lightning') {
                datas.value = prepareLightning(data.datas);
            }
        })


    return datas
}
