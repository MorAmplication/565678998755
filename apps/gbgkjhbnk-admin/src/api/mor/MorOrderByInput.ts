import { SortOrder } from "../../util/SortOrder";

export type MorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  password?: SortOrder;
  username?: SortOrder;
  roles?: SortOrder;
};
