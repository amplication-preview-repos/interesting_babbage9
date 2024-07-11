import { Employee } from "../employee/Employee";

export type Department = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  employees?: Array<Employee>;
};
