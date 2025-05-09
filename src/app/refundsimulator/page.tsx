'use client';
import BackOfficeOrderCard from '@/app/components/BackOfficeOrderCard';

export default function Page() {
  const handleRefund = (date: string, time: string) => {
    console.log(`Refund processed on ${date} at ${time}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white space-y-6">
      <h2 className="text-2xl font-semibold text-center">What the agents see on the tickets</h2>
      <BackOfficeOrderCard onRefund={handleRefund} />
    </main>
  );
}
