import React, { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';

interface ExcuseDisplayProps {
  excuse: string;
  onGenerate: () => void;
  isGenerating: boolean;
}

export const ExcuseDisplay: React.FC<ExcuseDisplayProps> = ({ excuse, onGenerate, isGenerating }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(excuse);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Generated Excuse</h2>
        <div className="bg-gray-50 rounded-lg p-6 min-h-[120px] flex items-center">
          {excuse ? (
            <p className="text-gray-700 text-lg leading-relaxed">{excuse}</p>
          ) : (
            <p className="text-gray-400 text-lg italic">Select a category and generate your excuse!</p>
          )}
        </div>
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={onGenerate}
          disabled={isGenerating}
          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
          {isGenerating ? 'Generating...' : 'Generate New Excuse'}
        </button>
        
        {excuse && (
          <button
            onClick={copyToClipboard}
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 flex items-center gap-2"
          >
            <Copy className="w-5 h-5" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
    </div>
  );
};