import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const dataMiningServices = [
  {
    title: 'Business Data Mining',
    description: 'Extract valuable insights for informed business decisions.',
    icon: '📊',
    features: ['Market Analysis', 'Competitor Analysis', 'Trend Prediction']
  },
  {
    title: 'Financial Data Mining',
    description: 'Make smarter financial decisions with advanced analytics.',
    icon: '💰',
    features: ['Fraud Detection', 'Risk Analysis', 'Stock Prediction']
  },
  {
    title: 'Healthcare Data Mining',
    description: 'Transform healthcare operations with data-driven insights.',
    icon: '🏥',
    features: ['Patient Analysis', 'Medical Research', 'Predictive Analytics']
  },
  {
    title: 'Retail Data Mining',
    description: 'Boost retail performance with actionable insights.',
    icon: '🛒',
    features: ['Purchase Analysis', 'Inventory Optimization', 'Pricing Strategy']
  }
];

const dataMiningDetails = [
  {
    title: 'Business Data Mining',
    description: 'Data is the key to making informed business decisions. Our business data mining services include:',
    points: [
      'Market Analysis: Extract valuable insights to understand industry trends and customer behavior.',
      'Competitor Analysis: Gather and analyze competitor data to identify market opportunities.',
      'Customer Segmentation: Use data-driven segmentation to tailor marketing strategies for different audience groups.',
      'Trend Prediction: Leverage predictive analytics to anticipate future market movements.'
    ]
  },
  {
    title: 'Financial Data Mining',
    description: 'Make smarter financial decisions with our advanced data mining techniques. Our financial data mining services include:',
    points: [
      'Fraud Detection: Identify anomalies and prevent fraudulent transactions.',
      'Risk Analysis: Assess financial risks and make data-driven investment decisions.',
      'Stock Market Prediction: Use historical data to analyze stock trends and forecast market changes.',
      'Expense Optimization: Identify cost-saving opportunities based on spending patterns.'
    ]
  },
  {
    title: 'Healthcare Data Mining',
    description: 'Transform healthcare operations with data-driven insights. Our healthcare data mining services include:',
    points: [
      'Patient Trend Analysis: Identify health patterns and improve patient care.',
      'Medical Research Support: Extract relevant medical data for research and development.',
      'Predictive Analytics: Forecast disease outbreaks and healthcare demands.',
      'Healthcare Fraud Detection: Identify billing errors and fraudulent claims.'
    ]
  },
  {
    title: 'Retail & E-Commerce Data Mining',
    description: 'Boost your retail and e-commerce performance with actionable insights. Our retail data mining services include:',
    points: [
      'Consumer Purchase Analysis: Understand buying habits and optimize marketing strategies.',
      'Inventory Optimization: Predict demand and streamline inventory management.',
      'Pricing Strategy Optimization: Adjust pricing based on market trends and competitor analysis.',
      'Customer Retention Analysis: Identify patterns to improve customer loyalty and repeat purchases.'
    ]
  }
];

const linkedInData = [
  'Extract targeted business leads and potential clients',
  'Analyze competitor networks and industry connections',
  'Gather company insights for B2B marketing strategies',
  'Identify decision-makers for personalized outreach'
];

const emailData = [
  'Segmentation of potential customers based on engagement',
  'Identification of high-value prospects through email interactions',
  'Trend analysis of email responses to optimize communication strategies',
  'Automated data extraction for streamlined lead generation'
];

const whyChooseUs = [
  { title: 'Accurate Insights', description: 'We use advanced techniques to ensure data accuracy.', icon: '🎯' },
  { title: 'Custom Solutions', description: 'Tailored data mining strategies based on your business needs.', icon: '⚙️' },
  { title: 'Data Security', description: 'Your data is protected with industry-leading security protocols.', icon: '🔒' },
  { title: 'Expert Analysts', description: 'A team of skilled data scientists and analysts at your service.', icon: '👨‍💻' },
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

function DataMiningHeroPage() {
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
      setActiveService((prev) => (prev + 1) % dataMiningServices.length);
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
          <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1773039739/grok-video-dfc9a603-e557-4564-9c46-ed76afaecec0_dpcyvk.mp4" type="video/mp4" />
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
              <span>✦</span> Data Mining Services
            </div>
            <h1 className="hero-title">
              <span className="line">Unlock Hidden Insights</span>
              <span className="line highlight">with AI-Driven Data Mining</span>
            </h1>
            <p className="hero-tagline" style={{ textAlign: 'center', color: '#fff', fontSize: '22px', maxWidth: '800px', margin: '0 auto 40px' }}>
              Transform your data into actionable insights with our advanced data mining solutions
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
              <Link to="/contact" className="btn-secondary">Book a Call</Link>
            </div>
            <p className="hero-motto">Strategize • Optimize • Grow</p>
          </motion.div>
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
            <h2>Data Mining Services We Provide</h2>
            <p>Comprehensive data solutions tailored to your business needs</p>
          </motion.div>
          <div className="smm-platforms-grid">
            {dataMiningServices.map((service, index) => (
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
          {dataMiningDetails.map((detail, index) => (
            <motion.div 
              key={detail.title}
              className="smm-detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="smm-detail-header">
                <span className="smm-detail-icon">{dataMiningServices[index].icon}</span>
                <h3>{detail.title}</h3>
              </div>
              <p className="smm-detail-desc">{detail.description}</p>
              <ul className="smm-detail-list">
                {detail.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
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
            <h2>LinkedIn & Email Data Mining: Extract Business Opportunities</h2>
            <p>Maximize your business potential by extracting valuable insights from LinkedIn and email data</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <h3 style={{ color: '#fff', fontSize: '28px', marginBottom: '25px', textAlign: 'center' }}>LinkedIn Data Mining</h3>
              <p style={{ color: '#a0a0a0', marginBottom: '20px', textAlign: 'center' }}>Leverage LinkedIn's vast professional network to:</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {linkedInData.map((item, i) => (
                  <li key={i} style={{ color: '#fff', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '10px', color: '#6366f1' }}>▹</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <h3 style={{ color: '#fff', fontSize: '28px', marginBottom: '25px', textAlign: 'center' }}>Email Data Mining</h3>
              <p style={{ color: '#a0a0a0', marginBottom: '20px', textAlign: 'center' }}>Enhance your marketing campaigns with:</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {emailData.map((item, i) => (
                  <li key={i} style={{ color: '#fff', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '10px', color: '#6366f1' }}>▹</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
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
            <h2>Why Choose Our Data Mining Services?</h2>
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
              <h2>Ready to Unlock Hidden Insights?</h2>
              <p>Let's create a customized data mining solution that drives results.</p>
              <Link to="/contact" className="btn-primary">GET A FREE CONSULTATION</Link>
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

export default DataMiningHeroPage;
