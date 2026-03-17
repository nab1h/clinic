import React, { useEffect, useState } from "react";
import { navlinks } from "../../data";
import type { SocialLink } from "../../interfaces";
import { getSocialLinks } from "../../api/links";
import { useParams } from "react-router-dom";
import {
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaTelegram,
  FaLinkedin,
  FaSnapchat,
  FaLink
} from "react-icons/fa";
interface IProp {
  address: string | undefined;
  phone: string | undefined;
  emailAddress: string | undefined;
}
const Footer: React.FC<IProp> = ({ address, phone, emailAddress }) => {
  const iconMap = {
    facebook: FaFacebook,
    whatsapp: FaWhatsapp,
    youtube: FaYoutube,
    instagram: FaInstagram,
    twitter: FaTwitter,
    tiktok: FaTiktok,
    telegram: FaTelegram,
    linkedin: FaLinkedin,
    snapchat : FaSnapchat,
  };
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [links, setLinks] = useState<SocialLink[]>([]);
  const { clinicSlug } = useParams<{ clinicSlug: string }>();
  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  useEffect(() => {
    if (!clinicSlug) return;

    getSocialLinks(clinicSlug).then(setLinks);
  }, [clinicSlug]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');
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
          <div>
            <div className="footer-section-title">تواصل معنا</div>
            <p className="contact-desc">
              لا تتردد في التواصل معنا لأي استفسار أو طلب. فريقنا جاهز لمساعدتك
              في أي وقت ويسعدنا خدمتك.
            </p>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <span>{address}</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>{emailAddress}</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.53 15.53 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              <span>‎+{phone}</span>
            </div>
          </div>

          <div>
            <div className="footer-section-title">روابط سريعة</div>
            <ul className="links-list">
              {navlinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href}>
                    <span className="link-arrow">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

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
            <div className="social-icons w-full flex flex-wrap justify-center items-center gap-6 mt-4 overflow-hidden">
              {links
                .filter((link) => link.is_active)
                .map((link) => {
                  const Icon =
                    iconMap[link.type as keyof typeof iconMap] || FaLink;

                  return (
                    <a key={link.id} href={link.url} target="_blank" className="text-4xl hover:scale-110 transition">
                      <Icon />
                    </a>
                  );
                })}
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <span>
              © <a href={links.find((t) => t.type === "website")?.url || "#"}>{clinicSlug}</a>. جميع الحقوق
              محفوظة.
            </span>
            <span>
              تصميم بواسطة <a href="https://nabih.online">Nabih Alashmawy</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
