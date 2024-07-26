import { SurveyWhereUniqueInput } from "../survey/SurveyWhereUniqueInput";
import { OutletWhereUniqueInput } from "../outlet/OutletWhereUniqueInput";
import { PoliceStationWhereUniqueInput } from "../policeStation/PoliceStationWhereUniqueInput";

export type OutletSurveyCreateInput = {
  q1?: string | null;
  q2?: string | null;
  q3?: string | null;
  q4?: string | null;
  q5?: string | null;
  q6?: string | null;
  q7?: string | null;
  q8?: string | null;
  q9?: string | null;
  q10?: string | null;
  q11?: string | null;
  q12?: string | null;
  survey?: SurveyWhereUniqueInput | null;
  outlet?: OutletWhereUniqueInput | null;
  yesCount?: number | null;
  noCount?: number | null;
  policeStation?: PoliceStationWhereUniqueInput | null;
};
