import { airQualityIcon } from '@/helpers/IconHelper';
import { airQualityImage } from '@/helpers/ImageHelper';
import { ref } from 'vue'
import { AirQualityType } from '@/types/AirQualityType';

export function airQualityData() {
    const datas = ref<AirQualityType | null>(null)

    setTimeout(() => {
        datas.value = {
            name: 'Air Quality',
            slug: 'air_quality',
            co2: 420,
            tvoc: 0,
            quality: 35,
            created_at: '2023-01-03 21:50:00',
            dayStatus: 'bad',
            icon: airQualityIcon('bad'),
            image: airQualityImage('bad'),
            historical: [
                {
                    name: 'Air Quality',
                    slug: 'air_quality',
                    co2: 415,
                    tvoc: 0,
                    quality: 42,
                    dayStatus: 'good',
                    icon: airQualityIcon('good'),
                    image: airQualityImage('good'),
                    created_at: '2023-01-03 21:50:00',
                },
                {
                    name: 'Air Quality',
                    slug: 'air_quality',
                    co2: 412,
                    tvoc: 0,
                    quality: 55,
                    dayStatus: 'good',
                    icon: airQualityIcon('good'),
                    image: airQualityImage('good'),
                    created_at: '2023-01-03 21:50:00',
                },
                {
                    name: 'Air Quality',
                    slug: 'air_quality',
                    co2: 417,
                    tvoc: 0,
                    quality: 67,
                    dayStatus: 'regular',
                    icon: airQualityIcon('regular'),
                    image: airQualityImage('regular'),
                    created_at: '2023-01-03 21:50:00',
                },
            ]
        }
    }, 1000);

    setInterval(() => {
        if (datas.value && datas.value.co2 < 437) {
            datas.value.co2++;
            datas.value.tvoc++;
            datas.value.quality++;
        }
    }, 3000);


    return datas
}
