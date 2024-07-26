import { Outlet as TOutlet } from "../api/outlet/Outlet";

export const OUTLET_TITLE_FIELD = "name";

export const OutletTitle = (record: TOutlet): string => {
  return record.name?.toString() || String(record.id);
};
