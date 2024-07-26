import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { OutletListRelationFilter } from "../outlet/OutletListRelationFilter";
import { PoliceStationListRelationFilter } from "../policeStation/PoliceStationListRelationFilter";

export type ProvinceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
  outlets?: OutletListRelationFilter;
  policeStations?: PoliceStationListRelationFilter;
};
