import { lightningIcon } from '@/helpers/IconHelper';
import { lightningImage } from '@/helpers/ImageHelper';
import { ref } from 'vue'
import { LightningType } from '@/types/LightningType';

export function lightningData() {
    const datas = ref<LightningType | null>(null)

    setTimeout(() => {
        datas.value = {
            name: 'Relámpagos',
            slug: 'lightning',
            distance: 3,
            energy: 451946,
            quantity: 17,
            created_at: '2023-01-03 21:50:00',
            dayStatus: 'many',
            icon: lightningIcon('many'),
            image: lightningImage('many'),
            historical: [
                {
                    name: 'Relámpagos',
                    slug: 'lightning',
                    distance: 3,
                    energy: 451946,
                    quantity: 11,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'many',
                    icon: lightningIcon('many'),
                    image: lightningImage('many'),
                },
                {
                    name: 'Relámpagos',
                    slug: 'lightning',
                    distance: 7,
                    energy: 311946,
                    quantity: 2,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'some',
                    icon: lightningIcon('some'),
                    image: lightningImage('some'),
                },
                {
                    name: 'Relámpagos',
                    slug: 'lightning',
                    distance: 0,
                    energy: 0,
                    quantity: 0,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'null',
                    icon: lightningIcon('null'),
                    image: lightningImage('null'),
                },
                {
                    name: 'Relámpagos',
                    slug: 'lightning',
                    distance: 0,
                    energy: 0,
                    quantity: 0,
                    created_at: '2023-01-03 21:50:00',
                    dayStatus: 'null',
                    icon: lightningIcon('null'),
                    image: lightningImage('null'),
                },
            ]
        }
    }, 1000);

    setInterval(() => {
        if (datas.value && datas.value.quantity < 30) {
            datas.value.quantity++;
            datas.value.energy += 738;
            datas.value.distance++

            if (datas.value.distance > 8) {
                datas.value.distance = 2;
            }
        }
    }, 3000);


    return datas
}
