import { ResumeHistoricalType } from "./ResumeHistoricalType";

export type HumidityType = {
    name: string,
    slug: string,
    value: number,
    created_at: string,
    historical?: ResumeHistoricalType[];
}
