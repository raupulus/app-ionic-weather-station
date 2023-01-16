export function temperatureImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'agradable': require('@/assets/images/backgrounds/temperature/agradable.webp'),
        'calor-extremo': require('@/assets/images/backgrounds/temperature/calor-extremo.webp'),
        'calor': require('@/assets/images/backgrounds/temperature/calor.webp'),
        'frio': require('@/assets/images/backgrounds/temperature/frio.webp'),
        'mucho-calor': require('@/assets/images/backgrounds/temperature/mucho-calor.webp'),
        'mucho-frio': require('@/assets/images/backgrounds/temperature/mucho-frio.webp'),
        'nieve': require('@/assets/images/backgrounds/temperature/nieve.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/temperature/agradable.webp');
    }
}

export function humidityImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'baja': require('@/assets/images/backgrounds/humidity/baja.webp'),
        'normal': require('@/assets/images/backgrounds/humidity/normal.webp'),
        'media': require('@/assets/images/backgrounds/humidity/media.webp'),
        'alta': require('@/assets/images/backgrounds/humidity/alta.webp'),
        'muy-alta': require('@/assets/images/backgrounds/humidity/muy-alta.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/humidity/normal.webp');
    }
}

export function pressureImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'normal': require('@/assets/images/backgrounds/pressure/normal.webp'),
        'baja': require('@/assets/images/backgrounds/pressure/baja.webp'),
        'alta': require('@/assets/images/backgrounds/pressure/alta.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/pressure/normal.webp');
    }
}

export function windImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'null': require('@/assets/images/backgrounds/wind/null.webp'),
        'bajo': require('@/assets/images/backgrounds/wind/bajo.webp'),
        'moderado': require('@/assets/images/backgrounds/wind/moderado.webp'),
        'alto': require('@/assets/images/backgrounds/wind/alto.webp'),
        'muy-alto': require('@/assets/images/backgrounds/wind/muy-alto.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/wind/null.webp');
    }
}


export function lightImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'null': require('@/assets/images/backgrounds/light/null.webp'),
        'bajo': require('@/assets/images/backgrounds/light/bajo.webp'),
        'moderado': require('@/assets/images/backgrounds/light/moderado.webp'),
        'alto': require('@/assets/images/backgrounds/light/alto.webp'),
        'muy-alto': require('@/assets/images/backgrounds/light/muy-alto.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/light/null.webp');
    }
}

export function airQualityImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'null': require('@/assets/images/backgrounds/airquality/null.webp'),
        'good': require('@/assets/images/backgrounds/airquality/good.webp'),
        'regular': require('@/assets/images/backgrounds/airquality/regular.webp'),
        'bad': require('@/assets/images/backgrounds/airquality/bad.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/airquality/null.webp');
    }
}

export function rainImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'soleado': require('@/assets/images/backgrounds/rain/soleado.webp'),
        'noche': require('@/assets/images/backgrounds/rain/noche.webp'),
        'anocheciendo': require('@/assets/images/backgrounds/rain/anocheciendo.webp'),
        'atardecer': require('@/assets/images/backgrounds/rain/atardecer.webp'),
        'nublado': require('@/assets/images/backgrounds/rain/nublado.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/rain/soleado.webp');
    }
}

export function lightningImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'null': require('@/assets/images/backgrounds/lightning/null.webp'),
        'some': require('@/assets/images/backgrounds/lightning/some.webp'),
        'many': require('@/assets/images/backgrounds/lightning/many.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/lightning/null.webp');
    }
}
