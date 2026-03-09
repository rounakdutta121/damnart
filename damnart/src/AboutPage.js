import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const whyChooseUs = [
  { title: 'Expert Team', description: 'Certified professionals with years of experience in digital marketing, specialized in PPC, SMM, SEO, and content creation.', icon: '🏆' },
  { title: 'Data-Driven', description: 'Every decision backed by analytics and real-time data insights to maximize your ROI and business growth.', icon: '📈' },
  { title: 'Custom Strategies', description: 'Tailored solutions that align with your unique business goals, target audience, and brand identity.', icon: '🎯' },
  { title: 'Proven Results', description: '500+ successful projects with measurable ROI. We deliver results that speak for themselves.', icon: '⭐' },
];

const whoWeArePoints = [
  { title: '15+ Years Experience', description: 'Over 15 years of combined expertise in Pay Per Click, Social Media Marketing, SEO, and Content Creation.', icon: '⏱️' },
  { title: 'Expert Team', description: 'A team of passionate and certified professionals dedicated to your business growth and success.', icon: '👥' },
  { title: 'Client-Focused', description: 'Committed to delivering exceptional results through innovative strategies and transparent communication.', icon: '💎' },
  { title: 'Comprehensive Services', description: 'End-to-end digital marketing solutions from strategy development to execution and analytics.', icon: '🔧' },
  { title: 'Proven Track Record', description: 'Successfully delivered 500+ projects with measurable ROI and lasting client relationships.', icon: '🎯' },
  { title: 'Innovative Approach', description: 'Cutting-edge strategies that adapt to the rapidly evolving digital landscape.', icon: '💡' },
];

const visionPoints = [
  { title: 'Industry Leader', description: 'To be the leading digital marketing agency recognized worldwide for our expertise, creativity, and exceptional client service.', icon: '🥇' },
  { title: 'Innovation', description: 'Continuously set new standards in the digital marketing industry with cutting-edge strategies and technologies.', icon: '🚀' },
  { title: 'Excellence', description: 'Deliver exceptional client service and innovative solutions that drive measurable business growth.', icon: '✨' },
  { title: 'Global Impact', description: 'Empower businesses worldwide to achieve their digital marketing goals and reach new heights.', icon: '🌍' },
  { title: 'Sustainability', description: 'Promote sustainable digital growth strategies that provide long-term value and results.', icon: '🌱' },
  { title: 'Future-Ready', description: 'Stay ahead of industry trends to ensure our clients always get the best solutions.', icon: '🔮' },
];

const missionPoints = [
  { title: 'Empower Growth', description: 'Address simple to complex digital marketing issues including inconsistent lead generation, low ROAS, and rapidly evolving market trends.', icon: '📈' },
  { title: 'Innovate', description: 'Deliver innovative solutions through data-driven strategies and creative advertisement campaigns tailored to enhance customer relations.', icon: '💡' },
  { title: 'Measure', description: 'Focus on measurable results that help clients overcome challenges and reach their business objectives effectively.', icon: '📊' },
  { title: 'Partner', description: 'Build lasting relationships with clients based on Analytics & Reporting, Trust, Transparency, and Mutual Success.', icon: '🤝' },
];

const stats = [
  { number: '500+', label: 'Projects Completed', sub: 'Successfully Delivered' },
  { number: '98%', label: 'Client Satisfaction', sub: 'Happy Customers' },
  { number: '50+', label: 'Global Partners', sub: 'Worldwide' },
  { number: '15+', label: 'Years Experience', sub: 'Industry Experts' },
];

const expertiseAreas = [
  { name: 'Pay Per Click', icon: '💰', description: 'Google Ads, Facebook Ads, and more' },
  { name: 'Social Media', icon: '📱', description: 'Organic & Paid strategies' },
  { name: 'SEO', icon: '🔍', description: 'Rank higher, attract more traffic' },
  { name: 'Content', icon: '✍️', description: 'Compelling storytelling' },
  { name: 'Graphics', icon: '🎨', description: 'Visual brand identity' },
  { name: 'Analytics', icon: '📊', description: 'Data-driven decisions' },
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
          <Link to="/about" className="active">About</Link>
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

function AboutPage() {
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
    <div className="about-page">
      <AnimatedBackground />
      <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <section className="about-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1772090766/grok-video-5e165ea8-7dba-46ea-8229-820090e8900b_ofdtqw.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <span>✦</span> About Us
            </div>
            <h1 className="hero-title">
              <span className="line">Who</span>
              <span className="line">We <span className="highlight">Are</span></span>
            </h1>
            <p className="hero-tagline">
              We are a premier digital marketing agency dedicated to helping businesses grow and thrive in the digital landscape.
            </p>
            <div className="hero-cta">
              <Link to="/services" className="btn-primary">Our Services</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
            <p className="hero-motto">Strategize • Optimize • Grow</p>
          </motion.div>
        </div>
      </section>

      <section className="services-stats">
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
                <span className="services-stat-sub">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section services-section-bg">
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
            <h2>Who We Are</h2>
            <p>Meet the team behind your digital success</p>
          </motion.div>
          <div className="about-cards-grid">
            {whoWeArePoints.map((point, index) => (
              <motion.div 
                key={point.title}
                className="about-feature-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="about-feature-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>We are a premier digital marketing agency dedicated to helping businesses grow and thrive in the digital landscape. We are a team of passionate and experienced professionals in Pay Per Click, Social Media Management, Graphic Designing, Search Engine Optimization, and Content Creation.</p>
            <Link to="/#contact" className="btn-primary about-cta">
              <span>📥</span> Download Brochure
            </Link>
          </motion.div>
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
            <h2>Our Expertise</h2>
            <p>Comprehensive digital marketing solutions under one roof</p>
          </motion.div>
          <div className="about-expertise-grid">
            {expertiseAreas.map((area, index) => (
              <motion.div 
                key={area.name}
                className="about-expertise-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="about-expertise-icon">{area.icon}</span>
                <h3>{area.name}</h3>
                <p>{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section services-section-bg">
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
            <h2>Our Vision</h2>
            <p>Where we see ourselves in the future</p>
          </motion.div>
          <div className="about-cards-grid">
            {visionPoints.map((point, index) => (
              <motion.div 
                key={point.title}
                className="about-feature-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="about-feature-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section services-section-bg">
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
            <h2>Our Mission</h2>
            <p>What drives us every day</p>
          </motion.div>
          <div className="about-mission-grid">
            {missionPoints.map((point, index) => (
              <motion.div 
                key={point.title}
                className="about-mission-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="about-mission-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="about-mission-content">
                  <div className="about-mission-icon">{point.icon}</div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-why-choose services-section-bg">
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

      <section className="services-contact services-section-bg">
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
                    <option value="PPC">PPC</option>
                    <option value="SMM">SMM</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="SEO">SEO</option>
                    <option value="Training Courses">Training Courses</option>
                    <option value="Digital Marketing Audit">Digital Marketing Audit</option>
                    <option value="Data Mining">Data Mining</option>
                    <option value="Lead Generation">Lead Generation</option>
                    <option value="Pay Per Valid">Pay Per Valid</option>
                    <option value="Influencer Marketing">Influencer Marketing</option>
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

export default AboutPage;
