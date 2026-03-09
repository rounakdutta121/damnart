import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const leadChannels = [
  {
    title: 'Google Ads & PPC Lead Generation',
    description: 'Target users actively searching for your services',
    icon: '🎯',
    points: ['Smart budget management through continuous optimization', 'Conversion-focused landing pages tailored for results', 'You pay only for leads, not for clicks!']
  },
  {
    title: 'Social Media Lead Generation (Meta & LinkedIn Ads)',
    description: 'Capture quality leads through Facebook, Instagram & LinkedIn ads',
    icon: '📱',
    points: ['Blend organic strategies with paid campaigns for full-funnel reach', 'Retarget users to boost lead quality and volume', 'Every lead is verified before you pay!']
  },
  {
    title: 'LinkedIn & Email Prospecting',
    description: 'Get handpicked B2B leads from LinkedIn',
    icon: '💼',
    points: ['Personalized cold emails & DMs with high reply rates', 'Semi-automated outreach that still feels human', 'You pay for warm, real conversations—not random lists!']
  },
  {
    title: 'SEO & Content-Driven Inbound Leads',
    description: 'Attract inbound leads through high-ranking, optimized content',
    icon: '🔍',
    points: ['Regular blogs, whitepapers, and case studies that pull the right audience', 'Turn your website into a lead-generation machine', 'You only pay for genuine contact form inquiries or email opt-ins!']
  },
  {
    title: 'Cold Calling & WhatsApp Lead Gen',
    description: 'Direct outreach with high-engagement scripts',
    icon: '📞',
    points: ['WhatsApp automation blended with human follow-ups', 'Persistent tracking & nurturing', 'Only verified leads, no junk data.']
  }
];

const channelDetails = [
  {
    title: 'Google Ads & PPC Lead Generation',
    description: 'Data is the key to making informed business decisions. Our business data mining services include:',
    points: [
      'Target users actively searching for your services',
      'Smart budget management through continuous optimization',
      'Conversion-focused landing pages tailored for results',
      'You pay only for leads, not for clicks!'
    ]
  },
  {
    title: 'Social Media Lead Generation (Meta & LinkedIn Ads)',
    description: 'Make smarter financial decisions with our advanced data mining techniques. Our financial data mining services include:',
    points: [
      'Capture quality leads through Facebook, Instagram & LinkedIn ads',
      'Blend organic strategies with paid campaigns for full-funnel reach',
      'Retarget users to boost lead quality and volume',
      'Every lead is verified before you pay!'
    ]
  },
  {
    title: 'LinkedIn & Email Prospecting',
    description: 'Get handpicked B2B leads from LinkedIn with personalized outreach:',
    points: [
      'Personalized cold emails & DMs with high reply rates',
      'Semi-automated outreach that still feels human',
      'You pay for warm, real conversations—not random lists!'
    ]
  },
  {
    title: 'SEO & Content-Driven Inbound Leads',
    description: 'Attract inbound leads through high-ranking, optimized content:',
    points: [
      'Attract inbound leads through high-ranking, optimized content',
      'Regular blogs, whitepapers, and case studies that pull the right audience',
      'Turn your website into a lead-generation machine',
      'You only pay for genuine contact form inquiries or email opt-ins!'
    ]
  },
  {
    title: 'Cold Calling & WhatsApp Lead Gen',
    description: 'Direct outreach with high-engagement scripts:',
    points: [
      'Direct outreach with high-engagement scripts',
      'WhatsApp automation blended with human follow-ups',
      'Persistent tracking & nurturing',
      'Only verified leads, no junk data.'
    ]
  }
];

const whyChooseUs = [
  { title: 'Laser-Targeted Outreach', description: 'We focus on quality, not just quantity', icon: '🎯' },
  { title: 'No Wastage', description: 'Every penny counts toward a real business opportunity', icon: '💰' },
  { title: 'Transparent Tracking', description: 'Get access to real-time reports on every lead', icon: '📊' },
  { title: 'High ROI System', description: 'More conversions, less confusion', icon: '🔁' },
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

function PayPerValidHeroPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState(0);
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
      setActiveChannel((prev) => (prev + 1) % leadChannels.length);
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
          <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1773040748/grok-video-a942238c-1719-4dec-a234-0c14ea978999_fqew7d.mp4" type="video/mp4" />
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
              <span>✦</span> Pay Per Valid Lead
            </div>
            <h1 className="hero-title">
              <span className="line">Only Pay for What Matters –</span>
              <span className="line highlight">Real, Valid Leads!</span>
            </h1>
            <p className="hero-tagline">
              Transform your business with data-driven lead generation strategies that deliver results. We specialize in PPC, SMM, SEO, and content marketing to help you grow your business.
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
            <h2>Our Pay Per Lead Channels</h2>
            <p>Multi-platform strategies to maximize your lead capture</p>
          </motion.div>
          <div className="smm-platforms-grid">
            {leadChannels.map((channel, index) => (
              <motion.div 
                key={channel.title}
                className={`smm-platform-card ${activeChannel === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveChannel(index)}
              >
                <span className="smm-platform-icon">{channel.icon}</span>
                <h3>{channel.title}</h3>
                <p>{channel.description}</p>
                <div className="smm-platform-features">
                  {channel.points.slice(0, 2).map((point, i) => (
                    <span key={i} className="feature-tag">{point}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-details-section">
        <div className="container">
          {channelDetails.map((detail, index) => (
            <motion.div 
              key={detail.title}
              className="smm-detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="smm-detail-header">
                <span className="smm-detail-icon">{leadChannels[index].icon}</span>
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
            <h2>Why Pay Per Valid Lead with DamnArt?</h2>
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
              <h2>Ready to Get Valid Leads?</h2>
              <p>Let's create a customized pay per valid lead strategy that drives results.</p>
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

export default PayPerValidHeroPage;
