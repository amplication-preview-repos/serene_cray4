import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AlcoholConsumptionSurveyListRelationFilter } from "../alcoholConsumptionSurvey/AlcoholConsumptionSurveyListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OutletSurveyListRelationFilter } from "../outletSurvey/OutletSurveyListRelationFilter";
import { PoliceStationWhereUniqueInput } from "../policeStation/PoliceStationWhereUniqueInput";

export type SurveyWhereInput = {
  id?: StringFilter;
  completedAt?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
  alcoholConsumptionSurveys?: AlcoholConsumptionSurveyListRelationFilter;
  user?: UserWhereUniqueInput;
  outletSurveys?: OutletSurveyListRelationFilter;
  policeStation?: PoliceStationWhereUniqueInput;
};
