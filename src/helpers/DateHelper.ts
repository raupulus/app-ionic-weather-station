
/**
 * Recibe una fecha en formato UTC y la convierte a Date
 *
 * @param timestamp Fecha en formato UTC
 *
 * @returns Date
 */
export function stringUTCToDate(timestamp: string): Date {
    const timestampInMilliseconds = new Date(Date.parse(timestamp));
    return new Date(Date.UTC(timestampInMilliseconds.getFullYear(),
        timestampInMilliseconds.getMonth(),
        timestampInMilliseconds.getDate(),
        timestampInMilliseconds.getHours(),
        timestampInMilliseconds.getMinutes(),
        timestampInMilliseconds.getSeconds()));
}

/**
 * Convierte una fecha UTC a un string con el formato de solo la hora
 *
 * @param timestamp Fecha en formato UTC
 *
 * @returns
 */
export function stringUTCToHour(timestamp: string): string {
    const date = stringUTCToDate(timestamp);

    const hour = date.getHours();
    const minutes = date.getMinutes();

    return (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes);
}

/**
 * Convierte una fecha UTC a un string con el formato de solo la hora
 * minutos y segundos
 * @param timestamp Fecha en formato UTC
 * @returns
 * @example 12:00:00
 */
export function stringUTCToTime(timestamp: string): string {
    const date = stringUTCToDate(timestamp);

    return date.toLocaleTimeString();
}

/**
 * Devuelve la fecha en formato UTC en formato de fecha y hora en el idioma del navegador
 *
 *
 * @param timestamp Fecha en formato UTC
 * @returns
 */
export function stringUTCToLocaleDate(timestamp: string): string | number {
    const date = stringUTCToDate(timestamp);
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return date.toLocaleDateString() + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes);
}

/**
 * Devuelve el nombre del día de la semana
 *
 * @param timestamp Fecha en formato UTC
 * @returns
 */
export function stringUTCToWeekDay(timestamp: string): string {
    const date = stringUTCToDate(timestamp);
    const dayOfWeek = date.getDay(); // Obtenemos el día de la semana (0-6)
    const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    return weekdays[dayOfWeek];
}
