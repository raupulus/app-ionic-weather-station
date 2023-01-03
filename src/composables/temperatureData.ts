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
            //historical?: ResumeHistoricalType[];
        }
    }
    */

    datas.value = {
        name: 'Temperatura',
        slug: 'temperature',
        value: 18,
        created_at: '2023-01-02 21:40:00',
        //historical?: ResumeHistoricalType[];
    }

    return datas
}
