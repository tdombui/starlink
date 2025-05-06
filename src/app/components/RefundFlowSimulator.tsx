import { useState } from 'react';

interface RefundEntry {
  orderId: number;
  amount: number;
  reason: string;
  email: string;
  merchantId: number;
  status: string;
  timestamp: string;
  processed?: boolean;
}

export default function RefundFlowSimulator() {
  const [submissions, setSubmissions] = useState<RefundEntry[]>([]);
  const [form, setForm] = useState({
    orderId: '' as string | number,
    amount: '' as string | number,
    reason: 'PayPal >180 days',
    email: 'johnnyappleseed@spacex.com',
    merchantId: '' as string | number
  });
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'amount' || name === 'orderId' || name === 'merchantId' ? Number(value) : value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    const newSubmission: RefundEntry = {
        orderId: Number(form.orderId),
        amount: Number(form.amount),
        reason: form.reason,
        email: form.email,
        merchantId: Number(form.merchantId),
        status: 'Submitted for Refund',
        timestamp
      };
    setSubmissions([...submissions, newSubmission]);
    setForm({
      orderId: '',
      amount: '',
      reason: 'PayPal >180 days',
      email: 'johnnyappleseed@spacex.com',
      merchantId: ''
    });
  };

  const processRefund = (index: number) => {
    const updated = [...submissions];
    updated[index].status = 'Refund Processed';
    updated[index].processed = true;
    setSubmissions(updated);
  };

  const financeRecords = submissions.filter((entry) => entry.processed);

  return (
    <div className="space-y-6">
      {/* Row Layout for Form and Instructions */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Module 1: Agent Input Form */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-xl shadow-md max-w-xs">
          <h3 className="text-xl font-semibold mb-2">Agent Refund Form</h3>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              name="orderId"
              type="number"
              placeholder="Order ID"
              value={form.orderId}
              onChange={handleChange}
              className="w-full p-2 bg-black border border-white/20 rounded"
              required
            />
            <input
              name="amount"
              type="number"
              placeholder="Amount (e.g. 622.00)"
              value={form.amount}
              onChange={handleChange}
              className="w-full p-2 bg-black border border-white/20 rounded"
              required
            />
            <input
              name="merchantId"
              type="number"
              placeholder="Merchant ID"
              value={form.merchantId}
              onChange={handleChange}
              className="w-full p-2 bg-black border border-white/20 rounded"
              required
            />
            <select
              name="reason"
              value={form.reason}
              onChange={handleChange}
              className="w-full p-2 bg-black border border-white/20 rounded"
            >
              <option>PayPal &gt; 180 days</option>
              <option>Bank transfer error</option>
              <option>Incorrect payout method</option>
              <option>Other</option>
            </select>
            <input
              name="email"
              placeholder="Customer Email"
              value={form.email}
              readOnly
              className="w-full p-2 bg-black border border-white/20 rounded cursor-not-allowed text-white/70"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
              Submit Refund
            </button>
          </form>
        </div>

        {/* Module: Instructions */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-xl shadow-md flex-1">
          <h3 className="text-2xl font-semibold mb-4">Instructions</h3>
          <ol className="list-decimal text-lg text-white/80 pl-5 space-y-1">
            <li className="mb-4">Agents fill out the refund form using the PayPal API response log.</li> 
            <li className="mb-4">Team Leads review the submissions in the dashboard and process refunds end-of-day.</li>
            <li className="mb-4">Management submits processed refunds (.csv) to Finance to recover from vendors every month.</li>

          </ol>
        </div>
      </div>

      {/* Module 2: Team Lead Action Table */}
      <div className="bg-white/5 border border-white/10 p-4 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">Team Lead Dashboard</h3>
        <div className="overflow-x-auto text-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/20">
              <th className="py-2 pr-4">Action</th>

                <th className="py-2 pr-4">Order ID</th>
                <th className="py-2 pr-4">Amount</th>
                <th className="py-2 pr-4">Reason</th>
                <th className="py-2 pr-4">Email</th>
                <th className="py-2 pr-4">Merchant ID</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((entry, i) => (
                <tr
                  key={i}
                  className={`border-b border-white/10 ${entry.processed ? 'bg-green-900/40' : ''}`}
                >                  <td className="py-2 pr-4">
                {!entry.processed && (
                  <button
                    onClick={() => processRefund(i)}
                    className="text-sm px-2 py-1 bg-green-600 hover:bg-green-700 rounded text-white"
                  >
                    Process Refund
                  </button>
                )}
              </td>
                  <td className="py-2 pr-4">{entry.orderId}</td>
                  <td className="py-2 pr-4">${entry.amount}</td>
                  <td className="py-2 pr-4">{entry.reason}</td>
                  <td className="py-2 pr-4">{entry.email}</td>
                  <td className="py-2 pr-4">{entry.merchantId}</td>
                  <td className="py-2 pr-4 text-yellow-400">{entry.status}</td>
                  <td className="py-2 text-white/70">{entry.timestamp}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Module 3: Finance Reconciliation View */}
      <div className="bg-white/5 border border-white/10 p-4 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">Finance Reconciliation Sheet (.csv)</h3>
        <div className="overflow-x-auto text-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-2 pr-4">Order ID</th>
                <th className="py-2 pr-4">Amount</th>
                <th className="py-2 pr-4">Email</th>
                <th className="py-2 pr-4">Merchant ID</th>
                <th className="py-2 pr-4">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {financeRecords.map((entry, i) => (
                <tr key={i} className="border-b border-white/10">
                  <td className="py-2 pr-4">{entry.orderId}</td>
                  <td className="py-2 pr-4">${entry.amount}</td>
                  <td className="py-2 pr-4">{entry.email}</td>
                  <td className="py-2 pr-4">{entry.merchantId}</td>
                  <td className="py-2 pr-4 text-white/70">{entry.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
