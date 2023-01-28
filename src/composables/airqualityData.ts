import { ref } from 'vue'
import { AirQualityType } from '@/types/AirQualityType';
import { LaravelEcho } from '../plugins/LaravelEcho';
import { prepareAirQuality } from '../helpers/PrepareDataFromApiHelper';

export function airQualityData() {
    const datas = ref<AirQualityType | null>(null)

    const API_URL = process.env.VUE_APP_API_URL

    fetch(API_URL + '/weatherstation/v1/air-quality')
        .then(response => response.json())
        .then(data => datas.value = prepareAirQuality(data.datas));

    const echo = LaravelEcho();

    echo.channel('weather-station')
        .listen('WeatherStation\\AirQualityUpdateEvent', async (data: any) => {

            if (datas.value && data.datas) {
                datas.value = prepareAirQuality(data.datas);
            }
        })


    return datas
}
