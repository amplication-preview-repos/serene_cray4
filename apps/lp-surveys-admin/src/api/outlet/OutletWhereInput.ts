import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProvinceWhereUniqueInput } from "../province/ProvinceWhereUniqueInput";
import { OutletSurveyListRelationFilter } from "../outletSurvey/OutletSurveyListRelationFilter";

export type OutletWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  province?: ProvinceWhereUniqueInput;
  outletSurveys?: OutletSurveyListRelationFilter;
};
