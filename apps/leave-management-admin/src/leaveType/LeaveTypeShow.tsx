import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { LEAVETYPE_TITLE_FIELD } from "./LeaveTypeTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";

export const LeaveTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Type" source="typeField" />
        <ReferenceManyField
          reference="Leave"
          target="leaveTypeId"
          label="Leaves"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Reason" source="reason" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="LeaveType"
              source="leavetype.id"
              reference="LeaveType"
            >
              <TextField source={LEAVETYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
