import { InputJsonValue } from "../../types";
import { ProvinceWhereUniqueInput } from "../province/ProvinceWhereUniqueInput";
import { SurveyCreateNestedManyWithoutUsersInput } from "./SurveyCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  province?: ProvinceWhereUniqueInput | null;
  surveys?: SurveyCreateNestedManyWithoutUsersInput;
};
