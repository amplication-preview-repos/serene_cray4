import { InputJsonValue } from "../../types";
import { SurveyUpdateManyWithoutUsersInput } from "./SurveyUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  surveys?: SurveyUpdateManyWithoutUsersInput;
};
