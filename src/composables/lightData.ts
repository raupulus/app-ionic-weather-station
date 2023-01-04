import { lightIcon } from '@/helpers/IconHelper';
import { lightImage } from '@/helpers/ImageHelper';
import { ref } from 'vue'
import { LightType } from '@/types/LightType';

export function lightData() {
    const datas = ref<LightType | null>(null)

    setTimeout(() => {
        datas.value = {
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
        }
    }, 1000);

    setInterval(() => {
        if (datas.value && datas.value.value < 100) {
            datas.value.value++;
            datas.value.index++;
            datas.value.uva++;
            datas.value.uvb++;
        }
    }, 3000);


    return datas
}
