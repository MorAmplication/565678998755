import { InputJsonValue } from "../../types";

export type MorCreateInput = {
  password?: string | null;
  username: string;
  roles: InputJsonValue;
};
