import { User } from "../user/User";

export type Survey = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  completed: boolean | null;
  user?: User | null;
};
