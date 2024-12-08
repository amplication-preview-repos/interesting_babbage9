import { SortOrder } from "../../util/SortOrder";

export type LeaveOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  reason?: SortOrder;
  status?: SortOrder;
  leaveTypeId?: SortOrder;
  employeeId?: SortOrder;
};
