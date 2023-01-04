import { GenericCommonDataType } from './GenericCommonDataType';

export type HumidityType = GenericCommonDataType & {
    value: number,
    historical?: HumidityType[];
}
