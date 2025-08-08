import React from 'react';
import { ExcuseCategory } from '../data/excuses';

interface CategoryCardProps {
  category: ExcuseCategory;
  isSelected: boolean;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg
        ${isSelected ? 'ring-4 ring-white ring-opacity-60' : ''}
        bg-gradient-to-br ${category.color} text-white
      `}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">{category.icon}</div>
        <h3 className="font-semibold text-lg">{category.name}</h3>
      </div>
      {isSelected && (
        <div className="absolute -top-2 -right-2 bg-white text-purple-600 rounded-full p-2 shadow-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};