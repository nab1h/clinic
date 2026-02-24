import React, { useState } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    "الرئيسية",
    "من نحن",
    "خدماتنا",
    "فريق العمل",
    "أحدث المقالات",
    "تواصل معنا",
  ];

  const popularLinks = [
    "الرئيسية",
    "من نحن",
    "خدماتنا",
    "فريق العمل",
    "أحدث المقالات",
    "تواصل معنا",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .footer-wrapper {
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          background-color: #1a2744;
          color: #cdd9f0;
        }

        .footer-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 24px 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        @media (max-width: 900px) {
          .footer-main {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .footer-main {
            grid-template-columns: 1fr;
          }
        }

        .footer-section-title {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #ffffff;
          text-transform: uppercase;
          margin-bottom: 18px;
          padding-bottom: 10px;
          border-bottom: 2px solid #00b4d8;
          display: inline-block;
        }

        /* GET IN TOUCH */
        .contact-desc {
          font-size: 0.88rem;
          line-height: 1.8;
          color: #9ab0cc;
          margin-bottom: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-size: 0.88rem;
          color: #cdd9f0;
        }

        .contact-icon {
          width: 20px;
          height: 20px;
          fill: #00b4d8;
          flex-shrink: 0;
        }

        /* LINKS */
        .links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .links-list li a {
          text-decoration: none;
          color: #9ab0cc;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.25s, padding-right 0.25s;
        }

        .links-list li a:hover {
          color: #00b4d8;
          padding-right: 4px;
        }

        .link-arrow {
          color: #00b4d8;
          font-size: 0.75rem;
        }

        /* NEWSLETTER */
        .newsletter-input-row {
          display: flex;
          margin-bottom: 24px;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid #2e4070;
        }

        .newsletter-input {
          flex: 1;
          padding: 12px 14px;
          background: #243258;
          color: #ffffff;
          border: none;
          outline: none;
          font-family: 'Cairo', sans-serif;
          font-size: 0.85rem;
          direction: rtl;
        }

        .newsletter-input::placeholder {
          color: #6b85a8;
        }

        .newsletter-btn {
          padding: 12px 18px;
          background: #00b4d8;
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: 'Cairo', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          white-space: nowrap;
          transition: background 0.25s;
        }

        .newsletter-btn:hover {
          background: #0096b4;
        }

        .newsletter-success {
          color: #00e5a0;
          font-size: 0.82rem;
          margin-top: -16px;
          margin-bottom: 16px;
        }

        .follow-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #00b4d8;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .social-icons {
          display: flex;
          gap: 10px;
        }

        .social-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, opacity 0.2s;
          cursor: pointer;
          text-decoration: none;
        }

        .social-icon:hover {
          transform: translateY(-3px);
          opacity: 0.85;
        }

        .si-twitter  { background: #1da1f2; }
        .si-facebook { background: #1877f2; }
        .si-linkedin { background: #0a66c2; }
        .si-instagram { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }

        .social-icon svg {
          width: 18px;
          height: 18px;
          fill: #fff;
        }

        /* BOTTOM BAR */
        .footer-bottom {
          background: #14203a;
          padding: 18px 24px;
        }

        .footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 0.82rem;
          color: #7a90b0;
        }

        .footer-bottom a {
          color: #00b4d8;
          text-decoration: none;
        }

        .footer-bottom a:hover {
          text-decoration: underline;
        }
      `}</style>

      <footer className="footer-wrapper">
        <div className="footer-main">
          {/* تواصل معنا */}
          <div>
            <div className="footer-section-title">تواصل معنا</div>
            <p className="contact-desc">
              لا تتردد في التواصل معنا لأي استفسار أو طلب. فريقنا جاهز لمساعدتك
              في أي وقت ويسعدنا خدمتك.
            </p>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
              <span>١٢٣ شارع النيل، القاهرة، مصر</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>info@example.com</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.53 15.53 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
              <span>‎+20 123 456 7890</span>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <div className="footer-section-title">روابط سريعة</div>
            <ul className="links-list">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#">
                    <span className="link-arrow">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* روابط شائعة */}
          <div>
            <div className="footer-section-title">روابط شائعة</div>
            <ul className="links-list">
              {popularLinks.map((link) => (
                <li key={link}>
                  <a href="#">
                    <span className="link-arrow">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* النشرة البريدية */}
          <div>
            <div className="footer-section-title">النشرة البريدية</div>
            <div className="newsletter-input-row">
              <input
                className="newsletter-input"
                type="email"
                placeholder="بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              />
              <button className="newsletter-btn" onClick={handleSubscribe}>
                اشترك
              </button>
            </div>
            {subscribed && (
              <p className="newsletter-success">✓ تم الاشتراك بنجاح!</p>
            )}
            <p className="follow-title">تابعنا</p>
            <div className="social-icons">
              <a href="#" className="social-icon si-twitter" aria-label="Twitter">
                <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.43.36a9 9 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.48 4.48 0 00-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 01-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.55 4.55 0 01-2.04.08c.57 1.79 2.24 3.09 4.21 3.12A9.06 9.06 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85l-.01-.58A9.17 9.17 0 0023 3z"/></svg>
              </a>
              <a href="#" className="social-icon si-facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.324C24 .593 23.407 0 22.676 0"/></svg>
              </a>
              <a href="#" className="social-icon si-linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="social-icon si-instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <span>
              © <a href="#">اسم موقعك</a>. جميع الحقوق محفوظة.
            </span>
            <span>
              تصميم بواسطة <a href="#">HTML Codex</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
