import { AlcoholConsumptionSurvey } from "../alcoholConsumptionSurvey/AlcoholConsumptionSurvey";
import { User } from "../user/User";
import { OutletSurvey } from "../outletSurvey/OutletSurvey";
import { PoliceStation } from "../policeStation/PoliceStation";

export type Survey = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date | null;
  typeField: string | null;
  alcoholConsumptionSurveys?: Array<AlcoholConsumptionSurvey>;
  user?: User | null;
  outletSurveys?: Array<OutletSurvey>;
  policeStation?: PoliceStation | null;
};
