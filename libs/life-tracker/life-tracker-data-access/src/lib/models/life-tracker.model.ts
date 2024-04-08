import { FormControl } from '@angular/forms';

export interface LogEntry {
  userId: string;
  id: string;
  date: Date;
  mood: string[];
  sliders: Slider[];
  workedOut: boolean;
  workoutIntensity: string;
  moodNotes: string;
  food: FoodLog;
  drinks: string[];
  activities: string[];
  bathroom: BathroomLog;
  journalEntry: string;
}

export interface Slider {
  name: string;
  value: number;
}

export interface FoodLog {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
  snacks: string[]
}

export interface BathroomLog {
  urine: string;
  stool: string;
}
