'use client';
import { useState } from 'react';
import BackOfficeOrderCard from './BackOfficeOrderCard';
import PaypalApiLogAccordion from './PayPalApiLog';

export default function RefundSimulator() {
  const [refundLogEntry, setRefundLogEntry] = useState<null | { date: string; time: string }>(null);

  return (
    <div className="flex flex-col gap-8">
      {/* Agent-facing view */}
      <div>
        <h3 className="text-xl font-semibold mb-1">What the agents saw (surface-level view)</h3>
        <BackOfficeOrderCard onRefund={(date, time) => setRefundLogEntry({ date, time })} />
        <ul className="list-disc ml-6 text-md opacity-80 space-y-1 mt-2">
        <li>On the ticket view, the UI shows the order as refunded, which agents would use to inform the customer that the order was refunded</li>  
        <li>As a result, this misinformation led to excessive touchpoints between the agent, management, and the customer</li>  
        </ul>
      </div>
      {/* Back-end logs */}
      <div>
        <h3 className="text-xl font-semibold mb-1">What the back-end revealed (under the hood)</h3>
        <PaypalApiLogAccordion refundLogEntry={refundLogEntry || undefined} />
        <ul className="list-disc ml-6 text-md opacity-80 space-y-1 mt-2">
      <li>Our back-end system showed valuable information (API response log) that agents can use to validate a refund failure on their own, enabling them to process the refund by end-of-day, as well as eliminating the need for escalation to management and back-and-forth touches with the customer</li> 
      <li>From ticket open to ticket resolution, the process took &lt; 20 minutes</li> 
      </ul>
      </div>
    </div>
  );
}
