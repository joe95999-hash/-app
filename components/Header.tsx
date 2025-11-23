import React from 'react';
import { RotateCcw } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
  progress: number;
  activeTab: string;
  onTabChange: (id: string) => void;
}

const TABS = [
  { id: 'day1', label: 'Day 1', sub: '臀部' },
  { id: 'day2', label: 'Day 2', sub: '上肢' },
  { id: 'day3', label: 'Day 3', sub: '居家臀' },
  { id: 'day4', label: 'Day 4', sub: '背部' },
];

const Header: React.FC<HeaderProps> = ({ onReset, progress, activeTab, onTabChange }) => {
  return (
    <div className="sticky top-0 z-50 bg-[#f8f9fa] shadow-md">
      {/* Top Bar */}
      <header className="bg-gradient-to-br from-primary to-secondary text-white p-4 pt-[max(15px,env(safe-area-inset-top))] flex items-center justify-between">
        <button 
          onClick={onReset}
          className="bg-white/20 hover:bg-white/30 active:scale-95 transition-all text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 backdrop-blur-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          重置
        </button>
        
        <h1 className="text-lg font-bold tracking-wide text-center flex-grow">
          12週增肌特訓
        </h1>
        
        <div className="w-[58px]"></div> 
      </header>

      {/* Progress Bar */}
      <div className="relative w-full h-6 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700 drop-shadow-sm">
          <span className="bg-white/40 px-2 py-0.5 rounded-full backdrop-blur-[1px]">
            總進度 {progress}%
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b border-gray-100 overflow-x-auto no-scrollbar">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex-1 py-3 min-w-[80px] text-center relative transition-colors duration-200
                ${isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}
              `}
            >
              <div className="text-sm font-bold leading-tight">{tab.label}</div>
              <div className="text-[10px] font-medium opacity-80">{tab.sub}</div>
              {isActive && (
                <div className="absolute bottom-0 left-[20%] right-[20%] h-[3px] bg-primary rounded-t-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;