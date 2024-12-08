import { LeaveCreateNestedManyWithoutLeaveTypesInput } from "./LeaveCreateNestedManyWithoutLeaveTypesInput";

export type LeaveTypeCreateInput = {
  typeField?: string | null;
  leaves?: LeaveCreateNestedManyWithoutLeaveTypesInput;
};
