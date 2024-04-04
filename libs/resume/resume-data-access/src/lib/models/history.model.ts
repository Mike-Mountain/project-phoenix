export interface History {
  institution: string;
  startDate?: string;
  endDate?: string;
  position?: string;
  description?: string;
  location?: string;
  type?: string;
  skills?: string[];
}

export interface Skill {
  name: string;
  type: string;
}
