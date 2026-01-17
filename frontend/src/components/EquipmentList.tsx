import { Camera, Lightbulb, Mic, Package } from 'lucide-react';
import type { Equipment } from '../types';

interface EquipmentListProps {
  equipment: Equipment[];
}

export function EquipmentList({ equipment }: EquipmentListProps) {
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'camera':
        return <Camera size={20} />;
      case 'lighting':
        return <Lightbulb size={20} />;
      case 'audio':
        return <Mic size={20} />;
      default:
        return <Package size={20} />;
    }
  };

  const groupedEquipment = equipment.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, Equipment[]>);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl mb-4 text-gray-900">Required Equipment</h3>

      <div className="space-y-6">
        {Object.entries(groupedEquipment).map(([category, items]) => (
          <div key={category}>
            <div className="flex items-center space-x-2 mb-3">
              <div className="text-gray-700">{getIcon(category)}</div>
              <h4 className="text-gray-900">{category}</h4>
            </div>

            <div className="space-y-2 ml-7">
              {items.map((item, index) => (
                <div key={index} className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{item.name}</p>
                    {item.notes && (
                      <p className="text-xs text-gray-500 mt-1">{item.notes}</p>
                    )}
                  </div>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded ml-2 whitespace-nowrap">
                    {item.quantity}x
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total items:</span>
          <span className="text-gray-900">{equipment.length}</span>
        </div>
      </div>
    </div>
  );
}
