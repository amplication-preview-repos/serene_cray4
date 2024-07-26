import { User } from "../user/User";
import { Outlet } from "../outlet/Outlet";
import { PoliceStation } from "../policeStation/PoliceStation";

export type Province = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  users?: Array<User>;
  outlets?: Array<Outlet>;
  policeStations?: Array<PoliceStation>;
};
