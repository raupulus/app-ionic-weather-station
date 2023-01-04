import { temperatureIcon } from '@/helpers/IconHelper'
import { ResumeDataType } from '@/types/ResumeDataType'
import { ref } from 'vue'
import { temperatureImage, pressureImage, windImage, lightImage } from '../helpers/ImageHelper';
import { pressureIcon, windIcon, lightIcon } from '../helpers/IconHelper';

export function useResumeData() {
    const datas = ref<ResumeDataType | null>(null)

    // TODO: Fetch o conectar al servidor websocket

    datas.value = {
        temperature: {
            name: 'Temperature',
            slug: 'temperature',
            value: 23.5,
            created_at: '2023-01-03 21:50:00',
            dayStatus: 'soleado',
            icon: temperatureIcon('soleado'),
            image: temperatureImage('soleado'),
            historical: [
                {
                    name: 'Temperatura',
                    slug: 'temperature',
                    value: 18,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'soleado',
                    icon: temperatureIcon('soleado'),
                    image: temperatureImage('soleado'),
                },
                {
                    name: 'Temperatura',
                    slug: 'temperature',
                    value: 18,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'soleado',
                    icon: temperatureIcon('soleado'),
                    image: temperatureImage('soleado'),
                },
                {
                    name: 'Temperatura',
                    slug: 'temperature',
                    value: 18,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'soleado',
                    icon: temperatureIcon('soleado'),
                    image: temperatureImage('soleado'),
                },
                {
                    name: 'Temperatura',
                    slug: 'temperature',
                    value: 18,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'soleado',
                    icon: temperatureIcon('soleado'),
                    image: temperatureImage('soleado'),
                },
            ],

        },
        humidity: {
            name: 'Humidity',
            slug: 'humidity',
            value: 91,
            created_at: '2023-01-03 21:50:00',
            dayStatus: 'soleado',
            icon: temperatureIcon('soleado'),
            image: temperatureImage('soleado'),
            historical: [
                {
                    name: 'Humidity',
                    slug: 'humidity',
                    value: 88,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'soleado',
                    icon: temperatureIcon('soleado'),
                    image: temperatureImage('soleado'),
                },
                {
                    name: 'Humidity',
                    slug: 'humidity',
                    value: 72,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'soleado',
                    icon: temperatureIcon('soleado'),
                    image: temperatureImage('soleado'),
                },
                {
                    name: 'Humidity',
                    slug: 'humidity',
                    value: 76,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'soleado',
                    icon: temperatureIcon('soleado'),
                    image: temperatureImage('soleado'),
                },
                {
                    name: 'Humidity',
                    slug: 'humidity',
                    value: 65,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'soleado',
                    icon: temperatureIcon('soleado'),
                    image: temperatureImage('soleado'),
                },

            ],
        },
        pressure: {
            name: 'Pressure',
            slug: 'pressure',
            value: 1013,
            created_at: '2023-01-03 21:50:00',
            dayStatus: 'soleado',
            icon: pressureIcon('soleado'),
            image: pressureImage('soleado'),
            historical: [
                {
                    name: 'Pressure',
                    slug: 'pressure',
                    value: 1012,
                    created_at: '2023-01-03 21:40:00',
                    dayStatus: 'soleado',
                    icon: pressureIcon('soleado'),
                    image: pressureImage('soleado'),
                },
                {
                    name: 'Pressure',
                    slug: 'pressure',
                    value: 1013,
                    created_at: '2023-01-03 21:30:00',
                    dayStatus: 'soleado',
                    icon: pressureIcon('soleado'),
                    image: pressureImage('soleado'),
                },
                {
                    name: 'Pressure',
                    slug: 'pressure',
                    value: 1009,
                    created_at: '2023-01-03 21:20:00',
                    dayStatus: 'soleado',
                    icon: pressureIcon('soleado'),
                    image: pressureImage('soleado'),
                },
                {
                    name: 'Pressure',
                    slug: 'pressure',
                    value: 1012,
                    created_at: '2023-01-03 21:10:00',
                    dayStatus: 'soleado',
                    icon: pressureIcon('soleado'),
                    image: pressureImage('soleado'),
                },

            ],
        },
        wind: {
            name: 'Wind',
            slug: 'wind',
            speed: 3,
            min: 1,
            max: 5,
            dayStatus: 'anocheciendo',
            icon: windIcon('anocheciendo'),
            image: windImage('anocheciendo'),
            direction: 'SE',
            created_at: '2023-01-03 21:50:00',
            historical: [
                {
                    name: 'Wind',
                    slug: 'wind',
                    speed: 2.5,
                    min: 2,
                    max: 4,
                    direction: 'S',
                    created_at: '2023-01-03 21:40:00',
                    dayStatus: 'soleado',
                    icon: windIcon('soleado'),
                    image: windImage('soleado'),
                },
                {
                    name: 'Wind',
                    slug: 'wind',
                    speed: 2,
                    min: 1,
                    max: 3,
                    direction: 'N',
                    created_at: '2023-01-03 21:30:00',
                    dayStatus: 'soleado',
                    icon: windIcon('soleado'),
                    image: windImage('soleado'),
                },
                {
                    name: 'Wind',
                    slug: 'wind',
                    speed: 3,
                    min: 2,
                    max: 5,
                    direction: 'NE',
                    created_at: '2023-01-03 21:20:00',
                    dayStatus: 'soleado',
                    icon: windIcon('soleado'),
                    image: windImage('soleado'),
                },
                {
                    name: 'Wind',
                    slug: 'wind',
                    speed: 1,
                    min: 0.2,
                    max: 3,
                    direction: 'SE',
                    created_at: '2023-01-03 21:10:00',
                    dayStatus: 'soleado',
                    icon: windIcon('soleado'),
                    image: windImage('soleado'),
                },

            ],
        },
        light: {
            name: 'Light',
            slug: 'light',
            value: 10,
            index: 0,
            uva: 0,
            uvb: 0,
            dayStatus: 'noche',
            icon: lightIcon('noche'),
            image: lightImage('noche'),
            created_at: '2023-01-03 22:50:00',
            historical: [
                {
                    name: 'Light',
                    slug: 'light',
                    value: 18,
                    index: 1,
                    uva: 0,
                    uvb: 0,
                    dayStatus: 'noche',
                    icon: lightIcon('noche'),
                    image: lightImage('noche'),
                    created_at: '2023-01-03 21:50:00',
                },
                {
                    name: 'Light',
                    slug: 'light',
                    value: 30,
                    index: 1,
                    uva: 1,
                    uvb: 1,
                    dayStatus: 'anocheciendo',
                    icon: lightIcon('anocheciendo'),
                    image: lightImage('anocheciendo'),
                    created_at: '2023-01-03 19:00:00',
                },
                {
                    name: 'Light',
                    slug: 'light',
                    value: 40,
                    index: 3,
                    uva: 2,
                    uvb: 1,
                    dayStatus: 'atardecer',
                    icon: lightIcon('atardecer'),
                    image: lightImage('atardecer'),
                    created_at: '2023-01-03 18:00:00',
                },
                {
                    name: 'Light',
                    slug: 'light',
                    value: 80,
                    index: 10,
                    uva: 4,
                    uvb: 3,
                    dayStatus: 'soleado',
                    icon: lightIcon('soleado'),
                    image: lightImage('soleado'),
                    created_at: '2023-01-03 16:00:00',
                },
            ]
        },
        lighting: {
            name: 'Lightning',
            slug: 'lightning',
            distance: 3,
            energy: 451946,
            created_at: '2023-01-03 21:50:00',
            historical: [
                {
                    value: 1,
                    timestamp: '2022-12-30 23:00:00.0000Z',
                },
                {
                    value: 2,
                    timestamp: '2022-12-30 22:00:00.0000Z',
                },
                {
                    value: 3,
                    timestamp: '2022-12-30 21:00:00.0000Z',
                },
            ]
        },
        airQuality: {
            name: 'Air Quality',
            slug: 'air_quality',
            co2: 420,
            tvoc: 0,
            quality: 100,
            created_at: '2023-01-03 21:50:00',
            historical: [
                {
                    value: 418,
                    timestamp: '2022-12-30 23:00:00.0000Z',
                },
                {
                    value: 420,
                    timestamp: '2022-12-30 22:00:00.0000Z',
                },
                {
                    value: 419,
                    timestamp: '2022-12-30 21:00:00.0000Z',
                },
            ]
        }
    }

    return {
        datas
    }
}
