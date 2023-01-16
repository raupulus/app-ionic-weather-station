import { GenericCommonDataType } from './GenericCommonDataType';

export type LightType = GenericCommonDataType & {
    lumens: number,
    index: number,
    uva: number,
    uvb: number,
    historical?: LightType[];
}
