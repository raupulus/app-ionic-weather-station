import { GenericCommonDataType } from './GenericCommonDataType';

export type RainType = GenericCommonDataType & {
    rain: number,
    rain_intensity: number,
    rain_month: number,
    historical?: RainType[];
}
