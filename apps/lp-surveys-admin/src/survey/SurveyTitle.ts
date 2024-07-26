import { Survey as TSurvey } from "../api/survey/Survey";

export const SURVEY_TITLE_FIELD = "typeField";

export const SurveyTitle = (record: TSurvey): string => {
  return record.typeField?.toString() || String(record.id);
};
