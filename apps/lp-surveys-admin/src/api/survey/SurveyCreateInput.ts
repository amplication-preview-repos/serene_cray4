import { AlcoholConsumptionSurveyCreateNestedManyWithoutSurveysInput } from "./AlcoholConsumptionSurveyCreateNestedManyWithoutSurveysInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OutletSurveyCreateNestedManyWithoutSurveysInput } from "./OutletSurveyCreateNestedManyWithoutSurveysInput";
import { PoliceStationWhereUniqueInput } from "../policeStation/PoliceStationWhereUniqueInput";

export type SurveyCreateInput = {
  completedAt?: Date | null;
  typeField?: string | null;
  alcoholConsumptionSurveys?: AlcoholConsumptionSurveyCreateNestedManyWithoutSurveysInput;
  user?: UserWhereUniqueInput | null;
  outletSurveys?: OutletSurveyCreateNestedManyWithoutSurveysInput;
  policeStation?: PoliceStationWhereUniqueInput | null;
};
