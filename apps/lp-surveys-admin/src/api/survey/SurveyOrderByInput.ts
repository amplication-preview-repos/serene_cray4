import { SortOrder } from "../../util/SortOrder";

export type SurveyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  completedAt?: SortOrder;
  typeField?: SortOrder;
  userId?: SortOrder;
  policeStationId?: SortOrder;
};
