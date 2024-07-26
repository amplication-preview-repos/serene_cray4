import { UserCreateNestedManyWithoutProvincesInput } from "./UserCreateNestedManyWithoutProvincesInput";
import { OutletCreateNestedManyWithoutProvincesInput } from "./OutletCreateNestedManyWithoutProvincesInput";
import { PoliceStationCreateNestedManyWithoutProvincesInput } from "./PoliceStationCreateNestedManyWithoutProvincesInput";

export type ProvinceCreateInput = {
  name?: string | null;
  users?: UserCreateNestedManyWithoutProvincesInput;
  outlets?: OutletCreateNestedManyWithoutProvincesInput;
  policeStations?: PoliceStationCreateNestedManyWithoutProvincesInput;
};
