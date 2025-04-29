import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyInvestSection from './components/WhyInvestSection';
import ClinicShowcase from './components/ClinicShowcase';
import BusinessModelsSection from './components/BusinessModelsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProcessSection from './components/ProcessSection';
import ResourcesSection from './components/ResourcesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import LeadForm from './components/LeadForm';
import ThankYou from './pages/ThankYou';
import RoiCalculator from './pages/RoiCalculator';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

function HomePage() {
  useEffect(() => {
    document.title = "DamaFace | Franquia de Estética";
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {});
      });
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="font-sans"
    >
      <Header />
      <HeroSection />
      <WhyInvestSection />
      <ClinicShowcase />
      <BusinessModelsSection />
      <TestimonialsSection />
      <ProcessSection />
      <ResourcesSection />
      <LeadForm />
      <CTASection />
      <Footer />
    </motion.div>
  );
}

function AppContent() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/obrigado" element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.4 }}
          >
            <ThankYou />
          </motion.div>
        } />
        <Route path="/calculadora-de-roi" element={
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.4 }}
          >
            <RoiCalculator />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;