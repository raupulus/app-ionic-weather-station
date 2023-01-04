import { GenericCommonDataType } from './GenericCommonDataType';

export type PressureType = GenericCommonDataType & {
    value: number,
    historical?: PressureType[];
}
