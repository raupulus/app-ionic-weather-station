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

    /*
    setTimeout(() => {
        datas.value = {
            name: 'Humidity',
            slug: 'humidity',
            value: 91,
            created_at: '2023-01-03 21:50:00',
            dayStatus: 'soleado',
            icon: humidityIcon('soleado'),
            image: humidityImage('soleado'),
            historical: [
                {
                    name: 'Humidity',
                    slug: 'humidity',
                    value: 88,
                    created_at: '2023-01-03 21:40:00',
                    dayStatus: 'soleado',
                    icon: humidityIcon('soleado'),
                    image: humidityImage('soleado'),
                },
                {
                    name: 'Humidity',
                    slug: 'humidity',
                    value: 84,
                    created_at: '2023-01-03 21:30:00',
                    dayStatus: 'soleado',
                    icon: humidityIcon('soleado'),
                    image: humidityImage('soleado'),
                },
                {
                    name: 'Humidity',
                    slug: 'humidity',
                    value: 82,
                    created_at: '2023-01-03 21:20:00',
                    dayStatus: 'soleado',
                    icon: humidityIcon('soleado'),
                    image: humidityImage('soleado'),
                },
                {
                    name: 'Humidity',
                    slug: 'humidity',
                    value: 75,
                    created_at: '2023-01-03 21:10:00',
                    dayStatus: 'soleado',
                    icon: humidityIcon('soleado'),
                    image: humidityImage('soleado'),
                },

            ],
        }
    }, 1000);

    */
    /*
    setInterval(() => {
        if (datas.value && datas.value.value < 100) {
            datas.value.value++;
        }
    }, 3000);

    */

    const echo = LaravelEcho();

    echo.channel('weather-station')
        .listen('WeatherStationUpdateEvent', async (data: any) => {
            console.log('new message received');
            console.log(data);

            // TODO: Solucionar la mezcla de datos


            if (datas.value && data.datas.slug === 'humidity') {
                datas.value = prepareHumidity(data.datas);
            }
        })

    return datas
}
