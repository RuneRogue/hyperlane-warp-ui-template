import { useState } from 'react';
import { Card } from '../../components/layout/Card';
import { TransferTokenForm } from './TransferTokenForm';

type BridgeMode = 'to-blockx' | 'from-blockx';

export function TransferTokenCard() {
  const [activeTab, setActiveTab] = useState<BridgeMode>('to-blockx');

  return (
    <Card className="w-100 sm:w-[31rem]">
      {/* Tab Headers */}
      <div className="mb-4 flex rounded-lg bg-gray-100 p-1">
        <button
          onClick={() => setActiveTab('to-blockx')}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'to-blockx'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Bridge to BlockX
        </button>
        <button
          onClick={() => setActiveTab('from-blockx')}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'from-blockx'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Bridge from BlockX
        </button>
      </div>

      {/* Tab Content */}
      <TransferTokenForm mode={activeTab} />
    </Card>
  );
}
