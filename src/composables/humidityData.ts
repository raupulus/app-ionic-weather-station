import { humidityIcon } from '@/helpers/IconHelper';
import { humidityImage } from '@/helpers/ImageHelper';
import { ref } from 'vue'
import { HumidityType } from '@/types/HumidityType';

export function humidityData() {
    const datas = ref<HumidityType | null>(null)

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

    setInterval(() => {
        if (datas.value && datas.value.value < 100) {
            datas.value.value++;
        }
    }, 3000);


    return datas
}
