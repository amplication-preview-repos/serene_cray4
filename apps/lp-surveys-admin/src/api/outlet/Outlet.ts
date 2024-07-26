import { Province } from "../province/Province";
import { OutletSurvey } from "../outletSurvey/OutletSurvey";

export type Outlet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  province?: Province | null;
  outletSurveys?: Array<OutletSurvey>;
};
