export function temperatureImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'soleado': require('@/assets/images/backgrounds/temperature/soleado.webp'),
        'noche': require('@/assets/images/backgrounds/temperature/noche.webp'),
        'anocheciendo': require('@/assets/images/backgrounds/temperature/anocheciendo.webp'),
        'atardecer': require('@/assets/images/backgrounds/temperature/atardecer.webp'),
        'nublado': require('@/assets/images/backgrounds/temperature/nublado.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/temperature/soleado.webp');
    }
}

export function humidityImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'soleado': require('@/assets/images/backgrounds/humidity/soleado.webp'),
        'noche': require('@/assets/images/backgrounds/humidity/noche.webp'),
        'anocheciendo': require('@/assets/images/backgrounds/humidity/anocheciendo.webp'),
        'atardecer': require('@/assets/images/backgrounds/humidity/atardecer.webp'),
        'nublado': require('@/assets/images/backgrounds/humidity/nublado.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/humidity/soleado.webp');
    }
}

export function pressureImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'soleado': require('@/assets/images/backgrounds/pressure/soleado.webp'),
        'noche': require('@/assets/images/backgrounds/pressure/noche.webp'),
        'anocheciendo': require('@/assets/images/backgrounds/pressure/anocheciendo.webp'),
        'atardecer': require('@/assets/images/backgrounds/pressure/atardecer.webp'),
        'nublado': require('@/assets/images/backgrounds/pressure/nublado.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/pressure/soleado.webp');
    }
}

export function windImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'soleado': require('@/assets/images/backgrounds/wind/soleado.webp'),
        'noche': require('@/assets/images/backgrounds/wind/noche.webp'),
        'anocheciendo': require('@/assets/images/backgrounds/wind/anocheciendo.webp'),
        'atardecer': require('@/assets/images/backgrounds/wind/atardecer.webp'),
        'nublado': require('@/assets/images/backgrounds/wind/nublado.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/wind/soleado.webp');
    }
}


export function lightImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'soleado': require('@/assets/images/backgrounds/light/soleado.webp'),
        'noche': require('@/assets/images/backgrounds/light/noche.webp'),
        'anocheciendo': require('@/assets/images/backgrounds/light/anocheciendo.webp'),
        'atardecer': require('@/assets/images/backgrounds/light/atardecer.webp'),
        'nublado': require('@/assets/images/backgrounds/light/nublado.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/light/soleado.webp');
    }
}

export function airQualityImage(status: string): string {
    const availableImages: { [key: string]: string } = {
        'good': require('@/assets/images/backgrounds/airquality/good.webp'),
        'regular': require('@/assets/images/backgrounds/airquality/regular.webp'),
        '': require('@/assets/images/backgrounds/airquality/bad.webp'),
    };

    if (availableImages[status]) {
        return availableImages[status];
    } else {
        return require('@/assets/images/backgrounds/airquality/good.webp');
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
