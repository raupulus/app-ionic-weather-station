import { ResumeHistoricalType } from "./ResumeHistoricalType";

export type LightType = {
    name: string,
    slug: string,
    value: number,
    index: number,
    uva: number,
    uvb: number,
    created_at: string,
    historical?: ResumeHistoricalType[];
}
