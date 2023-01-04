import { temperatureIcon } from '@/helpers/IconHelper';
import { temperatureImage } from '@/helpers/ImageHelper';
import { ref } from 'vue'
import { TemperatureType } from '../types/TemperatureType';

export function temperatureData() {
    const datas = ref<TemperatureType | null>(null)

    setTimeout(() => {
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
            //image: require('@/assets/images/backgrounds/temperature.webp')
        }
    }, 1000);

    setInterval(() => {
        if (datas.value && datas.value.value < 30) {
            datas.value.value++;
        }
    }, 3000);


    return datas
}
