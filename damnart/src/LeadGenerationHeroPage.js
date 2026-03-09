import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const leadChannels = [
  {
    title: 'Google Ads & PPC Lead Generation',
    description: 'Target high-intent users searching for your services',
    icon: '🎯',
    features: ['Optimize ad spend with data-backed strategies', 'Run conversion-focused landing pages']
  },
  {
    title: 'Social Media Lead Generation',
    description: 'Generate leads via Facebook, Instagram, and LinkedIn Ads',
    icon: '📱',
    features: ['Engage with audiences through organic and paid strategies', 'Use retargeting campaigns to capture interested users']
  },
  {
    title: 'LinkedIn & Email Prospecting',
    description: 'Extract qualified B2B leads from LinkedIn',
    icon: '💼',
    features: ['Send personalized cold emails & direct messages', 'Automate outreach while maintaining a human touch']
  },
  {
    title: 'SEO & Content Marketing',
    description: 'Attract inbound leads through optimized website content',
    icon: '🔍',
    features: ['Publish high-value blogs, case studies, and whitepapers', 'Convert website visitors into potential clients']
  },
  {
    title: 'Cold Calling & WhatsApp Marketing',
    description: 'Engage directly with prospects via call & WhatsApp campaigns',
    icon: '📞',
    features: ['Create personalized scripts for maximum engagement', 'Follow up consistently to improve conversion rates']
  }
];

const channelDetails = [
  {
    title: 'Google Ads & PPC Lead Generation',
    description: 'Target high-intent users who are actively searching for your services. Our PPC strategies ensure you get maximum ROI from your ad spend.',
    points: [
      'Keyword Research: Identify high-converting keywords for your business.',
      'Ad Copywriting: Create compelling ad copy that drives clicks and conversions.',
      'Landing Page Optimization: Design conversion-focused landing pages.',
      'Campaign Management: Monitor and optimize campaigns for better performance.',
      'Analytics & Reporting: Detailed reports to track ROI and campaign success.'
    ]
  },
  {
    title: 'Social Media Lead Generation',
    description: 'Generate quality leads through Facebook, Instagram, and LinkedIn advertising. Engage with your audience through strategic campaigns.',
    points: [
      'Audience Targeting: Reach your ideal customers with precise targeting options.',
      'Lead Magnets: Create enticing offers to capture lead information.',
      'Retargeting Campaigns: Re-engage users who have shown interest in your brand.',
      'Lead Forms: Utilize native lead forms for seamless data collection.',
      'Engagement Strategies: Build relationships with potential customers.'
    ]
  },
  {
    title: 'LinkedIn & Email Prospecting',
    description: 'Extract qualified B2B leads from LinkedIn and nurture them through personalized email campaigns.',
    points: [
      'LinkedIn Lead Generation: Use LinkedIn\'s advanced search and lead forms.',
      'Cold Email Campaigns: Craft personalized cold emails that get responses.',
      'Direct Messaging: Reach out to prospects through professional outreach.',
      'Lead Qualification: Identify and qualify leads based on engagement.',
      'Automation: Streamline outreach while maintaining a human touch.'
    ]
  },
  {
    title: 'SEO & Content Marketing',
    description: 'Attract organic leads through search engine optimization and valuable content marketing.',
    points: [
      'SEO Optimization: Improve your website\'s search engine rankings.',
      'Content Strategy: Create valuable blogs, case studies, and whitepapers.',
      'Inbound Marketing: Attract leads through valuable content.',
      'Conversion Optimization: Turn website visitors into leads.',
      'Lead Nurturing: Engage leads with targeted content campaigns.'
    ]
  },
  {
    title: 'Cold Calling & WhatsApp Marketing',
    description: 'Engage directly with prospects through personalized cold calling and WhatsApp marketing campaigns.',
    points: [
      'Prospect Research: Identify and research your target audience.',
      'Call Scripts: Create personalized scripts for maximum engagement.',
      'WhatsApp Campaigns: Use WhatsApp for direct and personalized communication.',
      'Follow-up Strategies: Implement consistent follow-up to improve conversion rates.',
      'CRM Integration: Track and manage leads throughout the sales process.'
    ]
  }
];

const whyChooseUs = [
  { title: 'Multi-Channel Approach', description: 'Reach leads wherever they are with our diversified strategies.', icon: '🌐' },
  { title: 'Data-Driven Targeting', description: 'Get only high-intent leads through advanced analytics.', icon: '📊' },
  { title: 'End-to-End Management', description: 'From lead capture to conversion, we handle everything.', icon: '⚙️' },
  { title: 'Higher ROI', description: 'Focus on quality over quantity for maximum returns.', icon: '💰' },
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

function LeadGenerationHeroPage() {
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
              <span>✦</span> Lead Generation
            </div>
            <h1 className="hero-title">
              <span className="line">Lead Generation</span>
              <span className="line highlight">That Drives Results</span>
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
            <h2>Our Lead Generation Channels</h2>
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
                  {channel.features.slice(0, 2).map((feature, i) => (
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
            <h2>Why Choose DamnArt for Lead Generation?</h2>
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
              <h2>Ready to Generate More Leads?</h2>
              <p>Let's create a customized lead generation strategy that drives results.</p>
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

export default LeadGenerationHeroPage;
