import React, { useState } from 'react';
import { Exercise } from '../types';
import { Play, Check } from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
  isCompleted: boolean;
  onToggle: (id: string) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, isCompleted, onToggle }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl transition-all duration-300 mx-4 mb-5 border-2
        ${isCompleted 
          ? 'bg-[#f0f0f0] border-success/50 opacity-90' 
          : 'bg-white border-transparent shadow-md'
        }
        ${exercise.isCardio ? '!border-l-[5px] !border-l-[#007bff]' : ''}
      `}
    >
      {/* Media Area */}
      <div 
        className="relative w-full aspect-video bg-black cursor-pointer group"
        onClick={() => setIsPlaying(true)}
      >
        {isPlaying ? (
          <iframe 
            src={`https://www.youtube.com/embed/${exercise.videoId}?autoplay=1&rel=0`} 
            title={exercise.title}
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img 
              src={`https://img.youtube.com/vi/${exercise.videoId}/hqdefault.jpg`} 
              alt={exercise.title}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${isCompleted ? 'opacity-50 grayscale' : 'opacity-90'}`}
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center border-2 border-white backdrop-blur-sm group-hover:scale-110 transition-transform">
                <div className="ml-1 w-0 h-0 border-l-[14px] border-l-white border-y-[9px] border-y-transparent"></div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4">
        <h3 className={`text-[1.1rem] font-bold mb-2 transition-colors ${isCompleted ? 'text-gray-400 line-through' : 'text-primary'}`}>
          {exercise.title}
        </h3>
        
        <div className="flex gap-3 text-sm font-medium text-gray-600 mb-2">
          <span className="bg-gray-100 px-2 py-0.5 rounded">{exercise.sets}</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded">{exercise.reps}</span>
        </div>

        {exercise.tempo && (
          <div className="inline-block bg-[#e8f5e9] text-[#2e7d32] px-2 py-1 rounded-md text-xs font-bold border border-[#c8e6c9] mb-3">
            {exercise.tempo}
          </div>
        )}

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {exercise.cue}
        </p>

        <div className="pt-3 border-t border-gray-100 text-right">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(exercise.id);
            }}
            className={`
              inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95
              ${isCompleted 
                ? 'bg-success text-white shadow-none' 
                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
              }
            `}
          >
            {isCompleted ? (
              <>
                <Check className="w-4 h-4" />
                已完成
              </>
            ) : (
              "完成動作"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;