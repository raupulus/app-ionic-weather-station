
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
        .listen('WeatherStationUpdateEvent', async (data: any) => {
            console.log('new message received');
            console.log(data);

            // TODO: Solucionar la mezcla de datos


            if (datas.value && data.datas.slug === 'pressure') {
                datas.value = preparePressure(data.datas);
            }
        })

    return datas
}
