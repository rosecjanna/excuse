import React from 'react';
import { Clock, Copy } from 'lucide-react';

interface ExcuseHistoryProps {
  history: Array<{ excuse: string; category: string; timestamp: Date }>;
}

export const ExcuseHistory: React.FC<ExcuseHistoryProps> = ({ history }) => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (history.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5" />
        Recent Excuses
      </h3>
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {history.slice(-5).reverse().map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1">
                <p className="text-gray-700 text-sm mb-2">{item.excuse}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span>{item.timestamp.toLocaleTimeString()}</span>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(item.excuse)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};