import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const services = [
  { title: 'PPC', description: 'Drive targeted traffic to your website and increase conversions with PPC ads.' },
  { title: 'SMM', description: 'Grow your brand awareness and engagement on social media platforms.' },
  { title: 'Web Development', description: 'Craft a user-friendly, high-performing website to achieve your business goals.' },
  { title: 'Content Writing', description: 'Create compelling content that engages your audience and boosts conversions.' },
  { title: 'Graphic Designing', description: 'Design eye-catching visuals that effectively communicate your brand message.' },
  { title: 'SEO', description: 'Improve your search ranking and attract qualified leads organically.' },
  { title: 'Training Courses', description: "We offers a wide range of training courses in Digital Marketing and AI Tools" },
  { title: 'Digital Marketing Audit', description: 'Maximize ROI with a Data-Driven Digital Marketing Performance Audit' },
  { title: 'Data Mining', description: 'Extract Actionable Insights with Advanced Data Mining Solutions!' },
  { title: 'Lead Generation', description: 'Generate High-Quality Leads & Boost Conversions Effortlessly' },
  { title: 'Pay Per Valid', description: 'Maximize ROI with a Data-Driven Digital Marketing Performance Audit' },
  { title: 'Influencer Marketing', description: 'Extract Actionable Insights with Advanced Data Mining Solutions' },
];

const offices = [
  {
    country: 'India',
    locations: [
      'SCO No. 09-Ground Floor, Aero View Plaza, Airport Road, Dyalpura, Punjab - 140603',
      '310 - Sampada, Navarangpura, Ahmedabad, Gujarat - 380009'
    ],
    phone: '+91-90565-44487'
  },
  {
    country: 'UK',
    locations: ['20-22 Wenlock Road, Hoxton, London N1 7GU'],
    phone: null
  },
  {
    country: 'USA',
    locations: ['616, Corporate Way Suite 2, 6015 Valley Cottage NY 10989'],
    phone: null
  },
  {
    country: 'Canada',
    locations: ['8449,116 A Street, Delta - V4C7N7, Greater Vancouver'],
    phone: '+1 (778) 798-9624'
  },
  {
    country: 'Dubai',
    locations: ['Suite No 2902 and 2903, The Prism Tower, Business Bay, Dubai, UAE'],
    phone: null
  }
];

function AnimatedBackground() {
  return (
    <div className="animated-bg">
      <div className="gradient-orb"></div>
      <div className="gradient-orb"></div>
      <div className="gradient-orb"></div>
    </div>
  );
}

function Navbar({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="https://res.cloudinary.com/dadofd9d2/image/upload/v1772011438/Damn-Art-Logo-Final-Only-Logo-r6dasn0nfh4nzs4a4fd97txlvs2437uw1zu2i0825k_qe24gm.png" alt="DamnArt" className="logo-img" />
          <span className="logo-text">Damnart</span>
        </Link>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/#blogs">Blogs</Link>
          <Link to="/contact" className="active">Contact</Link>
          <Link to="/#contact" className="btn-primary">Work With Us!</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="contact-page">
      <AnimatedBackground />
      <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <section className="contact-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1772427822/grok-video-7812e8ee-9c9a-4ab2-a72d-85732680452b_hm45hn.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <span>✦</span> Contact Us
            </div>
            <h1 className="hero-title">
              <span className="line">Let's Talk</span>
              <span className="line">Digital Marketing</span>
            </h1>
            <p className="hero-tagline">
              Ready to take your business to the next level? Connect with our experts and craft your success plan.
            </p>
            <div className="hero-cta">
              <a href="https://wa.me/919056544487" className="btn-primary">Connect on WhatsApp</a>
              <a href="tel:+919056544487" className="btn-secondary">Call Us Now</a>
            </div>
            <p className="hero-motto">Strategize • Optimize • Grow</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Why leave it to Chance, when you can leave it to Experts?</h2>
            <p>Book Your Call Now</p>
          </motion.div>

          <div className="contact-grid">
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-info-card">
                <h3>Ready to talk?</h3>
                <p>Maximize your business growth with DamnArt's digital marketing expertise. Connect with our specialists to craft your success plan.</p>
                
                <div className="contact-cta-buttons">
                  <a href="https://wa.me/919056544487" className="contact-cta-btn whatsapp">
                    <span>💬</span> Connect on WhatsApp
                  </a>
                  <a href="tel:+919056544487" className="contact-cta-btn phone">
                    <span>📞</span> Call us +91-90565-44487
                  </a>
                </div>
              </div>

              <div className="contact-form-section">
                <h3>Let’s Talk Digital Marketing</h3>
                <p>Share Your Details and We'll Be in Touch Soon</p>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                  </div>
                  <div className="form-group">
                    <label>Phone No.</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />
                  </div>
                  <div className="form-group">
                    <label>What service are you interested in?</label>
                    <select name="service" value={formData.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project" rows="4"></textarea>
                  </div>
                  <button type="submit" className="btn-primary">Submit</button>
                </form>
              </div>
            </motion.div>

            <motion.div 
              className="calendly-section"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Book a Discovery Session</h3>
              <p>Schedule a free consultation with our experts</p>
              <div className="calendly-inline-widget" data-url="https://calendly.com/damnart-contact/discovery-session-for-damnart" style={{minWidth:'320px',height:'700px'}}></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="contact-offices-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Global Offices</h2>
            <p>We have presence across multiple countries to serve you better</p>
          </motion.div>
          <div className="offices-grid">
            {offices.map((office, index) => (
              <motion.div 
                key={office.country}
                className="office-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{office.country}</h3>
                {office.locations.map((location, i) => (
                  <p key={i}>{location}</p>
                ))}
                {office.phone && <p className="office-phone">{office.phone}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>DamnArt</h3>
              <p>DIGITAL ADVERTISEMENT MARKETING NETWORK</p>
              <p>Connect with us on other Platforms</p>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Youtube</a>
                <a href="#">Linkedin</a>
                <a href="#">Pinterest</a>
              </div>
              <p className="footer-email">Email: info@damnart.com</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>India</h4>
              <p>SCO No. 09-Ground Floor, Aero View Plaza, Airport Road, Dyalpura, Punjab - 140603</p>
              <p>310 - Sampada, Navarangpura, Ahmedabad, Gujarat - 380009</p>
              <p className="footer-phone">+91-90565-44487</p>
            </div>
            <div className="footer-col">
              <h4>Global Offices</h4>
              <p><strong>UK:</strong> 20-22 Wenlock Road, London N1 7GU</p>
              <p><strong>USA:</strong> 616 Corporate Way, Valley Cottage NY 10989</p>
              <p><strong>Canada:</strong> 8449,116 A Street, Delta V4C7N7</p>
              <p><strong>Dubai:</strong> The Prism Tower, Business Bay</p>
              <p className="footer-phone">+1 (778) 798-9624</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 DamnArt. All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
