import { UnitType } from "@/types/UnitType";

export function units(): UnitType {
    const datas: UnitType = {
        lightning: {
            distance: 'km',
            energy: 'kA',
        },
        temperature: {
            value: 'ºC',
        },
        humidity: {
            value: '%',
        },
        pressure: {
            value: 'hPa',
        },
        wind: {
            speed: 'km/h',
            direction: 'º',
            min: 'km/h',
            max: 'km/h',
        },
        rain: {
            value: 'mm',
        },
        airQuality: {
            co2: 'ppm',
            tvoc: 'ppb',
            quality: '%',
        },

    };

    return datas
}
