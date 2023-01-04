import { GenericCommonDataType } from './GenericCommonDataType';

export type LightType = GenericCommonDataType & {
    value: number,
    index: number,
    uva: number,
    uvb: number,
    historical?: LightType[];
}
