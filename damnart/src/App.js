import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import ServicesPage from './ServicesPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import PPCHeroPage from './PPCHeroPage';
import SMMHeroPage from './SMMHeroPage';

const services = [
  { title: 'PPC', description: 'Drive targeted traffic to your website and increase conversions with PPC ads.', icon: '💰', link: '/ppc' },
  { title: 'SMM', description: 'Grow your brand awareness and engagement on social media platforms.', icon: '📱', link: '/smm' },
  { title: 'Web Development', description: 'Craft a user-friendly, high-performing website to achieve your business goals.', icon: '🌐', link: '/#contact' },
  { title: 'Content Writing', description: 'Create compelling content that engages your audience and boosts conversions.', icon: '✍️', link: '/#contact' },
  { title: 'Graphic Designing', description: 'Design eye-catching visuals that effectively communicate your brand message.', icon: '🎨', link: '/#contact' },
  { title: 'SEO', description: 'Improve your search ranking and attract qualified leads organically.', icon: '🔍', link: '/#contact' },
  { title: 'Training Courses', description: "We offers a wide range of training courses in Digital Marketing and AI Tools", icon: '📚', link: '/#contact' },
  { title: 'Digital Marketing Audit', description: 'Maximize ROI with a Data-Driven Digital Marketing Performance Audit', icon: '📊', link: '/#contact' },
  { title: 'Data Mining', description: 'Extract Actionable Insights with Advanced Data Mining Solutions!', icon: '⛏️', link: '/#contact' },
  { title: 'Lead Generation', description: 'Generate High-Quality Leads & Boost Conversions Effortlessly', icon: '🎯', link: '/#contact' },
  { title: 'Pay Per Valid', description: 'Maximize ROI with a Data-Driven Digital Marketing Performance Audit', icon: '✅', link: '/#contact' },
  { title: 'Influencer Marketing', description: 'Extract Actionable Insights with Advanced Data Mining Solutions', icon: '🌟', link: '/#contact' },
];

const clients = [
  { name: 'Download', logo: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011847/download-r8u9244d5sey0vsilnhsk9yc99lsbfacjuwj2kdi8k_ge3qxe.png' },
  { name: 'Himalayan', logo: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011860/Himalayan-Infinite-Possibility-Final-Logo-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_sljqey.png' },
  { name: 'ITC', logo: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011873/itc-logo-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_e7eq5a.png' },
  { name: 'RR', logo: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011895/RR-logo-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_gvpizu.png' },
  { name: 'SF Training', logo: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011936/SF-Training-Final-Logo-1080-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_u19o47.png' },
  { name: 'Med', logo: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011955/med.logol_-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_kgw1m1.png' },
  { name: 'Euro', logo: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772011979/euro.1-r6dasn0nsmrlh6keg3mlunl46zbloqtltj7mcfd85w_qqciz2.png' },
  { name: 'EuroTech Canada', logo: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1772012214/eurotech-canda.1-r6daspu6d4vgg0gazmuhk4vhz4xpbu4stx62s991n8_ugsvud.png' },
];

const testimonials = [
  {
    name: 'ITC INDIA',
    company: 'Product Testing Laboratory',
    quote: 'The team was very helpful and provided a very good service.',
    summary: "DamnArt has successfully generated over 70 high-quality leads for the client, optimized their LinkedIn profile, and increased their revenue. The team has been professional, timely, and collaborative. Their transparent reporting and regular review meetings have led to the client's satisfaction."
  },
  {
    name: 'Sustainable Futures Trainings, Canada',
    company: 'ISO and QMS Training Providers',
    quote: 'Weekly reports were provided, and everything was done through collaboration.',
    summary: "Thanks to DamnArt's efforts, more than 100 leads were generated from the campaigns they developed. The team was highly collaborative and receptive to concerns, and internal stakeholders were particularly impressed with the service provider's cost-effective solutions and clear communication skills."
  },
  {
    name: 'EuroTech',
    company: 'Assessment and Certification Service Providers',
    quote: 'The team collaborated with us at every step.',
    summary: "With DamnArt's help, 50 quality leads were generated at a high-cost value, which helped grow the business. The team collaborated closely with the client at every project stage, and their timeliness and punctuality impressed internal stakeholders immensely."
  },
  {
    name: 'MedDevices LifeSciences, Netherlands',
    company: 'Leading Certification Body in Medical and Electromedical devices',
    quote: "DamnArt's punctuality, regular communication, detailed reports, and affordable pricing were impressive.",
    summary: "DamnArt's efforts resulted in 40 high-quality leads, meeting expectations. Their communicative and responsive approach ensured a smooth partnership. Beyond their top-notch customer service skills, their affordable pricing complemented their technical expertise."
  },
  {
    name: 'Lab Care, USA',
    company: 'Providers of Testing Project Management Consultancy Services',
    quote: 'The team was very professional and transparent.',
    summary: "The campaign generated around 20 high-quality leads for the client. DamnArt also improved the client's website, making it more interactive and appealing. The team was professional, transparent, and communicative. They delivered items on time and responded well to the client's needs."
  }
];

const faqs = [
  { question: 'Why is digital marketing important for my business?', answer: 'Digital marketing helps you reach a larger audience, engage with customers, improve brand visibility, and drive sales. It is cost-effective and allows for precise targeting and measurement of results.' },
  { question: 'How does SEO help my business?', answer: 'SEO improves your website visibility in search engine results, driving organic traffic and building long-term credibility for your business.' },
  { question: 'What is PPC and how does it work?', answer: <><Link to="/ppc">PPC</Link> (Pay-Per-Click) is an advertising model where you pay for each click on your ad. It's a quick way to drive targeted traffic to your website.</> },
  { question: 'How can social media marketing benefit my brand?', answer: 'Social media marketing enhances brand awareness, engages with your audience, drives website traffic, and can lead to increased sales. It also provides valuable insights into customer behavior and preferences.' },
  { question: 'How do you measure the success of a digital marketing campaign?', answer: 'We measure success through key metrics including traffic, conversion rates, ROI, engagement rates, and lead quality using advanced analytics tools.' },
  { question: 'How long does it take to see results from digital marketing?', answer: 'Results vary by strategy. PPC can show immediate results, while SEO typically takes 3-6 months for significant improvements.' },
  { question: 'Do you offer customized digital marketing plans?', answer: 'Yes! We create tailored strategies based on your business goals, target audience, and budget to maximize your ROI.' },
];

const blogs = [
  { title: 'The Most Dangerous Marketing Hack That Actually Works', image: '🚀' },
  { title: 'What If You Had Only 10 Words to Sell Your Product?', image: '💬' },
  { title: 'The Role of Blockchain in Digital Marketing', image: '⛓️' },
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
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

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

function Hero() {
  const serviceTags = [
    { name: 'PPC', link: '/ppc' },
    { name: 'SMM', link: '/smm' },
    { name: 'Web Development', link: '/#contact' },
    { name: 'Content Writing', link: '/#contact' },
    { name: 'Graphic Designing', link: '/#contact' },
    { name: 'SEO', link: '/#contact' },
    { name: 'Data Mining', link: '/#contact' },
    { name: 'Lead Generation', link: '/#contact' },
    { name: 'Newsletter Automation with AI', link: '/#contact' },
    { name: 'Digital Marketing Audit', link: '/#contact' },
  ];

  return (
    <section id="home" className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1772253161/grok-video-c2d455ef-9ee0-420a-8d87-a69c258a4cde_istqnb.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-badge">
            <span>✦</span> Digital Marketing Agency
          </div>
          <h1 className="hero-title">
            <span className="line">DamnArt:</span>
            <span className="line">Your <span className="highlight">Digital</span></span>
            <span className="line">Growth Partner!</span>
          </h1>
          <p className="hero-tagline">
            Elevate your Brand with Tailored Strategies in <Link to="/ppc">PPC</Link>, <Link to="/smm">SMM</Link>, and Web Design. 
            Partner with us for measurable results and impactful growth in the digital world.
          </p>
          <div className="hero-tags">
            {serviceTags.map((tag, index) => (
              <motion.span 
                key={tag.name}
                className="hero-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link to={tag.link} style={{ color: 'inherit', textDecoration: 'none' }}>{tag.name}</Link>
              </motion.span>
            ))}
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">Get Started</a>
            <a href="#services" className="btn-secondary">Our Services</a>
          </div>
          <p className="hero-motto">Strategize • Optimize • Grow</p>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services">
      <video autoPlay loop muted playsInline className="section-video">
        <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1771995146/grok-video-398db3a3-aea4-488b-bcda-0941158279fb_uf50j3.mp4" type="video/mp4" />
      </video>
      <div className="section-overlay"></div>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Our Specialized Services</h2>
          <p>Comprehensive digital solutions tailored to your business needs</p>
        </motion.div>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link to={service.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🎯' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '50+', label: 'Global Partners', icon: '🌍' },
    { number: '24/7', label: 'Support Available', icon: '💬' },
  ];

  const platforms = [
    { name: 'Google Ads', img: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1771835684/11_pxyd0i.png' },
    { name: 'SEMrush', img: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1771835715/22_ta4up3.png' },
    { name: 'UberSuggest', img: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1771835799/33_ubhwg6.png' },
    { name: 'Facebook Ads', img: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1771835841/44_benav5.png' },
    { name: 'Google Analytics', img: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1771836013/55_m8e4gd.png' },
    { name: 'Google Tag Manager', img: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1771836051/66_pxacyf.png' },
    { name: 'Clarity', img: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1771836089/77_zvkijm.png' },
    { name: 'Pabbly Connect', img: 'https://res.cloudinary.com/dadofd9d2/image/upload/v1771836169/88_awco23.png' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Want to Know Us Better?</h2>
            <p>Download DamnArt's Services Portfolio to discover what more we have to offer! We specialize in creating tailored digital strategies that drive real results for businesses worldwide.</p>
            <a href="#" className="btn-primary download-btn">
              <span className="download-icon">📥</span>
              Download Brochure
            </a>
          </motion.div>
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="about-card">
              <div className="about-card-glow"></div>
              <div className="about-stat-main">
                <span className="about-stat-number">500+</span>
                <span className="about-stat-label">Projects Completed</span>
              </div>
              <div className="about-card-accent"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="tech-platforms"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="platforms-header">
            <h2>Technology Platforms</h2>
            <p>We work with industry-leading platforms to deliver exceptional results</p>
          </div>
          <div className="platforms-grid">
            {platforms.map((platform, index) => (
              <motion.div 
                key={platform.name}
                className="platform-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.08, y: -8 }}
              >
                <div className="platform-card-inner">
                  <img src={platform.img} alt={platform.name} className="platform-img" />
                  <span className="platform-name">{platform.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Our Clients</h2>
          <p>Trusted by leading brands worldwide</p>
        </motion.div>
        <div className="clients-showcase">
          {clients.map((client, index) => (
            <motion.div 
              key={client.name}
              className="client-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="client-logo-wrapper">
                <img src={client.logo} alt={client.name} className="client-img" />
              </div>
              <span className="client-name">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blogs() {
  const blogPosts = [
    {
      title: 'The Most Dangerous Marketing Hack That Actually Works',
      image: '🚀',
      category: 'Marketing',
      date: 'Feb 2026'
    },
    {
      title: 'What If You Had Only 10 Words to Sell Your Product?',
      image: '💬',
      category: 'Sales',
      date: 'Feb 2026'
    },
    {
      title: 'The Role of Blockchain in Digital Marketing',
      image: '⛓️',
      category: 'Technology',
      date: 'Jan 2026'
    },
    {
      title: 'AI-Powered Customer Engagement Strategies',
      image: '🤖',
      category: 'AI',
      date: 'Jan 2026'
    },
    {
      title: 'Social Media Trends That Will Dominate 2026',
      image: '📱',
      category: 'Social Media',
      date: 'Jan 2026'
    },
    {
      title: 'How to Build a Personal Brand from Scratch',
      image: '✨',
      category: 'Branding',
      date: 'Dec 2025'
    }
  ];

  return (
    <section id="blogs" className="blogs">
      <video autoPlay loop muted playsInline className="section-video">
        <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1771929678/grok-video-838ba238-888a-4d2f-9712-9fec6652b0cf_x2f4yt.mp4" type="video/mp4" />
      </video>
      <div className="section-overlay"></div>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Latest Blogs</h2>
          <p>Insights and trends from the digital marketing world</p>
        </motion.div>
        
        <div className="blogs-showcase">
          <motion.div 
            className="blog-featured"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="blog-featured-image">{blogPosts[0].image}</div>
            <div className="blog-featured-content">
              <span className="blog-category">{blogPosts[0].category}</span>
              <span className="blog-date">{blogPosts[0].date}</span>
              <h3>{blogPosts[0].title}</h3>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </motion.div>

          <div className="blogs-sidebar">
            {blogPosts.slice(1).map((blog, index) => (
              <motion.div 
                key={blog.title}
                className="blog-mini"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="blog-mini-image">{blog.image}</div>
                <div className="blog-mini-content">
                  <span className="blog-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-date">{blog.date}</span>
                  </span>
                  <h4>{blog.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Let's Work Together</h2>
          <p>Share Your Details and We'll Do the Rest!</p>
        </motion.div>
        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
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
              {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>What service are you interested in?</label>
            <select name="service" value={formData.service} onChange={handleChange}>
              <option value="">Select a service</option>
              {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project" rows="4"></textarea>
          </div>
          <button type="submit" className="btn-primary">Submit</button>
        </motion.form>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <video autoPlay loop muted playsInline className="section-video">
        <source src="https://res.cloudinary.com/dadofd9d2/video/upload/v1771930165/grok-video-28cb7077-148b-47bf-9a96-3a5e84b1dec1_k4yn6q.mp4" type="video/mp4" />
      </video>
      <div className="section-overlay"></div>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>FAQ</h2>
          <p>Common questions about our services</p>
        </motion.div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div>{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src="https://shareables-prod-static.clutch.co/badges/top_clutch.co_wordpress_seo_company_canada_2026.svg" alt="Clutch Award" className="clutch-badge" />
          <h2>Client Testimonials</h2>
          <p>Check What Our Clients say About Us on <a href="https://clutch.co" target="_blank" rel="noopener noreferrer">Clutch</a></p>
        </motion.div>
        <div className="testimonials-carousel">
          <motion.div 
            key={current}
            className="testimonial-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div className="testimonial-header">
              <span className="testimonial-company">{testimonials[current].name}</span>
              <span className="testimonial-role">{testimonials[current].company}</span>
            </div>
            <blockquote className="testimonial-quote">"{testimonials[current].quote}"</blockquote>
            <p className="testimonial-summary">{testimonials[current].summary}</p>
          </motion.div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
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
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="App">
            <AnimatedBackground />
            <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <Hero />
            <Services />
            <About />
            <Clients />
            <Blogs />
            <Contact />
            <FAQ />
            <Testimonials />
            <Footer />
          </div>
        } />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ppc" element={<PPCHeroPage />} />
        <Route path="/smm" element={<SMMHeroPage />} />
      </Routes>
    </Router>
  );
}

export default App;
