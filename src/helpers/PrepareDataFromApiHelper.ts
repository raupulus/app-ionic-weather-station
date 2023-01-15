import { TemperatureType } from '../types/TemperatureType';
import { temperatureIcon } from './IconHelper';
import { temperatureImage } from './ImageHelper';
import { HumidityType } from '../types/HumidityType';
import { humidityIcon } from './IconHelper';
import { humidityImage } from './ImageHelper';
import { pressureIcon } from '@/helpers/IconHelper';
import { pressureImage } from '@/helpers/ImageHelper';
import { PressureType } from '../types/PressureType';

export function prepareTemperature(datas: TemperatureType): TemperatureType {

    //  -0 nieve, 0-10 mucho frio, 10-18 frio, 18-23 agradable, 23-28 calor, 28-33 mucho calor, >33 extremo calor
    const temp = datas.value;

    if (temp >= 10 && temp <= 18) {
        datas.dayStatus = 'frio';
    } else if (temp > 18 && temp <= 23) {
        datas.dayStatus = 'agradable';
    } else if (temp > 23 && temp <= 28) {
        datas.dayStatus = 'calor';
    } else if (temp > 28 && temp <= 33) {
        datas.dayStatus = 'mucho-calor';
    } else if (temp > 33) {
        datas.dayStatus = 'calor-extremo';
    } else if (temp > 0 && temp < 10) {
        datas.dayStatus = 'mucho-frio';
    } else if (temp <= 0) {
        datas.dayStatus = 'nieve';
    } else {
        datas.dayStatus = 'agradable';
    }

    datas.icon = temperatureIcon(datas.dayStatus);
    datas.image = temperatureImage(datas.dayStatus);

    if (datas.historical) {
        datas.historical.forEach((data) => {
            prepareTemperature(data);
        });
    }

    return datas;
}

export function prepareHumidity(datas: HumidityType): HumidityType {
    const humity = datas.value;

    if (humity < 40) {
        datas.dayStatus = 'baja';
    } else if (humity >= 40 && humity <= 60) {
        datas.dayStatus = 'normal';
    } else if (humity > 60 && humity <= 70) {
        datas.dayStatus = 'media';
    } else if (humity > 70 && humity <= 80) {
        datas.dayStatus = 'alta';
    } else if (humity > 80) {
        datas.dayStatus = 'muy-alta';
    } else {
        datas.dayStatus = 'normal';
    }

    datas.icon = humidityIcon(datas.dayStatus);
    datas.image = humidityImage(datas.dayStatus);

    if (datas.historical) {
        datas.historical.forEach((data) => {
            prepareHumidity(data);
        });
    }


    return datas;
}


export function preparePressure(datas: PressureType): PressureType {
    const pressure = datas.value;

    if (pressure >= 1011 && pressure <= 1015) {
        datas.dayStatus = 'normal';
    } else if (pressure > 1015) {
        datas.dayStatus = 'alta';
    } else if (pressure < 1011) {
        datas.dayStatus = 'baja';
    } else {
        datas.dayStatus = 'normal';
    }

    datas.icon = pressureIcon(datas.dayStatus);
    datas.image = pressureImage(datas.dayStatus);

    if (datas.historical) {
        datas.historical.forEach((data) => {
            preparePressure(data);
        });
    }


    return datas;
}
