import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

import heroBg from '../assets/hero-image.jpeg';
import heroImg from '../assets/hero-background.jpg';
import indexing1 from '../assets/indexing1.jpg';
import indexing2 from '../assets/indexing2.jpeg';
import indexing3 from '../assets/indexing3.png';
import indexing4 from '../assets/indexing4.png';

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="home-hero enhanced-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-right">
            <h2>Welcome to IJRETA</h2>
            <h1>Your Gateway to UGC Approved Journal Publications</h1>
            <p className="hero-subtitle">
              IJRETA is a UGC-approved multidisciplinary journal publishing peer-reviewed papers in engineering and technology, connecting researchers globally.
            </p>
          </div>
          <div className="hero-image" data-aos="fade-left">
            <img src={heroImg} alt="Research Collaboration" />
          </div>
        </div>
      </section>

      {/* About IJRETA */}
      <section className="about-section container glass-effect">
        <h3 data-aos="fade-up">Purpose & Vision</h3>
        <p data-aos="fade-up">
          IJRETA aims to promote innovation, bridge academia and industry, and foster sustainable development through interdisciplinary research in engineering and technology. The journal welcomes contributions in fields such as AI, IoT, Cybersecurity, Robotics, Renewable Energy, and more.
        </p>
      </section>

      {/* Indexing Logos */}
      <section className="indexing-section container glass-effect">
        <h3 data-aos="zoom-in">Indexed By</h3>
        <div className="indexing-logos" data-aos="fade-up">
          {[indexing1, indexing2, indexing3, indexing4].map((img, idx) => (
            <img key={idx} src={img} alt={`Indexing-${idx}`} className="indexing-img" />
          ))}
        </div>
      </section>

      {/* Mission Highlights */}
      <section className="mission-section container glass-effect">
        <h3 data-aos="fade-up">Our Mission</h3>
        <ul data-aos="fade-up">
          <li>Promote multidisciplinary and impactful research</li>
          <li>Encourage real-world applications of innovation</li>
          <li>Support open, ethical publishing practices</li>
          <li>Connect researchers globally for collaboration</li>
        </ul>
      </section>

      {/* Submission Process */}
      <section className="submission-process container glass-effect">
        <h3 data-aos="fade-up">Paper Submission Process</h3>
        <div className="steps-grid">
          {["1. Prepare your manuscript", "2. Submit your paper", "3. Review by experts", "4. Pay publication fees", "5. Get published & receive certificate"].map((step, index) => (
            <motion.div key={index} className="step" whileHover={{ scale: 1.08 }}>
              {step}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-carousel glass-effect">
        <h3 data-aos="fade-up">What Authors Say</h3>
        <div className="testimonial-wrapper">
          {[
            {
              quote: "Fast and smooth publication process! Highly recommend IJRETA for conference and journal submissions.",
              author: "- Dr. Rupam Bhagawati, PRESIDENCY UNIVERSITY"
            },
            {
              quote: "IJRETA provides high visibility to my research with UGC and Scopus indexing.",
              author: "- Dr. Nagaraja S R, PRESIDENCY UNIVERSITY"
            }
          ].map((testi, index) => (
            <motion.div
              key={index}
              className="testimonial"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.5 }}
            >
              <p>“{testi.quote}”</p>
              <span>{testi.author}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-banner glass-effect">
        <marquee>UGC Approved Journal | Fast Track Publication | High Impact Factor (8.01 - 2024) | editor@ijreta.org</marquee>
      </div>

      {/* Footer */}
      <footer className="footer glass-effect">
        <p>© 2024 IJRETA - All Rights Reserved | Contact: editor@ijreta.org</p>
      </footer>

      {/* Chatbot Button */}
      <div className="chatbot-toggle" onClick={() => setShowChatbot(!showChatbot)}>
        <MessageCircle size={28} />
      </div>

      {/* Chatbot Frame */}
      {showChatbot && (
        <div className="chatbot-frame">
          <iframe
            title="chatbot"
            src="/chatbot"
            width="350"
            height="450"
            style={{ border: 'none', borderRadius: '12px' }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Home;
