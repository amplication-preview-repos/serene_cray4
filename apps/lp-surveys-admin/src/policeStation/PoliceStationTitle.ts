import { PoliceStation as TPoliceStation } from "../api/policeStation/PoliceStation";

export const POLICESTATION_TITLE_FIELD = "name";

export const PoliceStationTitle = (record: TPoliceStation): string => {
  return record.name?.toString() || String(record.id);
};
