import { Camera, Clock, Aperture } from 'lucide-react';
import type { Shot } from '../types';

interface StoryboardViewProps {
  shots: Shot[];
  isGenerating: boolean;
}

export function StoryboardView({ shots, isGenerating }: StoryboardViewProps) {
  if (isGenerating) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-16">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-6" />
          <h3 className="text-xl mb-2 text-gray-900">AI is analyzing your scene...</h3>
          <p className="text-gray-600">
            Generating shots, camera angles, and equipment recommendations
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl mb-2 text-gray-900">Generated Storyboard</h3>
        <p className="text-gray-600 mb-6">
          {shots.length} shots created • Ready for production
        </p>

        <div className="space-y-6">
          {shots.map((shot, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm">
                      Shot {index + 1}
                    </span>
                    <span className="text-gray-600">{shot.type}</span>
                  </div>
                  <h4 className="text-lg text-gray-900">{shot.description}</h4>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-50" />
                <Camera size={48} className="text-gray-400 relative z-10" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-white/90 px-3 py-1 rounded text-sm text-gray-700">
                    {shot.angle}
                  </span>
                  <span className="bg-white/90 px-3 py-1 rounded text-sm text-gray-700">
                    {shot.movement}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-start space-x-2">
                  <Camera size={16} className="text-gray-500 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Camera Angle</p>
                    <p className="text-sm text-gray-900">{shot.angle}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Aperture size={16} className="text-gray-500 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Movement</p>
                    <p className="text-sm text-gray-900">{shot.movement}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock size={16} className="text-gray-500 mt-1" />
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="text-sm text-gray-900">{shot.duration}</p>
                  </div>
                </div>
              </div>

              {shot.lighting && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="text-gray-900">Lighting:</span> {shot.lighting}
                  </p>
                </div>
              )}

              {shot.notes && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600">
                    <span className="text-gray-900">Notes:</span> {shot.notes}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
