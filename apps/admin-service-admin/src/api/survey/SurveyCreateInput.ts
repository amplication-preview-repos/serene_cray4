import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SurveyCreateInput = {
  title?: string | null;
  description?: string | null;
  completed?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
