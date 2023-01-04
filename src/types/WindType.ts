import { GenericCommonDataType } from './GenericCommonDataType';

export type WindType = GenericCommonDataType & {
    speed: number,
    min: number,
    max: number,
    direction: string,
    historical?: WindType[];
}
