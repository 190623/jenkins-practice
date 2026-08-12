import React, { useState } from 'react';
import './Photography.css';

const Expenses = () => {
  const [photographers, setPhotographers] = useState([
    {
      name: 'John Doe',
      mediaName: 'Dream Capture Studio',
      place: 'Bangalore',
      phone: '123-456-7890',
      events: 50,
    },
    {
      name: 'Jane Smith',
      mediaName: 'Memories Forever',
      place: 'Mumbai',
      phone: '987-654-3210',
      events: 70,
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: '',
    mediaName: '',
    phone: '',
    place: '',
    events: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPhotographers([...photographers, { ...form }]);
    setForm({ name: '', mediaName: '', phone: '', place: '', events: '' });
    setShowForm(false);
    // Redirect to payment (we'll handle backend integration later)
    alert('Redirecting to payment of ₹500...');
  };

  return (
    <div className="photography">
      <h1>Photography Section</h1>
      <div className="photographers-list">
        {photographers.map((photographer, index) => (
          <div key={index} className="photographer-card">
            <h3>{photographer.name}</h3>
            <p><strong>Media:</strong> {photographer.mediaName}</p>
            <p><strong>Place:</strong> {photographer.place}</p>
            <p><strong>Phone:</strong> {photographer.phone}</p>
            <p><strong>Events Managed:</strong> {photographer.events}</p>
          </div>
        ))}
      </div>

      <button onClick={() => setShowForm(true)} className="register-button">
        Register as Photographer
      </button>

      {showForm && (
        <div className="registration-form">
          <h2>Photographer Registration</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Media Name"
              value={form.mediaName}
              onChange={(e) => setForm({ ...form, mediaName: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Place"
              value={form.place}
              onChange={(e) => setForm({ ...form, place: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Events Managed"
              value={form.events}
              onChange={(e) => setForm({ ...form, events: e.target.value })}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Expenses;
