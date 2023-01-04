import { pressureIcon } from '@/helpers/IconHelper';
import { pressureImage } from '@/helpers/ImageHelper';
import { ref } from 'vue'
import { PressureType } from '@/types/PressureType';

export function pressureData() {
    const datas = ref<PressureType | null>(null)

    setTimeout(() => {
        datas.value = {
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
        }
    }, 1000);

    setInterval(() => {
        if (datas.value && datas.value.value < 1035) {
            datas.value.value++;
        }
    }, 3000);


    return datas
}
