import { Province as TProvince } from "../api/province/Province";

export const PROVINCE_TITLE_FIELD = "name";

export const ProvinceTitle = (record: TProvince): string => {
  return record.name?.toString() || String(record.id);
};
