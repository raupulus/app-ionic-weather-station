import { ref } from 'vue'
import { RainType } from '@/types/RainType';
import { LaravelEcho } from '../plugins/LaravelEcho';
import { prepareRain } from '../helpers/PrepareDataFromApiHelper';

export function rainData() {
    const datas = ref<RainType | null>(null)


    const API_URL = process.env.VUE_APP_API_URL

    fetch(API_URL + '/weatherstation/v1/rain')
        .then(response => response.json())
        .then(data => datas.value = prepareRain(data.datas));

    const echo = LaravelEcho();

    echo.channel('weather-station')
        .listen('WeatherStationUpdateEvent', async (data: any) => {

            if (datas.value && data.datas.slug === 'rain') {
                datas.value = prepareRain(data.datas);
            }
        })

    return datas
}
