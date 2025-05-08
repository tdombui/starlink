import { ArrowRight } from 'lucide-react';

export default function RefundFlowSnapshot() {
  return (
    <div className="flex items-center justify-center gap-1 w-full overflow-x-auto p-4 bg-black text-white text-xs" style={{ height: '260px' }}>

      {/* Module 1: Refund Form Snapshot */}
      <div className="bg-white/10 border border-white/20 rounded-lg p-3 min-w-[181px] max-w-[181px]"> 
        <h4 className="font-bold mb-2 text-white/80">Refund Form</h4>
        <form className="space-y-1">
          <div>
            <label className="block text-white/60">Order ID</label>
            <input
              type="text"
              value="845332"
              readOnly
              className="w-full bg-black text-white border border-white/20 rounded px-1"
            />
          </div>
          <div>
            <label className="block text-white/60">Amount</label>
            <input
              type="text"
              value="$279.71"
              readOnly
              className="w-full bg-black text-white border border-white/20 rounded px-1"
            />
          </div>
          <div>
            <label className="block text-white/60">Reason</label>
            <input
              type="text"
              value="PayPal >180 days"
              readOnly
              className="w-full bg-black text-white border border-white/20 rounded px-1"
            />
          </div>
          <div>
            <label className="block text-white/60">Merchant ID</label>
            <input
              type="text"
              value="877"
              readOnly
              className="w-full bg-black text-white border border-white/20 rounded px-1"
            />
                  </div>
                  <button type="button" className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs">
            Submit Refund
          </button>
        </form>
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
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>524311</td>
              <td>$622.00</td>
              <td className="text-yellow-300">⌛</td>
            </tr>
            <tr>
              <td>524312</td>
              <td>$719.50</td>
              <td className="text-yellow-300">⌛</td>
            </tr>
            <tr>
              <td>240698</td>
              <td>$139.43</td>
              <td className="text-green-400">✅</td>
            </tr>
            <tr>
              <td>115672</td>
              <td>$499.99</td>
              <td className="text-green-400">✅</td>
            </tr>
            <tr>
              <td>428719</td>
              <td>$279.71</td>
              <td className="text-green-400">✅</td>
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
              <th>order_id</th>
              <th>amount</th>
              <th>merchant_id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>524313</td>
              <td>$499.99</td>
              <td>223</td>
            </tr>
            <tr>
              <td>524314</td>
              <td>$719.50</td>
              <td>984</td>
            </tr>
            <tr>
              <td>240698</td>
              <td>$139.43</td>
              <td>108</td>
            </tr>
            <tr>
              <td>115672</td>
              <td>$499.99</td>
              <td>354</td>
            </tr>
            <tr>
              <td>428719</td>
              <td>$279.71</td>
              <td>227</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
