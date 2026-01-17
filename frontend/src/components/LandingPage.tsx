import { useState, useEffect } from 'react';
import { Film, Zap, Users, Sparkles } from 'lucide-react';
import { MouseFollower } from './MouseFollower';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <MouseFollower />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Film size={32} className="text-gray-900" />
            <h1 className="text-3xl font-bold text-gray-900">vemba</h1>
          </div>
          <button
            onClick={onStart}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Get Started
          </button>
        </div>

        {/* Hero section */}
        <div className="px-8 py-20 text-center max-w-4xl mx-auto">
          <h2 className="text-7xl font-bold text-gray-900 mb-6">
            Professional Shot Lists in Seconds
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Transform your scene descriptions into comprehensive storyboards with
            AI-powered shot planning, equipment recommendations, and professional
            cinematography insights.
          </p>
          <button
            onClick={onStart}
            className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition inline-flex items-center space-x-2"
          >
            <Sparkles size={20} />
            <span>Start Planning</span>
          </button>
        </div>

        {/* Features section */}
        <div className="px-8 py-20 border-t border-gray-200">
          <h3 className="text-center text-4xl font-bold text-gray-900 mb-12">
            Why Choose vemba?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<Zap size={32} />}
              title="AI-Powered"
              description="Intelligent scene analysis using advanced AI to generate realistic shot lists and equipment recommendations."
            />
            <FeatureCard
              icon={<Users size={32} />}
              title="Professional Grade"
              description="Built by filmmakers for filmmakers. Every shot is optimized for production efficiency and visual impact."
            />
            <FeatureCard
              icon={<Film size={32} />}
              title="Fast & Accurate"
              description="Generate comprehensive storyboards in seconds. No learning curve, just pure creative power."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition bg-white">
      <div className="text-gray-900 mb-4">{icon}</div>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
