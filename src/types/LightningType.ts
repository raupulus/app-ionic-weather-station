import { GenericCommonDataType } from './GenericCommonDataType';

export type LightningType = GenericCommonDataType & {
    distance: number,
    energy: number,
    quantity?: number,
    historical?: LightningType[];
}
