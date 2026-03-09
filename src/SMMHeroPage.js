import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const smmPlatforms = [
  {
    name: 'Facebook Management',
    description: 'Versatile social platform for engaging with a broad audience through posts, ads, and community building.',
    icon: '📘',
    features: ['Content Creation', 'Community Management', 'Ad Campaign Management', 'Analytics & Reporting']
  },
  {
    name: 'Instagram Management',
    description: 'Visual-centric platform perfect for creative storytelling, brand visuals, and engaging a younger audience.',
    icon: '📸',
    features: ['Visual Content Creation', 'Hashtag Strategy', 'Influencer Collaboration', 'Performance Tracking']
  },
  {
    name: 'LinkedIn Management',
    description: 'Professional networking platform ideal for B2B marketing, industry insights, and corporate branding.',
    icon: '💼',
    features: ['Profile Optimization', 'Network Building', 'LinkedIn Ads', 'Analytics & Insights']
  }
];

const platformDetails = [
  {
    name: 'Facebook Management',
    fullDescription: 'Facebook remains one of the most powerful platforms for reaching a diverse audience. Our Facebook management services include:',
    points: [
      'Content Creation and Curation: Craft engaging posts, images, and videos that resonate with your audience.',
      'Page Optimization: Optimize your Facebook page to ensure it reflects your brand and attracts followers.',
      'Community Management: Engage with your audience through comments, messages, and community posts.',
      'Ad Campaign Management: Create and manage targeted ad campaigns to reach your specific audience.',
      'Analytics and Reporting: Monitor and analyze your page\'s performance to inform future strategies.'
    ]
  },
  {
    name: 'Instagram Management',
    fullDescription: 'Instagram is a visually-driven platform perfect for showcasing your brand\'s personality and products. Our Instagram management services include:',
    points: [
      'Visual Content Creation: Develop high-quality images, videos, and stories that capture attention.',
      'Hashtag Strategy: Implement effective hashtag strategies to increase your post visibility.',
      'Engagement: Foster community engagement through likes, comments, and direct messages.',
      'Influencer Collaboration: Partner with relevant influencers to amplify your brand reach.',
      'Performance Tracking: Analyze key metrics to measure success and refine your strategy.'
    ]
  },
  {
    name: 'LinkedIn Management',
    fullDescription: 'LinkedIn is the premier platform for B2B marketing, offering opportunities to connect with professionals and industry leaders. Our LinkedIn management services include:',
    points: [
      'Profile Optimization: Enhance your LinkedIn profile to showcase your brand\'s expertise and attract connections.',
      'Content Strategy: Create and share valuable content that positions your brand as a thought leader.',
      'Network Building: Grow your professional network by connecting with potential clients, partners, and influencers.',
      'LinkedIn Ads: Develop and manage targeted ad campaigns to reach decision-makers in your industry.',
      'Analytics and Insights: Monitor your LinkedIn activity to gain insights and improve your strategy.'
    ]
  }
];

const processSteps = [
  { number: '01', title: 'Strategy Development', description: 'We analyze your brand and target audience to create a customized SMM strategy.' },
  { number: '02', title: 'Content Planning', description: 'Our team creates engaging content calendars tailored to each platform.' },
  { number: '03', title: 'Content Creation', description: 'We design compelling visuals, videos, and copy that resonate with your audience.' },
  { number: '04', title: 'Launch & Engage', description: 'Your content goes live, and we actively engage with your community.' },
  { number: '05', title: 'Analytics & Optimization', description: 'We provide detailed reports and refine strategies to maximize engagement.' }
];

const whyChooseUs = [
  { title: 'Expert Team', description: 'Certified professionals with years of experience in social media management.', icon: '🏆' },
  { title: 'Data-Driven', description: 'Every decision backed by analytics and real-time engagement insights.', icon: '📈' },
  { title: 'Custom Strategies', description: 'Tailored solutions that align with your unique brand identity.', icon: '🎯' },
  { title: 'Proven Results', description: '500+ successful campaigns with measurable engagement for clients.', icon: '⭐' },
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

function SMMHeroPage() {
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
      setActivePlatform((prev) => (prev + 1) % smmPlatforms.length);
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
          <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1773029543/grok-video-50f1898c-a59c-45a0-bf67-47fae3472933_yhxppr.mp4" type="video/mp4" />
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
              <span>✦</span> SMM Services
            </div>
            <h1 className="hero-title">
              <span className="line">Social Media</span>
              <span className="line highlight">Management</span>
            </h1>
            <p className="hero-tagline">
              Don't Just Post, Engage: Elevate Your Brand with Strategic Social Media Management
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
            <h2>Social Media Platforms</h2>
            <p>We manage your presence on all major social media platforms</p>
          </motion.div>
          <div className="smm-platforms-grid">
            {smmPlatforms.map((platform, index) => (
              <motion.div 
                key={platform.name}
                className={`smm-platform-card ${activePlatform === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActivePlatform(index)}
              >
                <span className="smm-platform-icon">{platform.icon}</span>
                <h3>{platform.name}</h3>
                <p>{platform.description}</p>
                <div className="smm-platform-features">
                  {platform.features.slice(0, 2).map((feature, i) => (
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
          {platformDetails.map((platform, index) => (
            <motion.div 
              key={platform.name}
              className="smm-detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="smm-detail-header">
                <span className="smm-detail-icon">{smmPlatforms[index].icon}</span>
                <h3>{platform.name}</h3>
              </div>
              <p className="smm-detail-desc">{platform.fullDescription}</p>
              <ul className="smm-detail-list">
                {platform.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">Get a Quote</Link>
            </motion.div>
          ))}
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
            <h2>SMM Process Timeline</h2>
            <p>Our proven process ensures maximum engagement</p>
          </motion.div>
          <div className="smm-process-grid">
            {processSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                className="smm-process-card"
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
              <h2>Ready to Boost Your Social Media Presence?</h2>
              <p>Let's create a customized SMM strategy that drives engagement.</p>
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

export default SMMHeroPage;
