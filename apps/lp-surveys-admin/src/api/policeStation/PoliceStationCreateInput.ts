import { ProvinceWhereUniqueInput } from "../province/ProvinceWhereUniqueInput";
import { OutletSurveyCreateNestedManyWithoutPoliceStationsInput } from "./OutletSurveyCreateNestedManyWithoutPoliceStationsInput";
import { SurveyCreateNestedManyWithoutPoliceStationsInput } from "./SurveyCreateNestedManyWithoutPoliceStationsInput";

export type PoliceStationCreateInput = {
  name?: string | null;
  address?: string | null;
  province?: ProvinceWhereUniqueInput | null;
  outletSurveys?: OutletSurveyCreateNestedManyWithoutPoliceStationsInput;
  surveys?: SurveyCreateNestedManyWithoutPoliceStationsInput;
};
