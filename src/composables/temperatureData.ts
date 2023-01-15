import { ref } from 'vue'
import { TemperatureType } from '../types/TemperatureType';

import { prepareTemperature } from '@/helpers/PrepareDataFromApiHelper';

import { LaravelEcho } from '@/plugins/LaravelEcho';


export function temperatureData() {
    const datas = ref<TemperatureType | null>(null)

    const API_URL = process.env.VUE_APP_API_URL

    fetch(API_URL + '/weatherstation/v1/temperature')
        .then(response => response.json())
        .then(data => datas.value = prepareTemperature(data.datas));

    const echo = LaravelEcho();

    echo.channel('weather-station')
        .listen('WeatherStationUpdateEvent', async (data: any) => {
            //console.log('new message received')
            //console.log(data)

            if (datas.value && data.datas.slug === 'temperature') {
                datas.value = prepareTemperature(data.datas);
            }
        })

    return datas
}
