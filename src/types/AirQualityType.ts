import { GenericCommonDataType } from './GenericCommonDataType';

export type AirQualityType = GenericCommonDataType & {
    co2: number,
    tvoc: number,
    quality: number, // 0-100
    historical?: AirQualityType[];
}
