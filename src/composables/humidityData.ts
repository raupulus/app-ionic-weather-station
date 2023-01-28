import { ref } from 'vue'
import { HumidityType } from '@/types/HumidityType';
import { prepareHumidity } from '../helpers/PrepareDataFromApiHelper';
import { LaravelEcho } from '@/plugins/LaravelEcho';

export function humidityData() {
    const datas = ref<HumidityType | null>(null)


    const API_URL = process.env.VUE_APP_API_URL

    fetch(API_URL + '/weatherstation/v1/humidity')
        .then(response => response.json())
        .then(data => datas.value = prepareHumidity(data.datas));

    const echo = LaravelEcho();

    echo.channel('weather-station')
        .listen('WeatherStation\\HumidityUpdateEvent', async (data: any) => {

            if (datas.value && data.datas) {
                datas.value = prepareHumidity(data.datas);
            }
        })

    return datas
}
