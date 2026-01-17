import { useState } from 'react';
import { SceneInput } from './SceneInput';
import { StoryboardView } from './StoryboardView';
import { EquipmentList } from './EquipmentList';
import { generateStoryboard } from '../utils/aiGenerator';
import type { Shot, Equipment } from '../types';

interface EditorPageProps {
  onBack: () => void;
}

export function EditorPage({ onBack }: EditorPageProps) {
  const [sceneDescription, setSceneDescription] = useState('');
  const [shots, setShots] = useState<Shot[]>([]);
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!sceneDescription.trim()) {
      alert('Please enter a scene description');
      return;
    }

    setIsGenerating(true);

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result = generateStoryboard(sceneDescription);
    setShots(result.shots);
    setEquipment(result.equipment);

    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 px-8 py-6">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 transition mb-4"
        >
          ← Back
        </button>
        <h1 className="text-4xl font-bold text-gray-900">Scene Analysis</h1>
        <p className="text-gray-600 mt-2">
          Describe your scene and let AI generate a professional storyboard
        </p>
      </div>

      {/* Content */}
      <div className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Input section */}
          <SceneInput
            value={sceneDescription}
            onChange={setSceneDescription}
            onGenerate={handleGenerate}
            isLoading={isGenerating}
          />

          {/* Results section */}
          {shots.length > 0 && (
            <div className="mt-12 space-y-12">
              <StoryboardView shots={shots} isLoading={isGenerating} />
              <EquipmentList equipment={equipment} />
            </div>
          )}

          {/* Empty state */}
          {shots.length === 0 && !isGenerating && (
            <div className="mt-12 text-center py-20 border border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-500">
                Enter a scene description and click "Generate" to create a storyboard
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
