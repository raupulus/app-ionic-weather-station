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

    let icon = 'wi wi-day-sunny';

    const availableIcons: { [key: string]: string } = {
        'soleado': 'wi wi-day-sunny',
        'atardecer': 'wi wi-day-sunny-overcast',
        'nublado': 'wi wi-cloudy',
        'anocheciendo': 'wi wi-night-sleet',
        'noche': 'wi wi-night-clear',
        'rain': 'wi wi-rain',
        'snow': 'wi wi-snow',
        'sleet': 'wi wi-sleet',
        'wind': 'wi wi-windy',
        'fog': 'wi wi-fog',
        'cloudy': 'wi wi-cloudy',
        'partly-cloudy-day': 'wi wi-day-cloudy',
        'partly-cloudy-night': 'wi wi-night-cloudy',
    };

    if (availableIcons[status]) {
        icon = availableIcons[status];
    }

    return icon;
}

export function windIcon(status: string): string {

    let icon = 'wi wi-day-sunny';

    const availableIcons: { [key: string]: string } = {
        'soleado': 'wi wi-day-sunny',
        'atardecer': 'wi wi-day-sunny-overcast',
        'nublado': 'wi wi-cloudy',
        'anocheciendo': 'wi wi-night-sleet',
        'noche': 'wi wi-night-clear',
        'rain': 'wi wi-rain',
        'snow': 'wi wi-snow',
        'sleet': 'wi wi-sleet',
        'wind': 'wi wi-windy',
        'fog': 'wi wi-fog',
        'cloudy': 'wi wi-cloudy',
        'partly-cloudy-day': 'wi wi-day-cloudy',
        'partly-cloudy-night': 'wi wi-night-cloudy',
    };

    if (availableIcons[status]) {
        icon = availableIcons[status];
    }

    return icon;
}

export function lightIcon(status: string): string {

    let icon = 'wi wi-day-sunny';

    const availableIcons: { [key: string]: string } = {
        'soleado': 'wi wi-day-sunny',
        'atardecer': 'wi wi-day-sunny-overcast',
        'nublado': 'wi wi-cloudy',
        'anocheciendo': 'wi wi-night-sleet',
        'noche': 'wi wi-night-clear',
        'rain': 'wi wi-rain',
        'snow': 'wi wi-snow',
        'sleet': 'wi wi-sleet',
        'wind': 'wi wi-windy',
        'fog': 'wi wi-fog',
        'cloudy': 'wi wi-cloudy',
        'partly-cloudy-day': 'wi wi-day-cloudy',
        'partly-cloudy-night': 'wi wi-night-cloudy',
    };

    if (availableIcons[status]) {
        icon = availableIcons[status];
    }

    return icon;
}

export function airQualityIcon(status: string): string {

    let icon = 'wi wi-day-sunny';

    const availableIcons: { [key: string]: string } = {
        'good': 'wi wi-sunrise',
        'regular': 'wi wi-cloud-refresh',
        'bad': 'wi wi-train',
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
