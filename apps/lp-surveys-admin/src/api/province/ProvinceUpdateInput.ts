import { UserUpdateManyWithoutProvincesInput } from "./UserUpdateManyWithoutProvincesInput";
import { OutletUpdateManyWithoutProvincesInput } from "./OutletUpdateManyWithoutProvincesInput";
import { PoliceStationUpdateManyWithoutProvincesInput } from "./PoliceStationUpdateManyWithoutProvincesInput";

export type ProvinceUpdateInput = {
  name?: string | null;
  users?: UserUpdateManyWithoutProvincesInput;
  outlets?: OutletUpdateManyWithoutProvincesInput;
  policeStations?: PoliceStationUpdateManyWithoutProvincesInput;
};
