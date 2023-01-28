
import { ref } from 'vue'
import { PressureType } from '@/types/PressureType';
import { preparePressure } from '../helpers/PrepareDataFromApiHelper';
import { LaravelEcho } from '@/plugins/LaravelEcho';

export function pressureData() {
    const datas = ref<PressureType | null>(null)

    const API_URL = process.env.VUE_APP_API_URL

    fetch(API_URL + '/weatherstation/v1/pressure')
        .then(response => response.json())
        .then(data => datas.value = preparePressure(data.datas));

    const echo = LaravelEcho();

    echo.channel('weather-station')
        .listen('WeatherStation\\PressureUpdateEvent', async (data: any) => {

            if (datas.value && data.datas) {
                datas.value = preparePressure(data.datas);
            }
        })

    return datas
}
