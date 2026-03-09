import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const contentServices = [
  {
    title: 'Blog Writing',
    description: 'Drive traffic and establish expertise with compelling blogs.',
    icon: '📝',
    features: ['Topic Research', 'SEO Optimization', 'Engaging Content']
  },
  {
    title: 'Website Content',
    description: 'Make strong first impressions with professional website content.',
    icon: '🌐',
    features: ['Home Page', 'About Us', 'Product Descriptions']
  },
  {
    title: 'Social Media Content',
    description: 'Boost engagement with platform-specific social content.',
    icon: '📱',
    features: ['Platform-Specific', 'Content Calendars', 'Visual Integration']
  },
  {
    title: 'SEO Content',
    description: 'Improve rankings with optimized SEO content.',
    icon: '🔍',
    features: ['Keyword Research', 'On-Page SEO', 'Long-Form Content']
  },
  {
    title: 'Product Descriptions',
    description: 'Drive sales with compelling product copy.',
    icon: '🛍️',
    features: ['Feature Highlighting', 'Persuasive Copy', 'SEO Integration']
  },
  {
    title: 'Email Newsletters',
    description: 'Keep audience engaged with valuable email content.',
    icon: '📧',
    features: ['Content Planning', 'Engaging Subject Lines', 'Clear CTAs']
  }
];

const contentDetails = [
  {
    title: 'Blog Writing',
    description: 'Blogs are a powerful tool for driving traffic to your website and establishing your expertise. Our blog writing services include:',
    points: [
      'Topic Research: Identify relevant and trending topics that resonate with your audience.',
      'SEO Optimization: Integrate keywords seamlessly to improve search engine rankings.',
      'Engaging Content: Create informative and engaging blog posts that capture readers\' interest.',
      'Consistent Posting: Develop a content calendar and ensure regular posting to keep your audience engaged.'
    ]
  },
  {
    title: 'Website Content',
    description: 'Your website content is crucial for making a strong first impression. Our website content writing services include:',
    points: [
      'Home Page Content: Craft compelling content that clearly communicates your value proposition.',
      'About Us Page: Tell your brand story and highlight your mission, vision, and values.',
      'Service/Product Descriptions: Write detailed and persuasive descriptions that showcase the benefits of your offerings.',
      'Landing Pages: Create focused landing pages designed to convert visitors into leads or customers.'
    ]
  },
  {
    title: 'Social Media Content',
    description: 'Effective social media content can boost your online presence and engagement. Our social media content services include:',
    points: [
      'Platform-Specific Content: Develop tailored content for various social media platforms like Facebook, Instagram, LinkedIn, and Twitter.',
      'Content Calendars: Plan and schedule posts to ensure consistent and timely updates.',
      'Visual Content Integration: Incorporate images, videos, and graphics to enhance your social media posts.',
      'Community Engagement: Create content that encourages interaction and engagement with your audience.'
    ]
  },
  {
    title: 'SEO Content',
    description: 'SEO content is designed to improve your search engine rankings and drive organic traffic. Our SEO content writing services include:',
    points: [
      'Keyword Research: Identify high-traffic and relevant keywords for your industry.',
      'On-Page SEO: Write content optimized for on-page SEO, including meta tags, headings, and internal linking.',
      'Content Optimization: Update existing content to improve its SEO performance.',
      'Long-Form Content: Create in-depth articles, guides, and whitepapers that provide value and attract backlinks.'
    ]
  },
  {
    title: 'Product Descriptions',
    description: 'Compelling product descriptions can significantly impact your sales. Our product description writing services include:',
    points: [
      'Feature Highlighting: Emphasize key features and benefits of your products.',
      'Persuasive Copy: Write descriptions that persuade and encourage purchases.',
      'SEO Integration: Incorporate relevant keywords to improve product visibility in search results.',
      'Consistent Tone: Ensure a consistent tone and style that aligns with your brand.'
    ]
  },
  {
    title: 'Email Newsletters',
    description: 'Email newsletters are a great way to keep your audience informed and engaged. Our email newsletter writing services include:',
    points: [
      'Content Planning: Develop a content strategy that aligns with your marketing goals.',
      'Engaging Subject Lines: Craft subject lines that increase open rates.',
      'Valuable Content: Create informative and engaging content that adds value to your subscribers.',
      'Call-to-Actions: Include clear and compelling call-to-actions to drive conversions.'
    ]
  }
];

const whyChooseUs = [
  { title: 'Expert Writers', description: 'Certified professionals with years of experience in content writing.', icon: '🏆' },
  { title: 'Data-Driven', description: 'Every piece backed by research and SEO best practices.', icon: '📈' },
  { title: 'Custom Solutions', description: 'Tailored content that aligns with your unique brand voice.', icon: '🎯' },
  { title: 'Proven Results', description: '500+ successful content campaigns with measurable impact.', icon: '⭐' },
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

function ContentHeroPage() {
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
      setActiveService((prev) => (prev + 1) % contentServices.length);
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
          <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1773031032/grok-video-291887a7-604f-4b67-a8bc-b7452a1fbfc0_whbriv.mp4" type="video/mp4" />
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
              <span>✦</span> Content Writing Services
            </div>
            <h1 className="hero-title">
              <span className="line">Don't Just Post, Engage:</span>
              <span className="line highlight">Elevate Your Brand</span>
            </h1>
            <p className="hero-tagline">
              Professional Content That Engages, Converts, and Builds Your Brand
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
            <h2>Content Writing Services We Provide</h2>
            <p>Comprehensive content solutions tailored to your business needs</p>
          </motion.div>
          <div className="smm-platforms-grid">
            {contentServices.map((service, index) => (
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
          {contentDetails.map((detail, index) => (
            <motion.div 
              key={detail.title}
              className="smm-detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="smm-detail-header">
                <span className="smm-detail-icon">{contentServices[index].icon}</span>
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
              <h2>Ready to Boost Your Content?</h2>
              <p>Let's create customized content that drives engagement and conversions.</p>
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

export default ContentHeroPage;
