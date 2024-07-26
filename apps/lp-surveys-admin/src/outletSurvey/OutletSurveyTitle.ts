import { OutletSurvey as TOutletSurvey } from "../api/outletSurvey/OutletSurvey";

export const OUTLETSURVEY_TITLE_FIELD = "q1";

export const OutletSurveyTitle = (record: TOutletSurvey): string => {
  return record.q1?.toString() || String(record.id);
};
