import { Sparkles } from 'lucide-react';

interface SceneInputProps {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  disabled: boolean;
}

export function SceneInput({ value, onChange, onGenerate, isGenerating, disabled }: SceneInputProps) {
  const exampleScenes = [
    'A tense confrontation in a dimly lit warehouse at night',
    'A romantic sunset proposal on a beach',
    'An action-packed car chase through city streets',
    'A quiet morning coffee scene in a cozy café',
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl mb-4 text-gray-900">Scene Description</h3>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="Describe your scene in detail... (e.g., 'A hero walks into an abandoned factory, dramatic lighting from overhead skylights, tension building as they search for clues')"
        className="w-full h-48 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:bg-gray-50 disabled:text-gray-500"
      />

      <button
        onClick={onGenerate}
        disabled={!value.trim() || isGenerating || disabled}
        className="w-full mt-4 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
      >
        {isGenerating ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Generating...</span>
          </>
        ) : (
          <>
            <Sparkles size={20} />
            <span>Generate Storyboard</span>
          </>
        )}
      </button>

      {!disabled && (
        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-3">Try an example:</p>
          <div className="space-y-2">
            {exampleScenes.map((scene, index) => (
              <button
                key={index}
                onClick={() => onChange(scene)}
                className="w-full text-left text-sm p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
              >
                {scene}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
