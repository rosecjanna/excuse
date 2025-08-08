import React, { useState } from 'react';
import { User, MapPin, Calendar, Type } from 'lucide-react';

interface UserInputs {
  name: string;
  location: string;
  date: string;
  customDetail: string;
}

interface UserInputFormProps {
  inputs: UserInputs;
  onInputChange: (inputs: UserInputs) => void;
  isVisible: boolean;
}

export const UserInputForm: React.FC<UserInputFormProps> = ({ inputs, onInputChange, isVisible }) => {
  const [localInputs, setLocalInputs] = useState<UserInputs>(inputs);

  const handleInputChange = (field: keyof UserInputs, value: string) => {
    const newInputs = { ...localInputs, [field]: value };
    setLocalInputs(newInputs);
    onInputChange(newInputs);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Type className="w-5 h-5 text-purple-600" />
        Customize Your Excuse
      </h3>
      <p className="text-gray-600 mb-6 text-sm">
        Add personal details to make your excuse more believable and specific to your situation.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <User className="w-4 h-4" />
            Your Name
          </label>
          <input
            type="text"
            value={localInputs.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="e.g., John, Sarah, Alex"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Location/Place
          </label>
          <input
            type="text"
            value={localInputs.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            placeholder="e.g., downtown, the mall, my office"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Specific Date/Time
          </label>
          <input
            type="text"
            value={localInputs.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            placeholder="e.g., tomorrow morning, next week"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Type className="w-4 h-4" />
            Custom Detail
          </label>
          <input
            type="text"
            value={localInputs.customDetail}
            onChange={(e) => handleInputChange('customDetail', e.target.value)}
            placeholder="e.g., important meeting, doctor's visit"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-700">
          💡 <strong>Tip:</strong> Leave fields empty to use random generated content, or fill them in for personalized excuses.
        </p>
      </div>
    </div>
  );
};