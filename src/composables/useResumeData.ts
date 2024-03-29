import { temperatureIcon } from '@/helpers/IconHelper'
import { ResumeDataType } from '@/types/ResumeDataType'
import { ref } from 'vue'
import { temperatureImage, pressureImage, windImage, lightImage, rainImage, lightningImage } from '../helpers/ImageHelper';
import { pressureIcon, windIcon, lightIcon, rainIcon, lightningIcon } from '../helpers/IconHelper';

export function useResumeData() {
    const datas = ref<ResumeDataType | null>(null)

    // TODO: Fetch o conectar al servidor websocket

    setTimeout(() => {
        datas.value = {
            temperature: {
                name: 'Temperatura',
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
                        created_at: '2023-01-03 20:50:00',
                        dayStatus: 'soleado',
                        icon: temperatureIcon('soleado'),
                        image: temperatureImage('soleado'),
                    },
                    {
                        name: 'Temperatura',
                        slug: 'temperature',
                        value: 18,
                        created_at: '2023-01-03 19:50:00',
                        dayStatus: 'soleado',
                        icon: temperatureIcon('soleado'),
                        image: temperatureImage('soleado'),
                    },
                    {
                        name: 'Temperatura',
                        slug: 'temperature',
                        value: 18,
                        created_at: '2023-01-03 18:50:00',
                        dayStatus: 'soleado',
                        icon: temperatureIcon('soleado'),
                        image: temperatureImage('soleado'),
                    },
                    {
                        name: 'Temperatura',
                        slug: 'temperature',
                        value: 18,
                        created_at: '2023-01-03 17:50:00',
                        dayStatus: 'soleado',
                        icon: temperatureIcon('soleado'),
                        image: temperatureImage('soleado'),
                    },
                ],

            },
            humidity: {
                name: 'Humedad',
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
                        created_at: '2023-01-03 21:40:00',
                        dayStatus: 'soleado',
                        icon: temperatureIcon('soleado'),
                        image: temperatureImage('soleado'),
                    },
                    {
                        name: 'Humidity',
                        slug: 'humidity',
                        value: 72,
                        created_at: '2023-01-03 21:30:00',
                        dayStatus: 'soleado',
                        icon: temperatureIcon('soleado'),
                        image: temperatureImage('soleado'),
                    },
                    {
                        name: 'Humidity',
                        slug: 'humidity',
                        value: 76,
                        created_at: '2023-01-03 21:20:00',
                        dayStatus: 'soleado',
                        icon: temperatureIcon('soleado'),
                        image: temperatureImage('soleado'),
                    },
                    {
                        name: 'Humidity',
                        slug: 'humidity',
                        value: 65,
                        created_at: '2023-01-03 21:10:00',
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
                        created_at: '2023-01-03 21:30:00',
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
                        created_at: '2023-01-03 21:20:00',
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
                        created_at: '2023-01-03 21:10:00',
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
                        created_at: '2023-01-03 21:00:00',
                        dayStatus: 'soleado',
                        icon: windIcon('soleado'),
                        image: windImage('soleado'),
                    },

                ],
            },
            light: {
                name: 'Light',
                slug: 'light',
                lumens: 10,
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
                        lumens: 18,
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
                        lumens: 30,
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
                        lumens: 40,
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
                        lumens: 80,
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
            lightning: {
                name: 'Relámpagos',
                slug: 'lightning',
                quantity: 17,
                distance: 3,
                energy: 451946,
                created_at: '2023-01-03 21:50:00',
                dayStatus: 'many',
                icon: lightningIcon('many'),
                image: lightningImage('many'),
                historical: [
                    {
                        name: 'Relámpagos',
                        slug: 'lightning',
                        quantity: 11,
                        distance: 3,
                        energy: 451946,
                        created_at: '2023-01-03 21:40:00',
                        dayStatus: 'many',
                        icon: lightningIcon('many'),
                        image: lightningImage('many'),
                    },
                    {
                        name: 'Relámpagos',
                        slug: 'lightning',
                        quantity: 2,
                        distance: 7,
                        energy: 311946,
                        created_at: '2023-01-03 21:30:00',
                        dayStatus: 'some',
                        icon: lightningIcon('some'),
                        image: lightningImage('some'),
                    },
                    {
                        name: 'Relámpagos',
                        slug: 'lightning',
                        quantity: 0,
                        distance: 0,
                        energy: 0,
                        created_at: '2023-01-03 21:20:00',
                        dayStatus: 'null',
                        icon: lightningIcon('null'),
                        image: lightningImage('null'),
                    },
                    {
                        name: 'Relámpagos',
                        slug: 'lightning',
                        quantity: 0,
                        distance: 0,
                        energy: 0,
                        created_at: '2023-01-03 21:10:00',
                        dayStatus: 'null',
                        icon: lightningIcon('null'),
                        image: lightningImage('null'),
                    },
                ]
            },
            rain: {
                name: 'Lluvia',
                slug: 'rain',
                rain: 200,
                rain_intensity: 0.2,
                rain_month: 200,
                created_at: '2023-01-03 21:50:00',
                dayStatus: 'many',
                icon: rainIcon('many'),
                image: rainImage('many'),
                historical: [
                    {
                        name: 'Lluvia',
                        slug: 'rain',
                        rain: 50,
                        rain_intensity: 0.2,
                        rain_month: 200,
                        created_at: '2023-01-03 21:40:00',
                        dayStatus: 'some',
                        icon: rainIcon('some'),
                        image: rainImage('some'),
                    },

                    {
                        name: 'Lluvia',
                        slug: 'rain',
                        rain: 70,
                        rain_intensity: 0.2,
                        rain_month: 200,
                        created_at: '2023-01-03 21:30:00',
                        dayStatus: 'some',
                        icon: rainIcon('some'),
                        image: rainImage('some'),
                    },

                    {
                        name: 'Lluvia',
                        slug: 'rain',
                        rain: 0,
                        rain_intensity: 0.2,
                        rain_month: 200,
                        created_at: '2023-01-03 21:20:00',
                        dayStatus: 'null',
                        icon: rainIcon('null'),
                        image: rainImage('null'),
                    },
                ],
            },
            airQuality: {
                name: 'Air Quality',
                slug: 'air_quality',
                eco2: 420,
                tvoc: 0,
                air_quality: 100,
                created_at: '2023-01-03 21:50:00',
                dayStatus: 'bad',
                icon: lightIcon('bad'),
                image: lightImage('bad'),
                historical: [
                    {
                        name: 'Air Quality',
                        slug: 'air_quality',
                        eco2: 415,
                        tvoc: 0,
                        air_quality: 100,
                        dayStatus: 'good',
                        icon: lightIcon('good'),
                        image: lightImage('good'),
                        created_at: '2023-01-03 21:40:00',
                    },
                    {
                        name: 'Air Quality',
                        slug: 'air_quality',
                        eco2: 412,
                        tvoc: 0,
                        air_quality: 100,
                        dayStatus: 'good',
                        icon: lightIcon('good'),
                        image: lightImage('good'),
                        created_at: '2023-01-03 21:30:00',
                    },
                    {
                        name: 'Air Quality',
                        slug: 'air_quality',
                        eco2: 417,
                        tvoc: 0,
                        air_quality: 100,
                        dayStatus: 'regular',
                        icon: lightIcon('regular'),
                        image: lightImage('regular'),
                        created_at: '2023-01-03 21:20:00',
                    },
                ]
            }
        }
    });

    return {
        datas
    }
}
