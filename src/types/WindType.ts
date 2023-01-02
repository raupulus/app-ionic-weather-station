import { ResumeHistoricalType } from "./ResumeHistoricalType";

export type WindType = {
    name: string,
    slug: string,
    speed: number,
    min: number,
    max: number,
    direction: string,
    created_at: string,
    historical?: ResumeHistoricalType[];
}
