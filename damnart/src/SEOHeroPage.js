import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const seoServices = [
  {
    title: 'Keyword Research',
    description: 'Identify the right keywords to drive targeted traffic.',
    icon: '🔑',
    features: ['Competitive Analysis', 'Keyword Selection', 'Long-Tail Keywords']
  },
  {
    title: 'On-Page Optimization',
    description: 'Optimize content and structure for search engines.',
    icon: '⚙️',
    features: ['Meta Tags', 'Content Optimization', 'Internal Linking']
  },
  {
    title: 'Technical SEO',
    description: 'Improve backend performance for better rankings.',
    icon: '🔧',
    features: ['Site Speed', 'Mobile Optimization', 'XML Sitemaps']
  },
  {
    title: 'Off-Page Optimization',
    description: 'Build authority through external activities.',
    icon: '🔗',
    features: ['Link Building', 'Social Media', 'Guest Posting']
  },
  {
    title: 'Local SEO',
    description: 'Attract customers from your geographic area.',
    icon: '📍',
    features: ['Google My Business', 'Local Citations', 'Review Management']
  },
  {
    title: 'SEO Analytics',
    description: 'Track and measure SEO performance.',
    icon: '📈',
    features: ['Performance Tracking', 'Monthly Reports', 'Data Insights']
  }
];

const seoDetails = [
  {
    title: 'Keyword Research',
    description: 'Identifying the right keywords is the foundation of any successful SEO strategy. Our keyword research services include:',
    points: [
      'Competitive Analysis: Analyze your competitors to identify high-performing keywords.',
      'Keyword Selection: Choose the most relevant and high-traffic keywords for your business.',
      'Long-Tail Keywords: Target specific phrases that attract highly qualified traffic.'
    ]
  },
  {
    title: 'On-Page Optimization',
    description: 'On-page optimization ensures your website content and structure are search-engine friendly. Our services include:',
    points: [
      'Meta Tags Optimization: Optimize title tags, meta descriptions, and headers to improve click-through rates and relevance.',
      'Content Optimization: Ensure your content is high-quality, keyword-rich, and relevant to user intent.',
      'Internal Linking: Improve site navigation and link equity distribution by strategically linking to related content.',
      'URL Structure: Create SEO-friendly URLs that are easy to read and include keywords.',
      'Image Optimization: Optimize images by using descriptive file names, alt text, and ensuring fast load times.',
      'User Experience (UX) Enhancements: Improve site usability, navigation, and overall user experience.'
    ]
  },
  {
    title: 'Technical SEO',
    description: 'Technical SEO focuses on improving the backend aspects of your website to enhance its performance. Our services include:',
    points: [
      'Site Speed Optimization: Improve page load times for better user experience and higher rankings.',
      'Mobile Optimization: Ensure your website is mobile-friendly and responsive.',
      'XML Sitemaps: Create and submit XML sitemaps to help search engines crawl and index your site.',
      'Schema Markup: Implement structured data to provide search engines with detailed information.',
      'HTTPS Implementation: Ensure your website is secure by using HTTPS.',
      'Crawl Error Resolution: Identify and fix crawl errors to ensure all pages are accessible.'
    ]
  },
  {
    title: 'Off-Page Optimization',
    description: 'Off-page optimization involves activities outside your website to improve its authority and relevance. Our services include:',
    points: [
      'Link Building: Acquire high-quality backlinks from reputable websites to boost your site\'s authority.',
      'Social Media Integration: Promote your content on social media platforms to drive traffic.',
      'Guest Posting: Publish articles on high-authority sites to build backlinks.',
      'Online Reputation Management: Monitor and manage your online reputation.'
    ]
  },
  {
    title: 'Local SEO',
    description: 'Local SEO helps businesses attract customers from their specific geographic area. Our services include:',
    points: [
      'Google My Business Optimization: Optimize your GMB profile with accurate information.',
      'Local Citations: Ensure your business is listed accurately in local directories.',
      'Review Management: Encourage and manage customer reviews on platforms like Google and Yelp.',
      'Local Keyword Optimization: Target keywords relevant to your local audience.',
      'Local Content Creation: Develop content tailored to local interests and events.'
    ]
  },
  {
    title: 'SEO Analytics and Reporting',
    description: 'Measuring the success of your SEO efforts is crucial for continuous improvement. Our services include:',
    points: [
      'Performance Tracking: Monitor keyword rankings, organic traffic, and conversions.',
      'Monthly Reports: Provide detailed reports on SEO performance.',
      'Data-Driven Insights: Analyze data to identify opportunities, trends, and challenges.',
      'Goal Setting: Set and track SEO goals to ensure continuous growth.'
    ]
  }
];

const whyChooseUs = [
  { title: 'Expert SEO Specialists', description: 'Certified professionals with years of experience in SEO.', icon: '🏆' },
  { title: 'Data-Driven', description: 'Every strategy backed by analytics and research.', icon: '📈' },
  { title: 'Custom Solutions', description: 'Tailored SEO strategies that align with your business goals.', icon: '🎯' },
  { title: 'Proven Results', description: '500+ successful SEO campaigns with measurable growth.', icon: '⭐' },
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

function SEOHeroPage() {
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
      setActiveService((prev) => (prev + 1) % seoServices.length);
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
              <span>✦</span> SEO Services
            </div>
            <h1 className="hero-title">
              <span className="line">Don't Just Post, Engage:</span>
              <span className="line highlight">Elevate Your Brand</span>
            </h1>
            <p className="hero-tagline">
              Boost Your Rankings with Strategic Search Engine Optimization
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
            <h2>SEO Services We Provide</h2>
            <p>Comprehensive SEO solutions tailored to your business needs</p>
          </motion.div>
          <div className="smm-platforms-grid">
            {seoServices.map((service, index) => (
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
          {seoDetails.map((detail, index) => (
            <motion.div 
              key={detail.title}
              className="smm-detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="smm-detail-header">
                <span className="smm-detail-icon">{seoServices[index].icon}</span>
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
              <h2>Ready to Boost Your Rankings?</h2>
              <p>Let's create a customized SEO strategy that drives organic growth.</p>
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

export default SEOHeroPage;
