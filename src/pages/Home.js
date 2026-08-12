import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to Expense Tracker</h1>
        <p>Your one-stop platform for tracking all your expenses</p>
      </header>

      <section className="services">
        <h2>Track Expenses</h2>
        <div className="service-list">
          <div className="service-card">
            <h3>Monthly Summary</h3>
            <p>You can analyze your Monthly expenses</p>
          </div>
          <div className="service-card">
            <h3>Category Break down</h3>
            <p>Explore in each category</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
