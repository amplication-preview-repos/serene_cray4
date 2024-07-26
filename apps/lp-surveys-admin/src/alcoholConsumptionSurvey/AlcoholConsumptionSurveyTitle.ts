import { AlcoholConsumptionSurvey as TAlcoholConsumptionSurvey } from "../api/alcoholConsumptionSurvey/AlcoholConsumptionSurvey";

export const ALCOHOLCONSUMPTIONSURVEY_TITLE_FIELD = "q1";

export const AlcoholConsumptionSurveyTitle = (
  record: TAlcoholConsumptionSurvey
): string => {
  return record.q1?.toString() || String(record.id);
};
