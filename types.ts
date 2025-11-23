export interface Exercise {
  id: string;
  title: string;
  videoId: string;
  sets: string;
  reps: string;
  tempo?: string;
  cue: string;
  isCardio?: boolean;
}

export interface DayPlan {
  id: string;
  title: string;
  tag: string;
  exercises: Exercise[];
}
