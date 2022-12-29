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
            created_at: '29/12/2022, 13:47:31',
        },
        temperature: {
            name: 'Temperature',
            slug: 'temperature',
            value: 23.5,
            created_at: '29/12/2022, 13:47:31',
        },
        humidity: {
            name: 'Humidity',
            slug: 'humidity',
            value: 45,
            created_at: '29/12/2022, 13:47:31',
        },
        pressure: {
            name: 'Pressure',
            slug: 'pressure',
            value: 1013,
            created_at: '29/12/2022, 13:47:31',
        },
        wind: {
            name: 'Wind',
            slug: 'wind',
            speed: 3,
            min: 1,
            max: 5,
            direction: 'SE',
            created_at: '29/12/2022, 13:47:31',
        },
        light: {
            name: 'Light',
            slug: 'light',
            value: 100,
            index: 1,
            uva: 3,
            uvb: 2,
            created_at: '29/12/2022, 13:47:31',
        },
        airQuality: {
            name: 'Air Quality',
            slug: 'air-quality',
            co2: 450,
            tvoc: 0,
            quality: 100,
            created_at: '29/12/2022, 13:47:31',
        }
    }

    return {
        datas
    }
}
