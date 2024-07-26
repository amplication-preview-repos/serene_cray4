import { Permission as TPermission } from "../api/permission/Permission";

export const PERMISSION_TITLE_FIELD = "action";

export const PermissionTitle = (record: TPermission): string => {
  return record.action?.toString() || String(record.id);
};
