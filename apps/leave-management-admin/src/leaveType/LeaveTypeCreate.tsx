import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LeaveTitle } from "../leave/LeaveTitle";

export const LeaveTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Type" source="typeField" />
        <ReferenceArrayInput
          source="leaves"
          reference="Leave"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
