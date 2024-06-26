import React, { useState, useEffect } from 'react';
import './Confessions.css';
import { Link } from 'react-router-dom';
import Navbardesk from './Navbar';

const confessions = [
  {
    id: 1,
    message: "To- Snehal Gohad You were the 1st person I consulted regarding joining IITGN, and it was one of the best decisions made. You helped me in multiple things and guided me over many trivial situations. Now as you will be going to Japan, I hope to see you soon after 2 years at the same company just following your path of success.-Kunal",
  },
  {
    id: 2,
    message: "For Insha Mansuri, You are one of the sweetest and kindest seniors I have ever interacted with in my time here. Wishing you a great journey ahead",
  },
  {
    id: 3,
    message: "For Insha Mansuri, You are one of the sweetest and kindest seniors I have ever interacted with in my time here. Wishing you a great journey ahead",
  },
  {
    id: 4,
    message: "For Insha Mansuri, You are one of the sweetest and kindest seniors I have ever interacted with in my time here. Wishing you a great journey ahead",
  },
  {
    id: 5,
    message: "For Insha Mansuri, You are one of the sweetest and kindest seniors I have ever interacted with in my time here. Wishing you a great journey ahead",
  },
  {
    id: 6,
    message: "For Insha Mansuri, You are one of the sweetest and kindest seniors I have ever interacted with in my time here. Wishing you a great journey ahead",
  },
];

const Confessions = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
    {!isMobile && <Navbardesk />}
      <div className="confessions-container">
        <Link to="/" className="back-button">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <h2 className="confessions-title">Confessions</h2>
        <div className="confessions-list">
          {confessions.map((confession) => (
            <div className="confession-item" key={confession.id}>
              <p>{confession.message}</p>
            </div>
          ))}
        </div>
      </div>
    {isMobile && <Navbardesk />}
    </>
  );
};

export default Confessions;
