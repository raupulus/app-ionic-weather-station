import { GenericCommonDataType } from './GenericCommonDataType';

export type RainType = GenericCommonDataType & {
    value: number,
    historical?: RainType[];
}
