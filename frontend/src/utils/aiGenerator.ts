import type { StoryboardResult, Shot, Equipment } from '../types';

export function generateStoryboard(sceneDescription: string): StoryboardResult {
  const lowerScene = sceneDescription.toLowerCase();
  
  const isAction = /chase|fight|run|explosion|battle/i.test(sceneDescription);
  const isRomantic = /romantic|love|kiss|propose|sunset/i.test(sceneDescription);
  const isDark = /night|dark|dimly|shadow|warehouse/i.test(sceneDescription);
  const isOutdoor = /beach|street|outdoor|park|forest/i.test(sceneDescription);

  const shots: Shot[] = [];
  const equipment: Equipment[] = [];

  shots.push({
    type: isOutdoor ? 'Exterior Wide Shot' : 'Interior Establishing Shot',
    description: 'Wide establishing shot to set the scene and location',
    angle: 'Wide Angle',
    movement: 'Static',
    duration: '3-5 seconds',
    lighting: isDark ? 'Low-key, dramatic shadows' : 'Natural, balanced lighting',
    notes: 'Sets the mood and establishes location for the audience',
  });

  if (isAction) {
    shots.push({
      type: 'Dynamic Medium Shot',
      description: 'Character enters frame with purpose and intensity',
      angle: 'Eye Level / Slightly Low',
      movement: 'Tracking / Follow',
      duration: '4-6 seconds',
      lighting: isDark ? 'High contrast with practical lights' : 'Dynamic with movement shadows',
      notes: 'Build tension with camera movement matching action',
    });

    shots.push({
      type: 'Close-Up Action',
      description: 'Intense facial expression or key action detail',
      angle: 'Close-Up',
      movement: 'Handheld / Shaky',
      duration: '2-3 seconds',
      lighting: 'Hard light from side for drama',
      notes: 'Quick cut to increase pace and energy',
    });

    shots.push({
      type: 'Wide Action Coverage',
      description: 'Full choreography visible with environmental context',
      angle: 'Wide / High Angle',
      movement: 'Pan / Tilt',
      duration: '5-8 seconds',
      lighting: 'Practical lights + motivated sources',
      notes: 'Coverage shot for editing flexibility',
    });
  } else if (isRomantic) {
    shots.push({
      type: 'Two-Shot Medium',
      description: 'Both characters in frame, creating intimate space',
      angle: 'Eye Level',
      movement: 'Slow Push In',
      duration: '6-8 seconds',
      lighting: 'Soft, warm, golden hour quality',
      notes: 'Slow camera movement enhances emotional connection',
    });

    shots.push({
      type: 'Over-The-Shoulder',
      description: 'Character POV focusing on emotional reaction',
      angle: 'Over-The-Shoulder',
      movement: 'Static',
      duration: '4-5 seconds',
      lighting: 'Soft backlight, gentle key light',
      notes: 'Creates intimacy and connection between characters',
    });

    shots.push({
      type: 'Close-Up Emotional',
      description: 'Intimate close-up capturing genuine emotion',
      angle: 'Close-Up',
      movement: 'Subtle Push In',
      duration: '5-7 seconds',
      lighting: 'Soft key light, natural fill',
      notes: 'The emotional heart of the scene',
    });
  } else {
    shots.push({
      type: 'Medium Shot',
      description: 'Character enters or performs key action',
      angle: 'Eye Level',
      movement: 'Slow Dolly',
      duration: '5-6 seconds',
      lighting: isDark ? 'Motivated practical sources' : 'Three-point lighting setup',
      notes: 'Core coverage for the scene',
    });

    shots.push({
      type: 'Close-Up',
      description: 'Important detail or character reaction',
      angle: 'Close-Up',
      movement: 'Static',
      duration: '3-4 seconds',
      lighting: 'Focused key light with controlled shadows',
      notes: 'Draw attention to critical moment or detail',
    });
  }

  shots.push({
    type: 'Reaction Shot',
    description: 'Character reaction to previous action or dialogue',
    angle: 'Medium Close-Up',
    movement: 'Static',
    duration: '3-4 seconds',
    lighting: 'Consistent with scene lighting',
    notes: 'Essential for emotional continuity',
  });

  shots.push({
    type: 'Detail/Cutaway',
    description: 'Significant object, environmental detail, or atmosphere shot',
    angle: 'Macro / Close Detail',
    movement: 'Static or Subtle',
    duration: '2-3 seconds',
    lighting: 'Focused, isolated subject',
    notes: 'Adds production value and pacing variation',
  });

  equipment.push({
    name: 'Cinema Camera (RED, ARRI, or Sony FX)',
    category: 'Camera',
    quantity: 1,
    notes: '4K+ capable, high dynamic range',
  });

  equipment.push({
    name: 'Prime Lens Kit (24mm, 35mm, 50mm, 85mm)',
    category: 'Camera',
    quantity: 1,
    notes: 'Fast aperture f/1.8 or faster for depth',
  });

  if (isAction) {
    equipment.push({
      name: 'Gimbal Stabilizer',
      category: 'Camera',
      quantity: 1,
      notes: 'For smooth tracking and dynamic movement',
    });

    equipment.push({
      name: 'Handheld Rig',
      category: 'Camera',
      quantity: 1,
      notes: 'For controlled handheld energy',
    });
  } else {
    equipment.push({
      name: 'Dolly with Track',
      category: 'Camera',
      quantity: 1,
      notes: 'For smooth, cinematic camera movements',
    });

    equipment.push({
      name: 'Tripod with Fluid Head',
      category: 'Camera',
      quantity: 1,
      notes: 'For stable static shots',
    });
  }

  if (isDark) {
    equipment.push({
      name: 'LED Panel Lights (1000W equiv.)',
      category: 'Lighting',
      quantity: 2,
      notes: 'Key and fill light sources',
    });

    equipment.push({
      name: 'Practical Bulbs (Tungsten)',
      category: 'Lighting',
      quantity: 4,
      notes: 'For motivated lighting in scene',
    });

    equipment.push({
      name: 'Light Diffusion Kit',
      category: 'Lighting',
      quantity: 1,
      notes: 'Softboxes, flags, and diffusion materials',
    });

    equipment.push({
      name: 'RGB LED Tubes',
      category: 'Lighting',
      quantity: 2,
      notes: 'For accent and atmosphere',
    });
  } else {
    equipment.push({
      name: 'LED Panel Lights (500W equiv.)',
      category: 'Lighting',
      quantity: 3,
      notes: 'Key, fill, and rim lights',
    });

    equipment.push({
      name: 'Reflectors (5-in-1 Kit)',
      category: 'Lighting',
      quantity: 2,
      notes: 'For natural light shaping',
    });

    equipment.push({
      name: 'Light Stands',
      category: 'Lighting',
      quantity: 4,
      notes: 'C-stands with arms',
    });
  }

  equipment.push({
    name: 'Boom Microphone',
    category: 'Audio',
    quantity: 1,
    notes: 'Shotgun mic for dialogue',
  });

  equipment.push({
    name: 'Lavalier Microphones',
    category: 'Audio',
    quantity: 2,
    notes: 'Wireless lav mics for backup/coverage',
  });

  equipment.push({
    name: 'Audio Recorder',
    category: 'Audio',
    quantity: 1,
    notes: 'Multi-track field recorder',
  });

  equipment.push({
    name: 'Boom Pole with Shock Mount',
    category: 'Audio',
    quantity: 1,
    notes: 'For professional boom operation',
  });

  equipment.push({
    name: 'Monitors',
    category: 'Production',
    quantity: 2,
    notes: 'Director + focus puller monitoring',
  });

  equipment.push({
    name: 'Camera Batteries + Chargers',
    category: 'Production',
    quantity: 1,
    notes: 'Minimum 6 batteries for full day',
  });

  equipment.push({
    name: 'Memory Cards (256GB+)',
    category: 'Production',
    quantity: 4,
    notes: 'High-speed for 4K recording',
  });

  equipment.push({
    name: 'Sandbags',
    category: 'Production',
    quantity: 8,
    notes: 'For stabilizing stands and equipment',
  });

  equipment.push({
    name: 'Gaffer Tape + Accessories',
    category: 'Production',
    quantity: 1,
    notes: 'Essential grip supplies',
  });

  if (isAction) {
    equipment.push({
      name: 'Safety Equipment',
      category: 'Production',
      quantity: 1,
      notes: 'First aid, harnesses if needed',
    });
  }

  return { shots, equipment };
}
