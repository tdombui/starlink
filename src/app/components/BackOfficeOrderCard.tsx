// components/BackOfficeOrderCard.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function BackOfficeOrderCard({
  onRefund,
}: {
  onRefund: (date: string, time: string) => void;
}) {
  const [isRefunding, setIsRefunding] = useState(false);
  const [refunded, setRefunded] = useState(false);

  const handleRefund = () => {
    setIsRefunding(true);
    setTimeout(() => {
      const now = new Date();
      const date = now.toLocaleDateString('en-US');
      const time = now.toLocaleTimeString('en-US', { hour12: false });
      onRefund(date, time); // Send to parent
      setIsRefunding(false);
      setRefunded(true);
    }, 300);
  };

  return (
    <div className="bg-white text-black border border-gray-300 rounded-md shadow max-w-2xl w-full p-4">
      <h2 className="text-lg font-semibold mb-2">Order Details</h2>
      <div className="flex items-center gap-4 mb-4">
        <Image src="/etc/ip11.png" alt="iPhone 11 Pro Max" width={60} height={60} />
        <div className="text-sm">
          <p><span className="font-medium">Item:</span> iPhone 14 Pro Max 256GB (Unlocked)</p>
          <p><span className="font-medium">Customer:</span> Johnny Appleseed</p>
          <p><span className="font-medium">Order #:</span> 524311</p>
          <p><span className="font-medium">Order Date:</span> Sept 4, 2024</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <p className={`text-sm ${refunded ? 'text-green-600 font-semibold' : 'text-gray-600'}`}>
          {refunded ? `Refund processed on ${new Date().toLocaleDateString()}` : 'Order fulfilled'}
        </p>
        <button
          disabled={refunded || isRefunding}
          onClick={handleRefund}
          className={`text-sm px-4 py-1 rounded transition cursor-pointer ${
            refunded
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : isRefunding
              ? 'bg-blue-400 text-white cursor-wait'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isRefunding ? 'Processing...' : refunded ? 'Refunded' : 'Refund'}
        </button>
      </div>
    </div>
  );
}
