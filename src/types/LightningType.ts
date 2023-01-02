import { ResumeHistoricalType } from './ResumeHistoricalType';

export type LightningType = {
    name: string,
    slug: string,
    distance: number,
    energy: number,
    created_at: string,
    historical?: ResumeHistoricalType[];
}
