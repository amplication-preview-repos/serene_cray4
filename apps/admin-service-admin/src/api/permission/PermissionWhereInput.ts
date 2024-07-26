import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PermissionWhereInput = {
  id?: StringFilter;
  action?: StringNullableFilter;
};
