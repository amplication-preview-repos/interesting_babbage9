import { Department } from "../department/Department";
import { Leave } from "../leave/Leave";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  position: string | null;
  name: string | null;
  department?: Department | null;
  leaves?: Array<Leave>;
};
