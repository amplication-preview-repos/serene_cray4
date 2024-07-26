import { Province } from "../province/Province";
import { OutletSurvey } from "../outletSurvey/OutletSurvey";
import { Survey } from "../survey/Survey";

export type PoliceStation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  province?: Province | null;
  outletSurveys?: Array<OutletSurvey>;
  surveys?: Array<Survey>;
};
