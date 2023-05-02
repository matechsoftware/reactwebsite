import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 790) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <footer>
        <div className="row">
          <div className="col-full">
            <div className="footer-logo">
              <a className="footer-site-logo" href="#0">
                <img alt="" src={logo} />
              </a>
            </div>

            <ul className="footer-social">
              <li>
                <a
                  href="https://www.linkedin.com/company/matech-software"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="im im-linkedin" aria-hidden="true"></i>
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@matech-software.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="im im-mail" aria-hidden="true"></i>
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright MaTech Software GbR 2023</span>
            </div>
            <div className="copyright">
              <span>
                <Link to="/impressum">Impressum</Link>
              </span>
              <span>
                <Link to="/datenschutz">Datenschutz</Link>
              </span>
            </div>

            <div
              className="go-top"
              style={{
                display: isScrolled ? 'block' : 'none',
                animation: isScrolled
                  ? 'fadeIn 800ms linear'
                  : 'fadeOut 800ms linear',
              }}
            >
              <a title="Back to Top" href="#top">
                <i className="im im-arrow-up" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
