import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LeaveListRelationFilter } from "../leave/LeaveListRelationFilter";

export type LeaveTypeWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  leaves?: LeaveListRelationFilter;
};
