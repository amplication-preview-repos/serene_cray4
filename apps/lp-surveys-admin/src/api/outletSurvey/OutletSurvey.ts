import { Survey } from "../survey/Survey";
import { Outlet } from "../outlet/Outlet";
import { PoliceStation } from "../policeStation/PoliceStation";

export type OutletSurvey = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  q1: string | null;
  q2: string | null;
  q3: string | null;
  q4: string | null;
  q5: string | null;
  q6: string | null;
  q7: string | null;
  q8: string | null;
  q9: string | null;
  q10: string | null;
  q11: string | null;
  q12: string | null;
  survey?: Survey | null;
  outlet?: Outlet | null;
  yesCount: number | null;
  noCount: number | null;
  policeStation?: PoliceStation | null;
};
