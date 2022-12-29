import { AirQuality } from "./AirQuality";
import { HumidityType } from "./HumidityType";
import { LightningType } from "./LightningType";
import { LightType } from "./LightType";
import { PressureType } from "./PressureType";
import { TemperatureType } from "./TemperatureType";
import { WindType } from "./WindType";

export type ResumeDataType {
    lighting?: LightningType,
    temperature?: TemperatureType,
    humidity?: HumidityType,
    pressure?: PressureType,
    wind?: WindType,
    light?: LightType,
    airQuality?: AirQuality,
}
