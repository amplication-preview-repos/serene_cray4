import { SortOrder } from "../../util/SortOrder";

export type SurveyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  completed?: SortOrder;
  userId?: SortOrder;
};
