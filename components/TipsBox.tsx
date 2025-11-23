import React from 'react';
import { Lightbulb } from 'lucide-react';

const TipsBox: React.FC = () => {
  return (
    <div className="mx-4 mt-6 mb-6">
      <div className="max-w-3xl mx-auto bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg shadow-sm">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
          <div className="text-sm text-amber-900 space-y-2">
            <p>
              <strong>教練提醒：</strong> App 會自動記憶進度。請點選上方標籤切換天數。
            </p>
            <p>
              <strong>UFC 節奏 3-1-2-1：</strong><br />
              <span className="block mt-1 pl-2 border-l-2 border-amber-200 text-amber-800">
                3秒下放 ➞ 1秒底停 ➞ 2秒發力 ➞ 1秒頂停
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsBox;