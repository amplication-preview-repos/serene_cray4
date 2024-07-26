import { SortOrder } from "../../util/SortOrder";

export type PoliceStationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
  provinceId?: SortOrder;
};
