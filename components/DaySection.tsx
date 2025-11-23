import React from 'react';
import { DayPlan } from '../types';
import ExerciseCard from './ExerciseCard';

interface DaySectionProps {
  day: DayPlan;
  completedIds: string[];
  onToggle: (id: string) => void;
}

const DaySection: React.FC<DaySectionProps> = ({ day, completedIds, onToggle }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="flex flex-col gap-1 pb-4">
        {day.exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            isCompleted={completedIds.includes(exercise.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default DaySection;