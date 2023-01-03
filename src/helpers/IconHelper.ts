export function temperatureIcon(status: string): string {

    let icon = 'wi wi-day-sunny';

    const availableIcons: { [key: string]: string } = {
        'clear-day': 'wi wi-day-sunny',
        'clear-night': 'wi wi-night-clear',
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
