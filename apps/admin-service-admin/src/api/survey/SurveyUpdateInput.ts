import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SurveyUpdateInput = {
  title?: string | null;
  description?: string | null;
  completed?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
