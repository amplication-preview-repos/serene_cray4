import { OutletSurveyWhereInput } from "./OutletSurveyWhereInput";
import { OutletSurveyOrderByInput } from "./OutletSurveyOrderByInput";

export type OutletSurveyFindManyArgs = {
  where?: OutletSurveyWhereInput;
  orderBy?: Array<OutletSurveyOrderByInput>;
  skip?: number;
  take?: number;
};
