import { LogEntry } from '@project-phoenix/life-tracker-data-access';

export function createLogEntry(entry: LogEntry) {
  return {
    id: entry.id || undefined,
    date: entry.date || new Date(),
    bathroom: entry.bathroom || {},
    activities: entry.activities || [],
    drinks: entry.drinks || [],
    journalEntry: entry.journalEntry || '',
    food: entry.food || [],
    mood: entry.mood || [],
    moodNotes: entry.moodNotes || '',
    sliders: entry.sliders || [],
    userId: entry.userId || undefined,
    workedOut: entry.workedOut || false,
    workoutIntensity: entry.workoutIntensity || ''
  } as LogEntry;
}
