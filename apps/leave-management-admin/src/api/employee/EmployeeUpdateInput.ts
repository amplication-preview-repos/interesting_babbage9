import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { LeaveUpdateManyWithoutEmployeesInput } from "./LeaveUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  email?: string | null;
  position?: string | null;
  name?: string | null;
  department?: DepartmentWhereUniqueInput | null;
  leaves?: LeaveUpdateManyWithoutEmployeesInput;
};
