import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './App.css';

const webDevServices = [
  {
    title: 'Custom Website Development',
    description: 'Tailored websites built to your unique business needs.',
    icon: '🎨',
    features: ['Bespoke Design', 'Scalable Solutions', 'Responsive Design']
  },
  {
    title: 'E-Commerce Development',
    description: 'Powerful online stores that drive sales and conversions.',
    icon: '🛒',
    features: ['Platform Selection', 'Secure Payments', 'Inventory Management']
  },
  {
    title: 'CMS Development',
    description: 'Easy-to-manage content systems for non-technical users.',
    icon: '📝',
    features: ['WordPress/Joomla/Drupal', 'Custom Templates', 'Plugin Integration']
  },
  {
    title: 'Web Application Development',
    description: 'Complex web solutions tailored to specific business workflows.',
    icon: '💻',
    features: ['Custom Web Apps', 'SaaS Solutions', 'API Development']
  }
];

const developmentDetails = [
  {
    title: 'Custom Website Development',
    description: 'Our custom website development services ensure your website is tailored to your unique business needs and objectives. We offer:',
    points: [
      'Bespoke Design: Create a unique and visually appealing design that aligns with your brand identity.',
      'Scalable Solutions: Develop websites that can grow with your business, accommodating future expansion and functionality.',
      'Responsive Design: Ensure your website is fully responsive, providing an optimal viewing experience across all devices.'
    ]
  },
  {
    title: 'E-Commerce Development',
    description: 'For businesses looking to sell products or services online, our e-commerce development services include:',
    points: [
      'Platform Selection: Choose the best e-commerce platform for your needs, whether it\'s Shopify, WooCommerce, Magento, or another solution.',
      'Custom Shopping Cart: Develop a user-friendly and secure shopping cart that enhances the purchasing experience.',
      'Payment Gateway Integration: Integrate secure payment gateways to facilitate smooth transactions.',
      'Product Management: Implement robust product management systems to easily add, update, and manage your inventory.',
      'Order Tracking: Enable order tracking functionality to keep customers informed about their purchases.'
    ]
  },
  {
    title: 'CMS Development',
    description: 'A Content Management System (CMS) allows you to easily manage and update your website content. Our CMS development services include:',
    points: [
      'Platform Expertise: Develop websites on popular CMS platforms like WordPress, Joomla, and Drupal.',
      'Custom Templates: Create custom templates and themes that match your brand\'s aesthetic and functionality needs.',
      'User-Friendly Interface: Design an intuitive backend interface for easy content management without technical expertise.',
      'Plugin Integration: Integrate essential plugins and extensions to enhance your website\'s functionality.'
    ]
  },
  {
    title: 'Web Application Development',
    description: 'For businesses requiring more complex solutions, our web application development services include:',
    points: [
      'Custom Web Apps: Develop tailored web applications that address specific business needs and workflows.',
      'SaaS Solutions: Create Software as a Service (SaaS) applications that can be accessed and used over the internet.',
      'API Development: Develop and integrate APIs to ensure seamless interaction between different software systems.',
      'Cloud Integration: Utilize cloud services to enhance the scalability and accessibility of your web applications.'
    ]
  }
];

const maintenanceServices = [
  { title: 'Regular Updates', description: 'Keep your website\'s software, plugins, and themes updated to the latest versions.', icon: '🔄' },
  { title: 'Security Monitoring', description: 'Implement and monitor security measures to protect your website from threats.', icon: '🛡️' },
  { title: 'Performance Optimization', description: 'Ensure fast load times and a smooth user experience.', icon: '⚡' },
  { title: 'Content Updates', description: 'Assist with regular content updates to keep your website fresh.', icon: '📰' },
  { title: 'Backup and Recovery', description: 'Perform regular backups and establish recovery protocols.', icon: '💾' }
];

const seoServices = [
  { title: 'Clean Code', description: 'Write clean, efficient code that enhances site speed and search engine crawlability.' },
  { title: 'Meta Tags Optimization', description: 'Optimize meta tags, titles, and descriptions to improve search rankings.' },
  { title: 'URL Structure', description: 'Create SEO-friendly URLs that include relevant keywords.' },
  { title: 'Mobile Optimization', description: 'Ensure your website is mobile-friendly with mobile-first indexing.' },
  { title: 'Schema Markup', description: 'Implement structured data to provide detailed content information.' }
];

const whyChooseUs = [
  { title: 'Expert Developers', description: 'Certified professionals with years of experience in web development.', icon: '🏆' },
  { title: 'Data-Driven', description: 'Every decision backed by analytics and performance insights.', icon: '📈' },
  { title: 'Custom Solutions', description: 'Tailored solutions that align with your unique brand identity.', icon: '🎯' },
  { title: 'Proven Results', description: '500+ successful websites with measurable performance for clients.', icon: '⭐' },
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

function WebDevHeroPage() {
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
      setActiveService((prev) => (prev + 1) % webDevServices.length);
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
          <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1773030455/grok-video-d319be8b-cfd8-4387-9380-8db92fb62533_u5ri8n.mp4" type="video/mp4" />
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
              <span>✦</span> Web Development Services
            </div>
            <h1 className="hero-title">
              <span className="line">Don't Just Post, Engage:</span>
              <span className="line highlight">Elevate Your Brand</span>
            </h1>
            <p className="hero-tagline">
              Build Powerful, Scalable, and User-Friendly Websites That Drive Real Results
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
            <h2>Web Development Services We Provide</h2>
            <p>Comprehensive web solutions tailored to your business needs</p>
          </motion.div>
          <div className="smm-platforms-grid">
            {webDevServices.map((service, index) => (
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
          {developmentDetails.map((detail, index) => (
            <motion.div 
              key={detail.title}
              className="smm-detail-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="smm-detail-header">
                <span className="smm-detail-icon">{webDevServices[index].icon}</span>
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

      <section className="smm-process-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Website Maintenance & Support</h2>
            <p>Keeping your website running at peak performance</p>
          </motion.div>
          <div className="smm-process-grid">
            {maintenanceServices.map((service, index) => (
              <motion.div 
                key={service.title}
                className="smm-process-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="maintenance-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-details-section">
        <div className="container">
          <motion.div 
            className="smm-detail-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="smm-detail-header">
              <span className="smm-detail-icon">🔍</span>
              <h3>SEO-Friendly Development</h3>
            </div>
            <p className="smm-detail-desc">Developing your website with SEO best practices in mind ensures better visibility on search engines. Our SEO-friendly development services include:</p>
            <ul className="smm-detail-list">
              {seoServices.map((service, i) => (
                <li key={i}><strong>{service.title}:</strong> {service.description}</li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
          </motion.div>
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
              <h2>Ready to Build Your Website?</h2>
              <p>Let's create a customized web development solution that drives results.</p>
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

export default WebDevHeroPage;
