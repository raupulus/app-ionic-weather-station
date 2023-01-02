import { ResumeDataType } from '@/types/ResumeDataType'
import { ref } from 'vue'

export function useResumeData() {
    const datas = ref<ResumeDataType | null>(null)

    // TODO: Fetch o conectar al servidor websocket

    datas.value = {
        lighting: {
            name: 'Lightning',
            slug: 'lightning',
            distance: 3,
            energy: 451946,
            created_at: '30/12/2022, 13:47:31',
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
        temperature: {
            name: 'Temperature',
            slug: 'temperature',
            value: 23.5,
            created_at: '29/12/2022, 13:47:31',
            historical: [
                {
                    value: 14,
                    timestamp: '2022-12-30 23:00:00.0000Z',
                },
                {
                    value: 16,
                    timestamp: '2022-12-30 22:00:00.0000Z',
                },
                {
                    value: 17,
                    timestamp: '2022-12-30 21:00:00.0000Z',
                },
            ]
        },
        humidity: {
            name: 'Humidity',
            slug: 'humidity',
            value: 91,
            created_at: '29/12/2022, 13:47:31',
            historical: [
                {
                    value: 84,
                    timestamp: '2022-12-30 23:00:00.0000Z',
                },
                {
                    value: 76,
                    timestamp: '2022-12-30 22:00:00.0000Z',
                },
                {
                    value: 74,
                    timestamp: '2022-12-30 21:00:00.0000Z',
                },
            ]
        },
        pressure: {
            name: 'Pressure',
            slug: 'pressure',
            value: 1013,
            created_at: '29/12/2022, 13:47:31',
            historical: [
                {
                    value: 1011,
                    timestamp: '2022-12-30 23:00:00.0000Z',
                },
                {
                    value: 1013,
                    timestamp: '2022-12-30 22:00:00.0000Z',
                },
                {
                    value: 1011,
                    timestamp: '2022-12-30 21:00:00.0000Z',
                },
            ]
        },
        wind: {
            name: 'Wind',
            slug: 'wind',
            speed: 3,
            min: 1,
            max: 5,
            direction: 'SE',
            created_at: '29/12/2022, 13:47:31',
            historical: [
                {
                    value: 1,
                    timestamp: '2022-12-30 23:00:00.0000Z',
                },
                {
                    value: 0.8,
                    timestamp: '2022-12-30 22:00:00.0000Z',
                },
                {
                    value: 1.1,
                    timestamp: '2022-12-30 21:00:00.0000Z',
                },
            ]
        },
        light: {
            name: 'Light',
            slug: 'light',
            value: 100,
            index: 1,
            uva: 3,
            uvb: 2,
            created_at: '29/12/2022, 13:47:31',
            historical: [
                {
                    value: 20,
                    timestamp: '2022-12-30 23:00:00.0000Z',
                },
                {
                    value: 40,
                    timestamp: '2022-12-30 22:00:00.0000Z',
                },
                {
                    value: 46,
                    timestamp: '2022-12-30 21:00:00.0000Z',
                },
            ]
        },
        airQuality: {
            name: 'Air Quality',
            slug: 'air-quality',
            co2: 420,
            tvoc: 0,
            quality: 100,
            created_at: '29/12/2022, 13:47:31',
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
