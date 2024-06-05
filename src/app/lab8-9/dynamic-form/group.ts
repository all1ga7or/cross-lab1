import { Student } from "./student";
export interface Group {
    groupName: string;
    course: number;
    leader: string;
    numberOfStudents: number;
    students: Student[];
  }