import "./about.css";

function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          We are passionate about delivering high-quality products that bring
          value and joy to our customers.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to provide premium products with a touch of
            authenticity. We believe in quality, sustainability, and timeless
            design that fits seamlessly into your lifestyle.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>🌱 Sustainable & eco-friendly materials</li>
            <li>🤝 Customer-first approach</li>
            <li>✨ Unique and modern designs</li>
            <li>🚀 Fast & reliable delivery</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            We aim to become a trusted brand known for authenticity, quality,
            and care for our customers. Every product is crafted with passion
            and attention to detail.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
