import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { LeaveListRelationFilter } from "../leave/LeaveListRelationFilter";

export type EmployeeWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  position?: StringNullableFilter;
  name?: StringNullableFilter;
  department?: DepartmentWhereUniqueInput;
  leaves?: LeaveListRelationFilter;
};
