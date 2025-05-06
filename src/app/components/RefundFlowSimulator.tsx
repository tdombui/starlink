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
    orderId: '',
    amount: '',
    reason: 'PayPal >180 days',
    email: 'johnnyappleseed@spacex.com',
    merchantId: ''
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
      ...form,
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
          <h3 className="text-xl font-semibold mb-2">Refund Submission Form</h3>
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
              <option>PayPal >180 days</option>
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
          <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
          <ul className="list-disc text-sm text-white/80 pl-5 space-y-1">
            <li>Agents fill out the refund form for failed transactions (e.g. PayPal >180 days).</li>
            <li>Submissions appear in the Team Lead dashboard.</li>
            <li>Team Leads review and click "Process Refund" after validation.</li>
            <li>Processed refunds populate a Finance-ready spreadsheet view for vendor reconciliation.</li>
          </ul>
        </div>
      </div>

      {/* Module 2: Team Lead Action Table */}
      <div className="bg-white/5 border border-white/10 p-4 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">Team Lead Dashboard</h3>
        <div className="overflow-x-auto text-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-2 pr-4">Order ID</th>
                <th className="py-2 pr-4">Amount</th>
                <th className="py-2 pr-4">Reason</th>
                <th className="py-2 pr-4">Email</th>
                <th className="py-2 pr-4">Merchant ID</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2 pr-4">Timestamp</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((entry, i) => (
                <tr
                  key={i}
                  className={`border-b border-white/10 ${entry.processed ? 'bg-green-900/40' : ''}`}
                >
                  <td className="py-2 pr-4">{entry.orderId}</td>
                  <td className="py-2 pr-4">${entry.amount}</td>
                  <td className="py-2 pr-4">{entry.reason}</td>
                  <td className="py-2 pr-4">{entry.email}</td>
                  <td className="py-2 pr-4">{entry.merchantId}</td>
                  <td className="py-2 pr-4 text-yellow-400">{entry.status}</td>
                  <td className="py-2 pr-4 text-white/70">{entry.timestamp}</td>
                  <td className="py-2">
                    {!entry.processed && (
                      <button
                        onClick={() => processRefund(i)}
                        className="text-sm px-2 py-1 bg-green-600 hover:bg-green-700 rounded text-white"
                      >
                        Process Refund
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Module 3: Finance Reconciliation View */}
      <div className="bg-white/5 border border-white/10 p-4 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">Finance Reconciliation Sheet</h3>
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
