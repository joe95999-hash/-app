import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import TipsBox from './components/TipsBox';
import DaySection from './components/DaySection';
import { WORKOUT_PLAN } from './constants';

const App: React.FC = () => {
  // Initialize state from local storage or empty array
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fitnessProgress');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to parse local storage", e);
      return [];
    }
  });

  const [activeTab, setActiveTab] = useState('day1');

  // Effect to sync state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('fitnessProgress', JSON.stringify(completedIds));
  }, [completedIds]);

  const toggleComplete = useCallback((id: string) => {
    setCompletedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  const resetProgress = useCallback(() => {
    if (window.confirm("確定要重置所有進度嗎？這將會清除所有已完成的動作紀錄。")) {
      setCompletedIds([]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Calculate overall progress
  const totalExercises = WORKOUT_PLAN.reduce((acc, day) => acc + day.exercises.length, 0);
  const completedCount = completedIds.length;
  const progressPercentage = Math.round((completedCount / totalExercises) * 100);

  const activeDay = WORKOUT_PLAN.find(d => d.id === activeTab);

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-10">
      <Header 
        onReset={resetProgress} 
        progress={progressPercentage}
        activeTab={activeTab}
        onTabChange={(id) => {
          setActiveTab(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
      
      <main className="max-w-3xl mx-auto pt-4">
        <TipsBox />
        
        {activeDay ? (
          <DaySection 
            key={activeDay.id} 
            day={activeDay} 
            completedIds={completedIds} 
            onToggle={toggleComplete} 
          />
        ) : (
          <div className="p-8 text-center text-gray-500">
            找不到該日期的訓練計劃
          </div>
        )}

        <div className="text-center text-gray-400 text-xs py-8 px-4">
          <p>已準備好開始今天的訓練！加油！💪</p>
        </div>
      </main>
    </div>
  );
};

export default App;