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
