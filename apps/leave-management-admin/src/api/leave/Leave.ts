import { LeaveType } from "../leaveType/LeaveType";
import { Employee } from "../employee/Employee";

export type Leave = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date | null;
  endDate: Date | null;
  reason: string | null;
  status?: "Option1" | null;
  leaveType?: LeaveType | null;
  employee?: Employee | null;
};
