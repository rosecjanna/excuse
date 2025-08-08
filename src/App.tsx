import React, { useState } from 'react';
import { Sparkles, Settings } from 'lucide-react';
import { categories, generateExcuse } from './data/excuses';
import { CategoryCard } from './components/CategoryCard';
import { ExcuseDisplay } from './components/ExcuseDisplay';
import { ExcuseHistory } from './components/ExcuseHistory';
import { UserInputForm } from './components/UserInputForm';

interface HistoryItem {
  excuse: string;
  category: string;
  timestamp: Date;
}

interface UserInputs {
  name: string;
  location: string;
  date: string;
  customDetail: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentExcuse, setCurrentExcuse] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<false>(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showCustomization, setShowCustomization] = useState<boolean>(false);
  const [userInputs, setUserInputs] = useState<UserInputs>({
    name: '',
    location: '',
    date: '',
    customDetail: ''
  });

  const handleGenerateExcuse = async () => {
    if (!selectedCategory) return;

    setIsGenerating(true);
    
    // Add a slight delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newExcuse = generateExcuse(selectedCategory, userInputs);
    setCurrentExcuse(newExcuse);
    
    // Add to history
    const categoryName = categories.find(c => c.id === selectedCategory)?.name || selectedCategory;
    setHistory(prev => [...prev, {
      excuse: newExcuse,
      category: categoryName,
      timestamp: new Date()
    }]);
    
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-10 w-60 h-60 bg-white bg-opacity-5 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Excuse Generator
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
            </div>
            <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto">
              Need a creative excuse? Our AI-powered generator creates believable excuses for any situation. 
              Select a category and let the magic happen!
            </p>
          </div>

          {/* Category Selection */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Choose Your Situation
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  isSelected={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                />
              ))}
            </div>
          </div>

          {/* Customization Toggle */}
          <div className="text-center mb-8">
            <button
              onClick={() => setShowCustomization(!showCustomization)}
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-200 flex items-center gap-2 mx-auto"
            >
              <Settings className="w-5 h-5" />
              {showCustomization ? 'Hide' : 'Show'} Customization Options
            </button>
          </div>

          {/* User Input Form */}
          <div className="max-w-4xl mx-auto">
            <UserInputForm
              inputs={userInputs}
              onInputChange={setUserInputs}
              isVisible={showCustomization}
            />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ExcuseDisplay
                excuse={currentExcuse}
                onGenerate={handleGenerateExcuse}
                isGenerating={isGenerating}
              />
            </div>
            
            <div className="lg:col-span-1">
              <ExcuseHistory history={history} />
            </div>
          </div>

          {/* Tips */}
          <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">💡 Pro Tips</h3>
            <ul className="text-white text-opacity-90 space-y-2">
              <li>• Use the customization options to personalize your excuses with specific details</li>
              <li>• Use these excuses responsibly and consider the impact on others</li>
              <li>• Adapt the generated excuse to fit your specific situation</li>
              <li>• Remember that honesty is usually the best policy</li>
              <li>• Mix personal details with generated content for maximum believability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;