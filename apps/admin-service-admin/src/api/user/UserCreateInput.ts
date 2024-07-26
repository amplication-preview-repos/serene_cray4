import { InputJsonValue } from "../../types";
import { SurveyCreateNestedManyWithoutUsersInput } from "./SurveyCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  surveys?: SurveyCreateNestedManyWithoutUsersInput;
};
