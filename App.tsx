
import React, { useEffect } from 'react';
import Header from './components/Header';
import Biography from './components/Biography';
import Artworks from './components/Artworks';
import Studies from './components/Studies';
import Reference from './components/Reference';
import Exhibitions from './components/Exhibitions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  // Effect to trigger reveal animations on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: Stop observing once revealed
          // observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-white">
      <Header />
      <Biography />
      <Artworks />
      <Studies />
      <Reference />
      <Exhibitions />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
