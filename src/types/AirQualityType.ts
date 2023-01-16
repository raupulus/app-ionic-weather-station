import { GenericCommonDataType } from './GenericCommonDataType';

export type AirQualityType = GenericCommonDataType & {
    air_quality: number, // 0-100
    tvoc: number,
    eco2: number,
    historical?: AirQualityType[];
}
