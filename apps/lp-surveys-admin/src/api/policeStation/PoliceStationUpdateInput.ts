import { ProvinceWhereUniqueInput } from "../province/ProvinceWhereUniqueInput";
import { OutletSurveyUpdateManyWithoutPoliceStationsInput } from "./OutletSurveyUpdateManyWithoutPoliceStationsInput";
import { SurveyUpdateManyWithoutPoliceStationsInput } from "./SurveyUpdateManyWithoutPoliceStationsInput";

export type PoliceStationUpdateInput = {
  name?: string | null;
  address?: string | null;
  province?: ProvinceWhereUniqueInput | null;
  outletSurveys?: OutletSurveyUpdateManyWithoutPoliceStationsInput;
  surveys?: SurveyUpdateManyWithoutPoliceStationsInput;
};
