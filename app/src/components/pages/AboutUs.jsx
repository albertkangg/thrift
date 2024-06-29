import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen mx-auto">
      <img src={`${process.env.PUBLIC_URL}/images/hero.png`} alt="Hero" />
      <h1 className="hero-heading">
        Hebrews 13:16 - And do not forget to do good and to share with others, for with such sacrifices God is pleased.
      </h1>

      <div className="content-section">
        <div className="content-item">
          <h2>Our Story</h2>
          <p>
            Brady is the goat. The goat. The goat. The goat. The goat. The goat. The goat. The goat. The goat. The goat.
          </p>
        </div>

        <div className="content-item">
          <h2>Our History</h2>
          <p>
            Brady is the goat. The goat. The goat. The goat. The goat. The goat. The goat. The goat. The goat. The goat.
          </p>
        </div>

        <div className="content-item">
          <h2>What Makes Us Different</h2>
          <p>
            Brady is the goat. The goat. The goat. The goat. The goat. The goat. The goat. The goat. The goat. The goat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
