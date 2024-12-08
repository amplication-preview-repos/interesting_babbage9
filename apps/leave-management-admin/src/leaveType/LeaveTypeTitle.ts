import { LeaveType as TLeaveType } from "../api/leaveType/LeaveType";

export const LEAVETYPE_TITLE_FIELD = "typeField";

export const LeaveTypeTitle = (record: TLeaveType): string => {
  return record.typeField?.toString() || String(record.id);
};
