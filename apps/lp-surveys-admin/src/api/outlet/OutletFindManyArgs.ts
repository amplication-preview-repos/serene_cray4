import { OutletWhereInput } from "./OutletWhereInput";
import { OutletOrderByInput } from "./OutletOrderByInput";

export type OutletFindManyArgs = {
  where?: OutletWhereInput;
  orderBy?: Array<OutletOrderByInput>;
  skip?: number;
  take?: number;
};
