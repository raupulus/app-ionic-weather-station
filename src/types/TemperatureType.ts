import { GenericCommonDataType } from './GenericCommonDataType';

export type TemperatureType = GenericCommonDataType & {
    value: number,
    historical?: TemperatureType[];
};
