'use client';
import PaypalApiLogAccordion from '@/app/components/PayPalApiLog';

export default function Page() {
  const sampleLogEntry = {
    date: '09/04/2024',
    time: '13:55:07',
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white space-y-6">
      <h2 className="text-2xl font-semibold text-center">The info that our back-end revealed</h2>
      <PaypalApiLogAccordion refundLogEntry={sampleLogEntry} />
    </main>
  );
}
