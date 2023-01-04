import { windIcon } from '@/helpers/IconHelper';
import { windImage } from '@/helpers/ImageHelper';
import { ref } from 'vue'
import { WindType } from '@/types/WindType';

export function windData() {
    const datas = ref<WindType | null>(null)

    setTimeout(() => {
        datas.value = {
            name: 'Wind',
            slug: 'wind',
            speed: 3,
            min: 1,
            max: 5,
            direction: 'E',
            created_at: '2023-01-03 21:50:00',
            dayStatus: 'anocheciendo',
            icon: windIcon('anocheciendo'),
            image: windImage('anocheciendo'),
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
        }
    }, 1000);

    setInterval(() => {
        if (datas.value && datas.value.speed < 30) {
            datas.value.speed++;
        }
    }, 3000);


    return datas
}
