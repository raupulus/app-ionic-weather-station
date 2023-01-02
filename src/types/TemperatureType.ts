import { ResumeHistoricalType } from "./ResumeHistoricalType";

export type TemperatureType = {
    name: string,
    slug: string,
    value: number,
    created_at: string,
    historical?: ResumeHistoricalType[];
}
