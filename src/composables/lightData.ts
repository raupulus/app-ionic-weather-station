import { ref } from 'vue'
import { LightType } from '@/types/LightType';
import { LaravelEcho } from '../plugins/LaravelEcho';
import { prepareLight } from '../helpers/PrepareDataFromApiHelper';

export function lightData() {
    const datas = ref<LightType | null>(null)

    const API_URL = process.env.VUE_APP_API_URL

    fetch(API_URL + '/weatherstation/v1/light')
        .then(response => response.json())
        .then(data => datas.value = prepareLight(data.datas));

    const echo = LaravelEcho();

    echo.channel('weather-station')
        .listen('WeatherStationUpdateEvent', async (data: any) => {

            if (datas.value && data.datas.slug === 'light') {
                datas.value = prepareLight(data.datas);
            }
        })

    return datas
}
