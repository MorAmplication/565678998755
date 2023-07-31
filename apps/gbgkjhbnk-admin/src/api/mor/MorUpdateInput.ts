import { InputJsonValue } from "../../types";

export type MorUpdateInput = {
  password?: string | null;
  username?: string;
  roles?: InputJsonValue;
};
