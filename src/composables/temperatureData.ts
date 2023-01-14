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



    /*
    datas.value = {
        name: 'Temperatura',
        slug: 'temperature',
        value: 18,
        created_at: '2023-01-03 22:03:00',
        historical: [
            {
                name: 'Temperatura',
                slug: 'temperature',
                value: 19,
                created_at: '2023-01-03 21:40:00',
                dayStatus: 'anocheciendo',
                icon: temperatureIcon('anocheciendo'),
                image: temperatureImage('anocheciendo'),
            },
            {
                name: 'Temperatura',
                slug: 'temperature',
                value: 20,
                created_at: '2023-01-03 21:30:00',
                dayStatus: 'atardecer',
                icon: temperatureIcon('atardecer'),
                image: temperatureImage('atardecer'),
            },
            {
                name: 'Temperatura',
                slug: 'temperature',
                value: 21,
                created_at: '2023-01-03 21:20:00',
                dayStatus: 'soleado',
                icon: temperatureIcon('soleado'),
                image: temperatureImage('soleado'),
            },
            {
                name: 'Temperatura',
                slug: 'temperature',
                value: 22,
                created_at: '2023-01-03 21:08:00',
                dayStatus: 'nublado',
                icon: temperatureIcon('nublado'),
                image: temperatureImage('nublado'),
            },

        ],
        dayStatus: 'noche',
        icon: temperatureIcon('noche'),
        image: temperatureImage('noche'),
    }
    */


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
