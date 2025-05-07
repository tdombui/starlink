'use client';
import { useState } from 'react';

export default function PaypalApiLogAccordion({
  refundLogEntry,
}: {
  refundLogEntry?: { date: string; time: string };
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Construct timestamp for JSON if refundLogEntry exists
  const timestampISO = refundLogEntry
    ? `${refundLogEntry.date.split('/').reverse().join('-')}T${refundLogEntry.time}:00Z`
    : '2023-09-04T10:32:17Z';

  const logData = `{
  "merchant_payee_id": "95488",
  "transaction_id": "9AG18374",
  "status": "FAILED",
  "error_code": "REFUND_FAILED",
  "customer_email": "j_appleseed@spacex.com",
  "error_message": "Refund not successful. Transaction older than 180 days.",
  "timestamp": "${timestampISO}"
}`;

  return (
    <div className="bg-white text-black border border-gray-300 rounded-md shadow max-w-2xl w-full p-4">
      <h2 className="text-lg font-semibold mb-2">Transaction Details</h2>
      <div className="text-sm mb-4">
        <p><span className="font-medium">Item:</span> iPhone 14 Pro Max 256GB (Unlocked)</p>
        <p><span className="font-medium">Customer:</span> Johnny Appleseed</p>
        <p><span className="font-medium">Order #:</span> 524311</p>
        <p><span className="font-medium">Order Date:</span> Sept 4, 2024</p>
        <p><span className="font-medium">Payment ID:</span> 9AG18374</p>
        <p><span className="font-medium">Payment method:</span> PayPal</p>
        <p><span className="text-green-600 font-medium">09/04/2024</span> 13:51:47 <span className="text-green-600 font-medium">PAYMENT.ORDER.INITIATED</span> (622.00)</p>
        <p><span className="text-green-600 font-medium">09/04/2024</span> 13:52:07 <span className="text-green-600 font-medium">CHECKOUT.ORDER.PROCESSED</span> (622.00)</p>
        <p><span className="text-green-600 font-medium">09/04/2024</span> 13:52:07 <span className="text-green-600 font-medium ">PAYMENT.CAPTURE.COMPLETED</span> (622.00)</p>

        {refundLogEntry && (
          <p>
            <span className="text-green-600 font-medium">{refundLogEntry.date}</span>{' '}
            {refundLogEntry.time}{' '}
            <span className="text-green-600 font-medium mb-4">REFUND.REQUEST.PROCESSED</span> (622.00)
          </p>
        )}
      </div>

      <div className="border-t border-gray-200 pt-3">
        <p className="font-medium text-sm mb-2">Refund Attempts</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-left w-full text-blue-600 hover:underline font-medium text-sm cursor-pointer"
        >
          {isOpen ? '▼ Hide PayPal API Response' : '▶ View PayPal API Response'}
        </button>
        {isOpen && (
          <pre className="mt-3 bg-gray-900 text-white p-3 rounded text-xs overflow-x-auto whitespace-pre-wrap">
            {logData}
          </pre>
        )}
      </div>
    </div>
  );
}
