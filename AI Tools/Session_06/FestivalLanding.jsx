import React from 'react';
import './FestivalLanding.css';

const FestivalLanding = () => {
  return (
    <div className="festival-container">
      <header className="navbar">
        <div className="logo">PulseFest</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#lineup">Lineup</a></li>
            <li><a href="#tickets">Tickets</a></li>
          </ul>
        </nav>
      </header>

      <main className="hero-section">
        <div className="hero-content">
          <h1>Feel the Pulse. Live the Night.</h1>
          <p>Join thousands of fans for the ultimate music festival experience. Secure your tickets now and get ready for a night of unforgettable energy, world-class DJs, and spectacular lights!</p>
          <button className="cta-button">Buy Tickets Now</button>
        </div>
        <div className="hero-image-container">
          {/* Note: Using Unsplash as requested previously to avoid repo bloat */}
          <img 
            src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80" 
            alt="Crowd at night music festival with stage lights" 
            className="hero-image"
          />
        </div>
      </main>
    </div>
  );
};

export default FestivalLanding;
