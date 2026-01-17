export interface Shot {
  type: string;
  description: string;
  angle: string;
  movement: string;
  duration: string;
  lighting?: string;
  notes?: string;
}

export interface Equipment {
  name: string;
  category: string;
  quantity: number;
  notes?: string;
}

export interface StoryboardResult {
  shots: Shot[];
  equipment: Equipment[];
}
