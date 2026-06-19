// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaMobileAlt, FaLinkedin, FaGithub, FaInstagram, FaCheck } from 'react-icons/fa';
import './App.css'; // Importing standard CSS

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// --- COMPONENTS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          Grow<span className="text-gold">Stack</span>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
          Book Consultation
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="hero-glow"></div>
    
    <div className="container">
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="hero-content mx-auto">
        <motion.h1 variants={fadeUp} className="hero-title">
          Transforming Ideas Into <br />
          <span className="gradient-text">Scalable Digital Solutions</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="hero-desc">
          We build modern web applications, cloud solutions, and digital products that help businesses grow faster.
        </motion.p>
        <motion.div variants={fadeUp} className="hero-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-glass glass-panel">View Services</button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { icon: <FaCode className="service-icon" />, title: "Web Development", desc: "Custom websites, SaaS platforms, dashboards, and enterprise applications built with modern technologies." },
    { icon: <FaCloud className="service-icon" />, title: "Cloud Solutions", desc: "Scalable cloud architecture, deployment automation, and infrastructure management." },
    { icon: <FaMobileAlt className="service-icon" />, title: "Mobile Applications", desc: "High-performance Android and iOS applications designed for growth and engagement." }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">End-to-end technology solutions for startups and enterprises.</p>
        </div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
          className="services-grid"
        >
          {services.map((srv, index) => (
            <motion.div key={index} variants={fadeUp} className="glass-panel service-card">
              {srv.icon}
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const features = ["Custom Website", "Responsive Design", "Admin Dashboard", "Cloud Deployment", "SEO Optimization", "1 Month Support", "Performance Optimization"];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container pricing-wrapper">
        <div className="text-center">
          <h2 className="section-title">Simple Pricing</h2>
          <p className="section-subtitle">One transparent package for growing businesses.</p>
        </div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="glass-panel pricing-card"
        >
          <div className="pricing-accent-line"></div>
          <h3 className="pricing-name">Growth Package</h3>
          <div className="pricing-price">₹29,999</div>
          <ul className="pricing-features">
            {features.map((feature, i) => (
              <li key={i}>
                <FaCheck className="feature-icon" /> {feature}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary btn-pricing">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container contact-form-wrapper">
      <div className="text-center">
        <h2 className="section-title">Let's Build Something Great</h2>
        <p className="section-subtitle">Tell us about your project and we'll get back to you.</p>
      </div>
      <motion.form 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="glass-panel contact-form"
      >
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" className="form-control" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="john@company.com" />
          </div>
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" className="form-control" placeholder="+91 98765 43210" />
        </div>
        <div className="form-group">
          <label>Project Requirement</label>
          <textarea rows="4" className="form-control" placeholder="Tell us about your goals..."></textarea>
        </div>
        <button type="button" className="btn btn-submit">
          Send Inquiry
        </button>
      </motion.form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div>
          <div className="logo">
            Grow<span className="text-gold">Stack</span>
          </div>
          <p className="footer-desc">Building innovative digital experiences for modern businesses.</p>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Grow Stack. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}