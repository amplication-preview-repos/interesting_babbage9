import { Leave } from "../leave/Leave";

export type LeaveType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  leaves?: Array<Leave>;
};
