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
        air_quality: {
            co2: 'ppm',
            tvoc: 'ppb',
            quality: '%',
        },
        light: {
            value: 'l',
            index: '%',
            uva: 'W/m²',
            uvb: 'W/m²',
        },

    };

    return datas
}
