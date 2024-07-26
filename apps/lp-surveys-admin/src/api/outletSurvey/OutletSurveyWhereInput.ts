import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";
import { OutletWhereUniqueInput } from "../outlet/OutletWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PoliceStationWhereUniqueInput } from "../policeStation/PoliceStationWhereUniqueInput";

export type OutletSurveyWhereInput = {
  id?: StringFilter;
  q1?: StringNullableFilter;
  q2?: StringNullableFilter;
  q3?: StringNullableFilter;
  q4?: StringNullableFilter;
  q5?: StringNullableFilter;
  q6?: StringNullableFilter;
  q7?: StringNullableFilter;
  q8?: StringNullableFilter;
  q9?: StringNullableFilter;
  q10?: StringNullableFilter;
  q11?: StringNullableFilter;
  q12?: StringNullableFilter;
  survey?: SurveyWhereUniqueInput;
  outlet?: OutletWhereUniqueInput;
  yesCount?: IntNullableFilter;
  noCount?: IntNullableFilter;
  policeStation?: PoliceStationWhereUniqueInput;
};
