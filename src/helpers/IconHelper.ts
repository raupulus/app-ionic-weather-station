export function temperatureIcon(status: string): string {

    let icon = 'wi wi-day-sunny';

    const availableIcons: { [key: string]: string } = {
        'agradable': 'wi wi-day-sunny',
        'calor-extremo': 'wi wi-fire',
        'calor': 'wi wi-thermometer',
        'frio': 'wi wi-thermometer-exterior',
        'mucho-calor': 'wi wi-volcano',
        'mucho-frio': 'wi wi-thermometer-internal',
        'nieve': 'wi wi-snowflake-cold',
    };

    if (availableIcons[status]) {
        icon = availableIcons[status];
    }

    return icon;
}

export function humidityIcon(status: string): string {

    let icon = 'wi wi-humidity';

    const availableIcons: { [key: string]: string } = {
        'baja': 'wi wi-windy',
        'normal': 'wi wi-cloud-refresh',
        'media': 'wi wi-humidity',
        'alta': 'wi wi-night-sleet',
        'muy-alta': 'wi wi-night-showers',
    };

    if (availableIcons[status]) {
        icon = availableIcons[status];
    }

    return icon;
}

export function pressureIcon(status: string): string {

    let icon = 'wi wi-barometer';

    const availableIcons: { [key: string]: string } = {
        'normal': 'wi wi-barometer',
        'alta': 'wi wi-hurricane',
        'baja': 'wi wi-earthquake',
    };

    if (availableIcons[status]) {
        icon = availableIcons[status];
    }

    return icon;
}

export function windIcon(status: string): string {

    let icon = 'wi wi-day-sunny';

    const availableIcons: { [key: string]: string } = {
        'null': 'wi wi-wind-beaufort-0',
        'bajo': 'wi wi-wind-beaufort-1',
        'moderado': 'wi wi-wind-beaufort-2',
        'alto': 'wi wi-wind-beaufort-3',
        'muy-alto': 'wi wi-wind-beaufort-4',
    };

    if (availableIcons[status]) {
        icon = availableIcons[status];
    }

    return icon;
}

export function lightIcon(status: string): string {

    let icon = 'wi wi-night-clear';

    const availableIcons: { [key: string]: string } = {
        'null': 'wi wi-night-clear',
        'bajo': 'wi wi-day-cloudy',
        'moderado': 'wi wi-solar-eclipse',
        'alto': 'wi wi-day-sunny-overcast',
        'muy-alto': 'wi wi-day-sunny',
    };

    if (availableIcons[status]) {
        icon = availableIcons[status];
    }

    return icon;
}

export function airQualityIcon(status: string): string {

    let icon = 'wi wi-windy';

    const availableIcons: { [key: string]: string } = {
        'null': 'wi wi-windy',
        'good': 'wi wi-refresh',
        'regular': 'wi wi-smoke',
        'bad': 'wi wi-volcano',
    };

    if (availableIcons[status]) {
        icon = availableIcons[status];
    }

    return icon;
}


export function rainIcon(status: string): string {

    let icon = 'wi wi-sunrise';

    const availableIcons: { [key: string]: string } = {
        'good': 'wi wi-sunrise',
        'regular': 'wi wi-sleet',
        'bad': 'wi wi-hail',
    };

    if (availableIcons[status]) {
        icon = availableIcons[status];
    }

    return icon;
}

export function lightningIcon(status: string): string {

    let icon = 'wi wi-sunrise';

    const availableIcons: { [key: string]: string } = {
        'null': 'wi wi-sunrise',
        'some': 'wi wi-storm-showers',
        'many': 'wi wi-lightning',
    };

    if (availableIcons[status]) {
        icon = availableIcons[status];
    }

    return icon;
}
