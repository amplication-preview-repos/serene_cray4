import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProvinceWhereUniqueInput } from "../province/ProvinceWhereUniqueInput";
import { OutletSurveyListRelationFilter } from "../outletSurvey/OutletSurveyListRelationFilter";
import { SurveyListRelationFilter } from "../survey/SurveyListRelationFilter";

export type PoliceStationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  province?: ProvinceWhereUniqueInput;
  outletSurveys?: OutletSurveyListRelationFilter;
  surveys?: SurveyListRelationFilter;
};
