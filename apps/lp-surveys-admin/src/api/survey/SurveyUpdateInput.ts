import { AlcoholConsumptionSurveyUpdateManyWithoutSurveysInput } from "./AlcoholConsumptionSurveyUpdateManyWithoutSurveysInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OutletSurveyUpdateManyWithoutSurveysInput } from "./OutletSurveyUpdateManyWithoutSurveysInput";
import { PoliceStationWhereUniqueInput } from "../policeStation/PoliceStationWhereUniqueInput";

export type SurveyUpdateInput = {
  completedAt?: Date | null;
  typeField?: string | null;
  alcoholConsumptionSurveys?: AlcoholConsumptionSurveyUpdateManyWithoutSurveysInput;
  user?: UserWhereUniqueInput | null;
  outletSurveys?: OutletSurveyUpdateManyWithoutSurveysInput;
  policeStation?: PoliceStationWhereUniqueInput | null;
};
