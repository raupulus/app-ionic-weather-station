import { ref } from 'vue'
import { TemperatureType } from '../types/TemperatureType';

export function temperatureData() {
    const datas = ref<TemperatureType | null>(null)

    /*
    async () => {
        datas.value = {
            name: 'Temperatura',
            slug: 'temperature',
            value: 18,
            created_at: '2023-01-02 21:40:00',
            historical: [{ value: 18, timestamp: '2023-01-02 21:40:00' }, { value: 19, timestamp: '2023-01-02 21:50:00' }],
        }
    }
    */

    datas.value = {
        name: 'Temperatura',
        slug: 'temperature',
        value: 18,
        created_at: '2023-01-02 21:40:00',
        historical: [{ value: 18, timestamp: '2023-01-02 21:40:00' }, { value: 19, timestamp: '2023-01-02 21:50:00' }],
    }

    return datas
}
