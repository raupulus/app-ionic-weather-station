import { rainIcon } from '@/helpers/IconHelper';
import { rainImage } from '@/helpers/ImageHelper';
import { ref } from 'vue'
import { RainType } from '@/types/RainType';

export function rainData() {
    const datas = ref<RainType | null>(null)

    setTimeout(() => {
        datas.value = {
            name: 'Lluvia',
            slug: 'rain',
            value: 200,
            created_at: '2023-01-03 21:50:00',
            dayStatus: 'many',
            icon: rainIcon('many'),
            image: rainImage('many'),
            historical: [
                {
                    name: 'Lluvia',
                    slug: 'rain',
                    value: 50,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'some',
                    icon: rainIcon('some'),
                    image: rainImage('some'),
                },

                {
                    name: 'Lluvia',
                    slug: 'rain',
                    value: 70,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'some',
                    icon: rainIcon('some'),
                    image: rainImage('some'),
                },

                {
                    name: 'Lluvia',
                    slug: 'rain',
                    value: 0,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'null',
                    icon: rainIcon('null'),
                    image: rainImage('null'),
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
