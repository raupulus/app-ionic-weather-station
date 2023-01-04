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


/**
 * Obtiene las unidades de medidas de las columnas
 *
 * @param slug Slug de la columna
 * @param column Nombre de la columna
 */
export function getUnity(slug: string, column: string) {
    const datas = units();

    return datas[slug] && datas[slug][column] ? datas[slug][column] : '';
}

/**
 * Devuelve todas las columnas que se pueden mostrar/iterar para cada tipo de dato meteorológico.
 *
 * @param data
 */
export function getColumns(data: any): Array<string> {
    return Object.keys(data).filter((item: any) => {
        const diffColumns = ['name', 'slug', 'created_at', 'historical', 'icon', 'image', 'dayStatus'];

        return diffColumns.indexOf(item) === -1;
    })
}
