import { InputJsonValue } from "../../types";
import { ProvinceWhereUniqueInput } from "../province/ProvinceWhereUniqueInput";
import { SurveyUpdateManyWithoutUsersInput } from "./SurveyUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  province?: ProvinceWhereUniqueInput | null;
  surveys?: SurveyUpdateManyWithoutUsersInput;
};
