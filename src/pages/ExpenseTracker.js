import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Other'];

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = () => {
    if (!amount || isNaN(amount)) return;
    const newExpense = {
      id: Date.now(),
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().split('T')[0],
    };
    setExpenses([newExpense, ...expenses]);
    setAmount('');
  };

  const analyticsData = categories.map(cat => ({
    category: cat,
    amount: expenses
      .filter(e => e.category === cat)
      .reduce((sum, e) => sum + e.amount, 0),
  }));

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Expense Tracker</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button onClick={addExpense}>Add</button>
      </div>

      <h2>Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={analyticsData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h2 style={{ marginTop: '20px' }}>Expenses</h2>
      <ul>
        {expenses.map((exp) => (
          <li key={exp.id}>
            {exp.date} - {exp.category} - ${exp.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
