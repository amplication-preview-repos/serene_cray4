import { SortOrder } from "../../util/SortOrder";

export type OutletOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
  provinceId?: SortOrder;
};
