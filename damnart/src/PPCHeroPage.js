import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const ppcPlatforms = [
  {
    name: 'Google Ads',
    description: 'Reach a vast online audience through search and display advertising on various google platforms.',
    icon: '🔍',
    features: ['Target Specific Keywords', 'Various Ad Formats', 'Advanced Targeting Options', 'Performance Tracking']
  },
  {
    name: 'Meta Ads (FB & INSTA)',
    description: 'Target specific demographics and interests on the largest social media platform.',
    icon: '📱',
    features: ['Precise Audience Targeting', 'Diverse Ad Formats', 'Comprehensive Analytics', 'Retargeting Capabilities']
  },
  {
    name: 'LinkedIn Ads',
    description: 'Connect with professionals and B2B audiences',
    icon: '💼',
    features: ['Professional Audience', 'Content-Based Advertising', 'Lead Generation', 'Insightful Analytics']
  },
  {
    name: 'Taboola Ads',
    description: "Advertise on Microsoft's search engine network, including Bing and Yahoo.",
    icon: '📰',
    features: ['Native Ad Placement', 'Content Discovery', 'Audience Targeting', 'Engagement Metrics']
  },
  {
    name: 'Microsoft Ads',
    description: 'Promote content across premium publisher sites to drive engagement and traffic.',
    icon: '🌐',
    features: ['Keyword Targeting', 'Ad Extensions', 'Demographic Targeting', 'Cost-Effective Advertising']
  }
];

const platformDetails = [
  {
    name: 'Google Ads',
    fullDescription: "Google Ads is the most popular PPC platform, allowing businesses to place ads on Google's search engine results pages (SERPs), YouTube, and partner websites. With Google Ads, you can:",
    points: [
      'Target Specific Keywords: Reach potential customers by bidding on keywords relevant to your business.',
      'Various Ad Formats: Reach potential customers by bidding on keywords relevant to your business.',
      'Advanced Targeting Options: Target users based on location, demographics, interests, and more.',
      'Performance Tracking: Measure the success of your campaigns with detailed analytics.'
    ]
  },
  {
    name: 'Meta Ads (Fb & Insta)',
    fullDescription: 'Meta Ads offer robust advertising solutions on Facebook and Instagram, helping you connect with a wide audience through highly visual and engaging ad formats. Key features include:',
    points: [
      'Precise Audience Targeting: Use demographics, interests, behaviors, and custom audiences to target your ideal customers.',
      'Diverse Ad Formats: Create image, video, carousel, and story ads that captivate users.',
      'Comprehensive Analytics: Monitor the performance of your campaigns with insights and reporting tools.',
      'Retargeting Capabilities: Re-engage users who have previously interacted with your brand.'
    ]
  },
  {
    name: 'LinkedIn Ads',
    fullDescription: 'LinkedIn Ads are perfect for B2B marketing, allowing you to reach professionals and decision-makers in various industries. Benefits of LinkedIn Ads include:',
    points: [
      'Professional Audience: Target ads to specific job titles, industries, and companies.',
      'Content-Based Advertising: Promote your content with sponsored content, message ads, and dynamic ads.',
      'Lead Generation: Utilize LinkedIn\'s lead generation forms to capture valuable leads directly from your ads.',
      'Insightful Analytics: Gain insights into campaign performance and audience engagement.'
    ]
  },
  {
    name: 'Taboola Ads',
    fullDescription: 'Taboola Ads help you reach potential customers through native advertising on premium publisher sites. With Taboola, you can:',
    points: [
      'Native Ad Placement: Blend your ads seamlessly with editorial content on top websites.',
      'Content Discovery: Promote your content to users who are interested in related topics.',
      'Audience Targeting: Reach users based on their reading habits and interests.',
      'Engagement Metrics: Track how users interact with your ads and optimize for better performance.'
    ]
  },
  {
    name: 'Microsoft Ads',
    fullDescription: 'Microsoft Ads (formerly Bing Ads) provide an alternative PPC platform to reach users on Bing, Yahoo, and AOL. Key features include:',
    points: [
      'Keyword Targeting: Bid on keywords to display your ads on search engine results pages.',
      'Ad Extensions: Enhance your ads with additional information like call buttons, location, and site links.',
      'Demographic Targeting: Target users based on age, gender, and device type.',
      'Cost-Effective Advertising: Often lower cost-per-click compared to other PPC platforms.'
    ]
  }
];

const processSteps = [
  { number: '01', title: 'Strategy Development', description: 'We analyze your business goals and target audience to create a customized PPC strategy.' },
  { number: '02', title: 'Campaign Setup', description: 'Our team sets up your campaigns with optimized ad groups, keywords, and targeting.' },
  { number: '03', title: 'Ad Creation', description: 'We design compelling ad copies and visuals that drive clicks and conversions.' },
  { number: '04', title: 'Launch & Monitor', description: 'Your campaigns go live, and we continuously monitor performance and make data-driven optimizations.' },
  { number: '05', title: 'Optimization & Reporting', description: 'We provide detailed reports and refine strategies to maximize your ROI.' }
];

const whyChooseUs = [
  { title: 'Expert Team', description: 'Certified professionals with years of experience in PPC advertising.', icon: '🏆' },
  { title: 'Data-Driven', description: 'Every decision backed by analytics and real-time data insights.', icon: '📈' },
  { title: 'Custom Strategies', description: 'Tailored solutions that align with your unique business goals.', icon: '🎯' },
  { title: 'Proven Results', description: '500+ successful campaigns with measurable ROI for clients.', icon: '⭐' },
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

function PPCHeroPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePlatform, setActivePlatform] = useState(0);
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
      setActivePlatform((prev) => (prev + 1) % ppcPlatforms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="ppc-page">
      <AnimatedBackground />
      <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <section className="ppc-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1772513460/grok-video-59e7290a-41bc-413b-b074-5467ff75d15a_jt75ml.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <motion.div 
            className="ppc-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <span>✦</span> PPC Services
            </div>
            <h1 className="hero-title">
              <span className="line">Pay-Per-Click</span>
              <span className="line highlight">Advertising</span>
            </h1>
            <p className="hero-tagline">
              Stop Wasting Budget: Invest in High-Performance PPC Solutions
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
              <Link to="/contact" className="btn-secondary">Book a Call</Link>
            </div>
            <p className="hero-motto">Strategize • Optimize • Grow</p>
          </motion.div>
        </div>
      </section>

      <section className="ppc-platforms-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>PPC ADS PLATFORMS</h2>
            <p>We work with all major PPC platforms to maximize your reach</p>
          </motion.div>
          <div className="ppc-platforms-grid">
            {ppcPlatforms.map((platform, index) => (
              <motion.div 
                key={platform.name}
                className={`ppc-platform-card ${activePlatform === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActivePlatform(index)}
              >
                <span className="ppc-platform-icon">{platform.icon}</span>
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
                <div className="ppc-platform-features">
                  {platform.features.slice(0, 2).map((feature, i) => (
                    <span key={i} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="ppc-details-section">
        <div className="container">
          {platformDetails.map((platform, index) => (
            <motion.div 
              key={platform.name}
              className="ppc-detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="ppc-detail-header">
                <span className="ppc-detail-icon">{ppcPlatforms[index].icon}</span>
                <h3>{platform.name}</h3>
              </div>
              <p className="ppc-detail-desc">{platform.fullDescription}</p>
              <ul className="ppc-detail-list">
                {platform.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="ppc-process-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>PPC Process Timeline</h2>
            <p>Our proven process ensures maximum ROI</p>
          </motion.div>
          <div className="ppc-process-grid">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                className="ppc-process-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
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
              <h2>Ready to Boost Your PPC Performance?</h2>
              <p>Let's create a customized PPC strategy that drives results.</p>
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

export default PPCHeroPage;
