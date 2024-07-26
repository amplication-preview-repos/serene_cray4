import { JsonValue } from "type-fest";
import { Province } from "../province/Province";
import { Survey } from "../survey/Survey";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  province?: Province | null;
  surveys?: Array<Survey>;
};
