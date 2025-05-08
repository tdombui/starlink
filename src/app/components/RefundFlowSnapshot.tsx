import { ArrowRight } from 'lucide-react';

export default function RefundFlowSnapshot() {
  return (
    <div className="flex items-center justify-center gap-4 w-full overflow-x-auto p-4 bg-black text-white text-xs" style={{ height: '160px' }}>

      {/* Module 1: Refund Form Snapshot */}
      <div className="bg-white/10 border border-white/20 rounded-lg p-3 min-w-[225px] max-w-[225px]">
        <h4 className="font-bold mb-2 text-white/80">Refund Form</h4>
        <div className="space-y-1">
          <div><span className="block text-white/60">Order ID</span><span className="font-medium">524311</span></div>
          <div><span className="block text-white/60">Amount</span><span className="font-medium">$622.00</span></div>
          <div><span className="block text-white/60">Reason</span><span className="font-medium">PayPal &gt;180 days</span></div>
          <div><span className="block text-white/60">Merchant ID</span><span className="font-medium">123456</span></div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center">
        <ArrowRight className="text-white" />
      </div>

      {/* Module 2: TL Dashboard Snapshot */}
      <div className="bg-white/10 border border-white/20 rounded-lg p-3 min-w-[225px] max-w-[225px]">
        <h4 className="font-bold mb-2 text-white/80">Team Lead Dashboard</h4>
        <table className="w-full text-left">
          <thead>
            <tr className="text-white/60">
              <th>Order</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>524311</td>
              <td className="text-yellow-300">Submitted</td>
            </tr>
            <tr>
              <td>524312</td>
              <td className="text-yellow-300">Submitted</td>
            </tr>
            <tr>
              <td>524313</td>
              <td className="text-green-400">Processed</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Arrow */}
      <div className="flex items-center">
        <ArrowRight className="text-white" />
      </div>

      {/* Module 3: Finance Snapshot */}
      <div className="bg-white/10 border border-white/20 rounded-lg p-3 min-w-[225px] max-w-[225px]">
        <h4 className="font-bold mb-2 text-white/80">Finance Sheet</h4>
        <table className="w-full text-left">
          <thead>
            <tr className="text-white/60">
              <th>Order</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>524313</td>
              <td>$622.00</td>
            </tr>
            <tr>
              <td>524314</td>
              <td>$719.50</td>
            </tr>
            <tr>
              <td>524315</td>
              <td>$499.99</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
