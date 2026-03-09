import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const services = [
  { 
    title: 'PPC', 
    description: 'Drive targeted traffic to your website and increase conversions with PPC ads.',
    icon: '💰',
    color: '#ff3366',
    link: '/ppc'
  },
  { 
    title: 'SMM', 
    description: 'Grow your brand awareness and engagement on social media platforms.',
    icon: '📱',
    color: '#00d4ff',
    link: '/smm'
  },
  { 
    title: 'Web Development', 
    description: 'Craft a user-friendly, high-performing website to achieve your business goals.',
    icon: '🌐',
    color: '#8b5cf6',
    link: '/webdev'
  },
  { 
    title: 'Content Writing', 
    description: 'Create compelling content that engages your audience and boosts conversions.',
    icon: '✍️',
    color: '#f59e0b',
    link: '/contentwriting'
  },
  { 
    title: 'Graphic Designing', 
    description: 'Design eye-catching visuals that effectively communicate your brand message.',
    icon: '🎨',
    color: '#ec4899',
    link: '/graphicdesign'
  },
  { 
    title: 'SEO', 
    description: 'Improve your search ranking and attract qualified leads organically.',
    icon: '🔍',
    color: '#10b981',
    link: '/seo'
  },
  { 
    title: 'Training Courses', 
    description: "We offers a wide range of training courses in Digital Marketing and AI Tools",
    icon: '📚',
    color: '#6366f1',
    link: '/#contact'
  },
  { 
    title: 'Digital Marketing Audit', 
    description: 'Maximize ROI with a Data-Driven Digital Marketing Performance Audit',
    icon: '📊',
    color: '#14b8a6',
    link: '/audit'
  },
  { 
    title: 'Data Mining', 
    description: 'Extract Actionable Insights with Advanced Data Mining Solutions!',
    icon: '⛏️',
    color: '#f97316',
    link: '/datamining'
  },
  { 
    title: 'Lead Generation', 
    description: 'Generate High-Quality Leads & Boost Conversions Effortlessly',
    icon: '🎯',
    color: '#ef4444',
    link: '/leadgeneration'
  },
  { 
    title: 'Pay Per Valid', 
    description: 'Only Pay for What Matters – Real, Valid Leads!',
    icon: '✅',
    color: '#22c55e',
    link: '/paypervalid'
  },
  { 
    title: 'Influencer Marketing', 
    description: 'Extract Actionable Insights with Advanced Data Mining Solutions',
    icon: '🌟',
    color: '#eab308',
    link: '/#contact'
  },
];

const whyChooseUs = [
  { title: 'Expert Team', description: 'Certified professionals with years of experience in digital marketing.', icon: '🏆' },
  { title: 'Data-Driven', description: 'Every decision backed by analytics and real-time data insights.', icon: '📈' },
  { title: 'Custom Strategies', description: 'Tailored solutions that align with your unique business goals.', icon: '🎯' },
  { title: 'Proven Results', description: '500+ successful projects with measurable ROI for clients.', icon: '⭐' },
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Global Partners' },
  { number: '24/7', label: 'Support Available' },
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
          <Link to="/services" className="active">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/#blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
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

function ServicesPage() {
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

  return (
    <div className="services-page">
      <AnimatedBackground />
      <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <section className="services-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1772086250/grok-video-a1b193e4-f078-451d-ab44-90803bd60335_m8lt1p.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <motion.div 
            className="services-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <span>✦</span> Professional Services
            </div>
            <h1 className="hero-title">
              <span className="line">What We're</span>
              <span className="line">Great <span className="highlight">At</span></span>
            </h1>
            <p className="hero-tagline">
              Comprehensive digital solutions tailored to your business needs. 
              Partner with experts who deliver measurable results.
            </p>
            <div className="hero-cta">
              <Link to="/#contact" className="btn-primary">Get Started</Link>
              <Link to="/" className="btn-secondary">Back to Home</Link>
            </div>
            <p className="hero-motto">Strategize • Optimize • Grow</p>
          </motion.div>
        </div>
      </section>

      <section className="services-stats services-section-bg">
        <div className="section-bg-orb section-bg-orb-1"></div>
        <div className="section-bg-orb section-bg-orb-2"></div>
        <div className="section-bg-orb section-bg-orb-3"></div>
        <div className="container">
          <div className="services-stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="services-stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="services-stat-number">{stat.number}</span>
                <span className="services-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section services-section-bg">
        <div className="section-bg-orb section-bg-orb-1"></div>
        <div className="section-bg-orb section-bg-orb-2"></div>
        <div className="section-bg-orb section-bg-orb-3"></div>
        <div className="section-bg-orb section-bg-orb-4"></div>
        <div className="section-bg-orb section-bg-orb-5"></div>
        <div className="section-bg-orb section-bg-orb-6"></div>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Services</h2>
            <p>End-to-end digital marketing solutions for your business growth</p>
          </motion.div>
          <div className="services-grid-full">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="service-card-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-card-accent" style={{ background: service.color }}></div>
                <div className="service-card-icon" style={{ background: `${service.color}20` }}>
                  <span style={{ fontSize: '36px' }}>{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-card-link" style={{ color: service.color }}>
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-why-choose services-section-bg">
        <div className="section-bg-orb section-bg-orb-1"></div>
        <div className="section-bg-orb section-bg-orb-2"></div>
        <div className="section-bg-orb section-bg-orb-3"></div>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose DamnArt?</h2>
            <p>We don't just provide services, we build partnerships</p>
          </motion.div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={item.title}
                className="why-choose-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="why-choose-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="services-contact services-section-bg">
        <div className="section-bg-orb section-bg-orb-1"></div>
        <div className="section-bg-orb section-bg-orb-2"></div>
        <div className="section-bg-orb section-bg-orb-3"></div>
        <div className="container">
          <div className="services-contact-grid">
            <motion.div 
              className="services-contact-info"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Discover What We Can Achieve Together</h2>
              <p>Share Your Details and We'll Do the Rest!</p>
              <p className="services-contact-sub">Let's have a conversation. We'd love to provide some honest guidance.</p>
              <Link to="/#contact" className="btn-primary">FREE CONSULTATION CALL</Link>
            </motion.div>
            <motion.div 
              className="services-contact-form"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={(e) => e.preventDefault()}>
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
            </motion.div>
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

export default ServicesPage;
