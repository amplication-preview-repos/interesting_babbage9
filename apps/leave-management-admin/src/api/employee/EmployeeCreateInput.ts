import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { LeaveCreateNestedManyWithoutEmployeesInput } from "./LeaveCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  email?: string | null;
  position?: string | null;
  name?: string | null;
  department?: DepartmentWhereUniqueInput | null;
  leaves?: LeaveCreateNestedManyWithoutEmployeesInput;
};
