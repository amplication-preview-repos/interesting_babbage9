import { LeaveTypeWhereUniqueInput } from "../leaveType/LeaveTypeWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type LeaveUpdateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  reason?: string | null;
  status?: "Option1" | null;
  leaveType?: LeaveTypeWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
};
