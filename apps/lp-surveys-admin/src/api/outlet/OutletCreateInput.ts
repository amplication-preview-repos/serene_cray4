import { ProvinceWhereUniqueInput } from "../province/ProvinceWhereUniqueInput";
import { OutletSurveyCreateNestedManyWithoutOutletsInput } from "./OutletSurveyCreateNestedManyWithoutOutletsInput";

export type OutletCreateInput = {
  name?: string | null;
  address?: string | null;
  province?: ProvinceWhereUniqueInput | null;
  outletSurveys?: OutletSurveyCreateNestedManyWithoutOutletsInput;
};
