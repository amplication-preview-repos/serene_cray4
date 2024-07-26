import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProvinceWhereUniqueInput } from "../province/ProvinceWhereUniqueInput";
import { SurveyListRelationFilter } from "../survey/SurveyListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  province?: ProvinceWhereUniqueInput;
  surveys?: SurveyListRelationFilter;
};
