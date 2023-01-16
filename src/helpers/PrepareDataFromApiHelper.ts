import { TemperatureType } from '../types/TemperatureType';
import { temperatureIcon, windIcon, lightIcon, rainIcon, lightningIcon } from './IconHelper';
import { temperatureImage, windImage, lightImage, airQualityImage, rainImage, lightningImage } from './ImageHelper';
import { HumidityType } from '../types/HumidityType';
import { humidityIcon } from './IconHelper';
import { humidityImage } from './ImageHelper';
import { pressureIcon, airQualityIcon } from '@/helpers/IconHelper';
import { pressureImage } from '@/helpers/ImageHelper';
import { PressureType } from '../types/PressureType';
import { WindType } from '../types/WindType';
import { LightType } from '../types/LightType';
import { AirQualityType } from '../types/AirQualityType';
import { RainType } from '../types/RainType';
import { LightningType } from '../types/LightningType';

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

export function prepareWind(datas: WindType): WindType {
    const speed = datas.speed;

    // TODO: Traer de la API km/h, actualmente son m/s

    if (speed === 0) {
        datas.dayStatus = 'null';
    } else if (speed < 5) {
        datas.dayStatus = 'bajo';
    } else if (speed < 10) {
        datas.dayStatus = 'moderado';
    } else if (speed < 20) {
        datas.dayStatus = 'alto';
    } else if (speed >= 20) {
        datas.dayStatus = 'muy-alto';
    } else {
        datas.dayStatus = 'null';
    }

    datas.icon = windIcon(datas.dayStatus);
    datas.image = windImage(datas.dayStatus);

    if (datas.historical) {
        datas.historical.forEach((data) => {
            prepareWind(data);
        });
    }

    return datas;
}

export function prepareLight(datas: LightType): LightType {
    const lumens = datas.lumens;

    if (lumens === 0) {
        datas.dayStatus = 'null';
    } else if (lumens < 10000) {
        datas.dayStatus = 'bajo';
    } else if (lumens < 30000) {
        datas.dayStatus = 'moderado';
    } else if (lumens < 50000) {
        datas.dayStatus = 'alto';
    } else if (lumens >= 50000) {
        datas.dayStatus = 'muy-alto';
    } else {
        datas.dayStatus = 'null';
    }

    datas.icon = lightIcon(datas.dayStatus);
    datas.image = lightImage(datas.dayStatus);

    if (datas.historical) {
        datas.historical.forEach((data) => {
            prepareLight(data);
        });
    }

    return datas;
}

export function prepareAirQuality(datas: AirQualityType): AirQualityType {
    const quality = datas.air_quality;

    if (quality === 0) {
        datas.dayStatus = 'null';
    } else if (quality < 50) {
        datas.dayStatus = 'bad';
    } else if (quality < 80) {
        datas.dayStatus = 'regular';
    } else if (quality >= 80) {
        datas.dayStatus = 'good';
    } else {
        datas.dayStatus = 'null';
    }

    datas.icon = airQualityIcon(datas.dayStatus);
    datas.image = airQualityImage(datas.dayStatus);

    if (datas.historical) {
        datas.historical.forEach((data) => {
            prepareAirQuality(data);
        });
    }

    return datas;
}

export function prepareRain(datas: RainType): RainType {
    const rain = datas.rain; // mm

    if (rain === 0) {
        datas.dayStatus = 'claro';
    } else if (rain < 10) {
        datas.dayStatus = 'bajo';
    } else if (rain < 30) {
        datas.dayStatus = 'moderado';
    } else if (rain >= 30) {
        datas.dayStatus = 'fuerte';
    } else {
        datas.dayStatus = 'claro';
    }

    datas.icon = rainIcon(datas.dayStatus);
    datas.image = rainImage(datas.dayStatus);

    if (datas.historical) {
        datas.historical.forEach((data) => {
            prepareRain(data);
        });
    }

    return datas;
}


export function prepareLightning(datas: LightningType): LightningType {
    const lightning = datas.distance; // mm

    if (lightning === 0) {
        datas.dayStatus = 'ninguno';
    } else if (lightning < 3) {
        datas.dayStatus = 'pocos';
    } else if (lightning < 5) {
        datas.dayStatus = 'algunos';
    } else if (lightning >= 5) {
        datas.dayStatus = 'muchos';
    } else {
        datas.dayStatus = 'ninguno';
    }

    datas.icon = lightningIcon(datas.dayStatus);
    datas.image = lightningImage(datas.dayStatus);

    if (datas.historical) {
        datas.historical.forEach((data) => {
            prepareLightning(data);
        });
    }

    return datas;
}
