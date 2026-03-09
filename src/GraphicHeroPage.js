import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const graphicServices = [
  {
    title: 'Logo Design',
    description: 'Create a memorable logo that represents your brand identity.',
    icon: '🎨',
    features: ['Custom Creation', 'Brand Consistency', 'Multiple Concepts']
  },
  {
    title: 'Marketing Materials',
    description: 'Eye-catching brochures, flyers, posters and more.',
    icon: '📄',
    features: ['Brochures & Flyers', 'Posters & Banners', 'Print Ads']
  },
  {
    title: 'Digital Graphics',
    description: 'Engaging graphics for all your online platforms.',
    icon: '🖥️',
    features: ['Social Media Graphics', 'Website Graphics', 'Digital Ads']
  },
  {
    title: 'Infographic Design',
    description: 'Transform complex data into visually appealing infographics.',
    icon: '📊',
    features: ['Data Visualization', 'Custom Illustrations', 'Storytelling']
  },
  {
    title: 'Presentation Design',
    description: 'Professional presentations that captivate your audience.',
    icon: '📽️',
    features: ['Custom Templates', 'Slide Design', 'Data Visualization']
  }
];

const graphicDetails = [
  {
    title: 'Logo Design',
    description: 'A logo is the face of your brand. Our logo design services include:',
    points: [
      'Custom Logo Creation: Develop a unique and memorable logo that reflects your brand identity.',
      'Brand Consistency: Ensure your logo aligns with your overall brand strategy and aesthetics.',
      'Multiple Concepts: Provide various design concepts and iterations until you find the perfect logo.',
      'Scalable Designs: Create logos that look great on all platforms and sizes, from business cards to billboards.'
    ]
  },
  {
    title: 'Marketing Materials Design',
    description: 'Effective marketing materials are essential for promoting your business. Our design services include:',
    points: [
      'Brochures and Flyers: Create visually appealing brochures and flyers that communicate your message clearly.',
      'Posters and Banners: Design impactful posters and banners for events, promotions, and advertising campaigns.',
      'Sales Presentations: Develop professional sales presentations that captivate and persuade your audience.',
      'Print Ads: Design attention-grabbing print ads for magazines, newspapers, and other publications.'
    ]
  },
  {
    title: 'Digital Graphics',
    description: "In today's digital world, having engaging online graphics is crucial. Our digital graphics services include:",
    points: [
      'Social Media Graphics: Create custom graphics for social media posts, covers, and ads to enhance your online presence.',
      'Email Campaign Graphics: Design visually appealing graphics for email marketing campaigns.',
      'Website Graphics: Develop graphics for your website, including banners, sliders, icons, and infographics.',
      'Digital Advertisements: Create compelling digital ads for various online platforms, including Google Ads, Facebook Ads, and more.'
    ]
  },
  {
    title: 'Infographic Design',
    description: 'Infographics are a powerful way to present complex information in an easily digestible format. Our infographic design services include:',
    points: [
      'Data Visualization: Transform data and statistics into visually engaging infographics.',
      'Custom Illustrations: Develop unique illustrations and icons to enhance your infographics.',
      'Storytelling: Create infographics that tell a compelling story and effectively convey your message.',
      'Multi-Platform Designs: Design infographics optimized for sharing across various platforms, including websites, social media, and print.'
    ]
  },
  {
    title: 'Presentation Design',
    description: 'A well-designed presentation can make a significant impact. Our presentation design services include:',
    points: [
      'Custom Templates: Develop custom PowerPoint and Keynote templates that reflect your brand.',
      'Slide Design: Create visually appealing and informative slides to support your presentations.',
      'Data Visualization: Use charts, graphs, and infographics to present data clearly and effectively.',
      'Consistent Branding: Ensure your presentations are consistent with your brand identity and messaging.'
    ]
  }
];

const whyChooseUs = [
  { title: 'Expert Designers', description: 'Creative professionals with years of experience in graphic design.', icon: '🏆' },
  { title: 'Data-Driven', description: 'Every design backed by research and brand strategy.', icon: '📈' },
  { title: 'Custom Solutions', description: 'Tailored designs that align with your unique brand identity.', icon: '🎯' },
  { title: 'Proven Results', description: '500+ successful design projects with measurable impact.', icon: '⭐' },
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

function GraphicHeroPage() {
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
      setActiveService((prev) => (prev + 1) % graphicServices.length);
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
          <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1773032379/grok-video-a65798d4-0399-405b-bace-d6784ca7ca4f_vckoxr.mp4" type="video/mp4" />
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
              <span>✦</span> Graphic Design Services
            </div>
            <h1 className="hero-title">
              <span className="line">Don't Just Post, Engage:</span>
              <span className="line highlight">Elevate Your Brand</span>
            </h1>
            <p className="hero-tagline">
              Creative Designs That Make Your Brand Stand Out
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
            <h2>Graphic Design Services We Provide</h2>
            <p>Comprehensive design solutions tailored to your business needs</p>
          </motion.div>
          <div className="smm-platforms-grid">
            {graphicServices.map((service, index) => (
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
          {graphicDetails.map((detail, index) => (
            <motion.div 
              key={detail.title}
              className="smm-detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="smm-detail-header">
                <span className="smm-detail-icon">{graphicServices[index].icon}</span>
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
              <h2>Ready to Elevate Your Brand?</h2>
              <p>Let's create stunning designs that make your brand unforgettable.</p>
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

export default GraphicHeroPage;
