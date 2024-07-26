import { PoliceStationWhereInput } from "./PoliceStationWhereInput";
import { PoliceStationOrderByInput } from "./PoliceStationOrderByInput";

export type PoliceStationFindManyArgs = {
  where?: PoliceStationWhereInput;
  orderBy?: Array<PoliceStationOrderByInput>;
  skip?: number;
  take?: number;
};
