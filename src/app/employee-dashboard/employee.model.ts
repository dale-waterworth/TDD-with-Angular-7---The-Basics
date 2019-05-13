
export interface Employee {
  name: string;
  role: string;
  department: string;
  times: Jobtime[];
  totalHours?: string;
}

export interface Jobtime {
  id: number;
  jobName: string;
  startTime: Date;
  endTime: Date;
}
