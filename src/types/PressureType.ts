import { ResumeHistoricalType } from "./ResumeHistoricalType";

export type PressureType = {
    name: string,
    slug: string,
    value: number,
    created_at: string,
    historical?: ResumeHistoricalType[];
}
