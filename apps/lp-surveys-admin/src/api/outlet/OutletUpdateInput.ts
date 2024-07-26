import { ProvinceWhereUniqueInput } from "../province/ProvinceWhereUniqueInput";
import { OutletSurveyUpdateManyWithoutOutletsInput } from "./OutletSurveyUpdateManyWithoutOutletsInput";

export type OutletUpdateInput = {
  name?: string | null;
  address?: string | null;
  province?: ProvinceWhereUniqueInput | null;
  outletSurveys?: OutletSurveyUpdateManyWithoutOutletsInput;
};
