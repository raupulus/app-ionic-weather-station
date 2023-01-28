import { ref } from 'vue'
import { WindType } from '@/types/WindType';
import { prepareWind } from '@/helpers/PrepareDataFromApiHelper';
import { LaravelEcho } from '../plugins/LaravelEcho';

export function windData() {
    const datas = ref<WindType | null>(null)

    const API_URL = process.env.VUE_APP_API_URL

    fetch(API_URL + '/weatherstation/v1/wind')
        .then(response => response.json())
        .then(data => datas.value = prepareWind(data.datas));

    const echo = LaravelEcho();

    echo.channel('weather-station')
        .listen('WeatherStation\\WindUpdateEvent', async (data: any) => {
            if (datas.value && data.datas) {
                datas.value = prepareWind(data.datas);
            }
        })


    return datas
}
