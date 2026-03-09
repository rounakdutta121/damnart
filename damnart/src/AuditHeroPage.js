import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const auditServices = [
  {
    title: 'Google & FB Ads Audit',
    description: 'Evaluate your campaigns for better ROI.',
    icon: '📊',
    features: ['Ad Performance', 'Keyword Targeting', 'Budget Allocation']
  },
  {
    title: 'Social Media Audit',
    description: 'Enhance engagement on LinkedIn & Meta.',
    icon: '📱',
    features: ['Content Quality', 'Audience Targeting', 'Engagement Rates']
  },
  {
    title: 'Website Audit',
    description: 'Improve performance and user experience.',
    icon: '🌐',
    features: ['Site Speed', 'Mobile Responsive', 'SEO Analysis']
  },
  {
    title: 'Content Audit',
    description: 'Optimize content for SEO and engagement.',
    icon: '✍️',
    features: ['Content Quality', 'SEO Optimization', 'Performance Metrics']
  }
];

const auditDetails = [
  {
    title: 'Google & FB Ads Performance Audit',
    description: 'Are your campaigns delivering the best ROI? Our Audit evaluates your Google & FB Ads to identify areas for improvement and maximize performance.',
    whatWeCheck: [
      'Ad copy and creative performance',
      'Keyword targeting and bidding strategies',
      'Campaign structure and budget allocation'
    ],
    whatYouGet: [
      'A detailed audit of your Google Ads campaigns',
      'Actionable suggestions to optimize your campaigns for better performance and ROI'
    ]
  },
  {
    title: 'Social Media Performance Audit',
    description: 'Social media platforms like Facebook, Instagram, and LinkedIn are vital for brand growth. Our Social Media Performance Audit evaluates your campaigns and content strategies.',
    whatWeCheck: [
      'Content quality and engagement rates',
      'Audience targeting and segmentation',
      'Posting frequency and consistency'
    ],
    whatYouGet: [
      'A thorough analysis of your social media efforts',
      'Suggestions for improving engagement, reach, and overall social media strategy'
    ]
  },
  {
    title: 'Website Audit',
    description: 'Your website is your first impression. Our Website Audit identifies performance issues, enhances user experience, boosts SEO, and improves conversion rates.',
    whatWeCheck: [
      'Site speed and mobile responsiveness',
      'On-page SEO (meta tags, keywords, headings)',
      'User experience (UX) and design'
    ],
    whatYouGet: [
      'A comprehensive audit of your website\'s performance',
      'Actionable recommendations to improve speed, SEO, and user experience'
    ]
  },
  {
    title: 'Content Audit',
    description: 'Content is the backbone of Digital Marketing. We evaluate your blogs, website copy, and social media posts to ensure they are optimized for SEO.',
    whatWeCheck: [
      'Content quality, readability, and relevance',
      'SEO optimization (keywords, structure, search intent)',
      'Engagement and performance metrics'
    ],
    whatYouGet: [
      'A thorough review of your existing content',
      'Suggestions for optimizing content for SEO and audience engagement'
    ]
  }
];

const whyChooseUs = [
  { title: 'Affordable Pricing', description: 'Get expert analysis at a budget-friendly price.', icon: '💰' },
  { title: 'Expert Analysis', description: 'Our team provides detailed review to enhance performance.', icon: '🔍' },
  { title: 'Comprehensive Report', description: 'Receive actionable audit report with clear recommendations.', icon: '📋' },
  { title: 'Practical Solutions', description: 'We offer solutions to improve your campaigns.', icon: '✅' },
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

function AuditHeroPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % auditServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="smm-page">
      <AnimatedBackground />
      <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <section className="smm-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1773032943/grok-video-b8abe594-3e95-457c-b1ff-7131bdd67972_eo4w7c.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <motion.div 
            className="smm-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <span>✦</span> Digital Marketing Audit Service
            </div>
            <h1 className="hero-title">
              <span className="line">Optimize Your Marketing</span>
              <span className="line highlight">Efforts for Just ₹999</span>
            </h1>
            <p className="hero-tagline" style={{ textAlign: 'center', color: '#fff', fontSize: '22px', maxWidth: '800px', margin: '0 auto 40px' }}>
              We identify areas for improvement and provide actionable insights to boost your marketing efforts
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">I Need Audit</Link>
              <Link to="/contact" className="btn-secondary">Book a Call</Link>
            </div>
            <p className="hero-motto">Strategize • Optimize • Grow</p>
          </motion.div>
        </div>
      </section>

      <section className="smm-process-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Why is an Audit Important?</h2>
            <p>Digital Marketing evolves quickly, making it crucial to evaluate your strategies. An Audit identifies gaps, inefficiencies, and opportunities for optimization, helping you make smarter decisions and achieve better results.</p>
          </motion.div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px 40px', borderRadius: '15px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '300px' }}>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>💰</span>
              <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '10px' }}>Save Money</h4>
              <p style={{ color: '#a0a0a0', fontSize: '14px' }}>Identify wasted ad spend and optimize your budget</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px 40px', borderRadius: '15px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '300px' }}>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>📈</span>
              <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '10px' }}>Boost ROI</h4>
              <p style={{ color: '#a0a0a0', fontSize: '14px' }}>Improve conversion rates and campaign performance</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px 40px', borderRadius: '15px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '300px' }}>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>🎯</span>
              <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '10px' }}>Better Targeting</h4>
              <p style={{ color: '#a0a0a0', fontSize: '14px' }}>Reach the right audience with optimized strategies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="smm-platforms-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>How Our Digital Marketing Audit Works</h2>
            <p>A simple 4-step process to transform your marketing</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', position: 'relative', padding: '30px 15px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span className="process-number" style={{ marginBottom: '15px' }}>1</span>
              <h3>Select Your Service</h3>
              <p>Choose from Google Ads, social media, website, or content audits.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ textAlign: 'center', position: 'relative', padding: '30px 15px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span className="process-number" style={{ marginBottom: '15px' }}>2</span>
              <h3>Provide Access</h3>
              <p>Share account or website details for analysis.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ textAlign: 'center', position: 'relative', padding: '30px 15px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span className="process-number" style={{ marginBottom: '15px' }}>3</span>
              <h3>Get Your Audit Report</h3>
              <p>Receive a detailed report with insights and recommendations.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{ textAlign: 'center', position: 'relative', padding: '30px 15px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span className="process-number" style={{ marginBottom: '15px' }}>4</span>
              <h3>Implement Recommendations</h3>
              <p>Use our suggestions to optimize and enhance your performance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="smm-platforms-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Digital Marketing Audit Services</h2>
            <p>Choose one of the following audits and get a detailed report with recommendations</p>
          </motion.div>
          <div className="smm-platforms-grid">
            {auditServices.map((service, index) => (
              <motion.div 
                key={service.title}
                className={`smm-platform-card ${activeService === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
              >
                <span className="smm-platform-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="smm-platform-features">
                  {service.features.slice(0, 2).map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-details-section">
        <div className="container">
          {auditDetails.map((detail, index) => (
            <motion.div 
              key={detail.title}
              className="smm-detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="smm-detail-header">
                <span className="smm-detail-icon">{auditServices[index].icon}</span>
                <h3>{detail.title}</h3>
              </div>
              <p className="smm-detail-desc">{detail.description}</p>
              <h4 style={{ marginBottom: '10px', color: '#fff' }}>What We Check:</h4>
              <ul className="smm-detail-list">
                {detail.whatWeCheck.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <h4 style={{ marginBottom: '10px', marginTop: '20px', color: '#fff' }}>What You Get:</h4>
              <ul className="smm-detail-list">
                {detail.whatYouGet.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">I Need Audit</Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="smm-platforms-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Get All The Services Audited</h2>
          </motion.div>
          <div className="smm-platforms-grid">
            <motion.div 
              className="smm-platform-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="smm-platform-icon">📊</span>
              <h3>Google Ads Performance</h3>
              <p>Identify opportunities to improve keyword targeting, ad copy, bidding strategies, and ROI tracking.</p>
            </motion.div>
            <motion.div 
              className="smm-platform-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="smm-platform-icon">📱</span>
              <h3>Social Media Performance</h3>
              <p>Evaluate campaign effectiveness, audience targeting, and engagement on LinkedIn, Facebook, and Instagram.</p>
            </motion.div>
            <motion.div 
              className="smm-platform-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="smm-platform-icon">🌐</span>
              <h3>Website Performance</h3>
              <p>Analyze speed, mobile-friendliness, SEO, and user experience to ensure your site performs at its best.</p>
            </motion.div>
            <motion.div 
              className="smm-platform-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="smm-platform-icon">✍️</span>
              <h3>Content Writing Evaluation</h3>
              <p>Examine blogs, web copy, and social posts for SEO alignment, audience relevance, and engagement.</p>
            </motion.div>
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
            <h2>Why Choose DamnArt's Digital Marketing Audit Service?</h2>
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
              <h2>Ready to Optimize Your Digital Marketing?</h2>
              <p>For just ₹999, choose your audit service and let us help you identify opportunities for improvement.</p>
              <Link to="/contact" className="btn-primary">I NEED AUDIT</Link>
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

export default AuditHeroPage;
