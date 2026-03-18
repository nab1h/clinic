import { useState } from "react";
import { navlinks } from "../../data";
import { NavHashLink } from "react-router-hash-link";
import { useNavigate, useParams } from "react-router-dom";
interface IProps {
  logo: string;
  clinicName?: string;
}
const Navbar: React.FC<IProps> = ({ logo, clinicName = "عيادتنا" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {clinicSlug} = useParams<{clinicSlug: string}>();
  const navigate = useNavigate();
  return (
    <nav
      dir="rtl"
      className="bg-white shadow-md fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={()=>navigate(`/${clinicSlug}`)} >
          <img
            src={logo}
            alt="logo"
            className="h-12 w-12 object-contain rounded-full"
          />
          <span className="text-xl font-bold text-[var(--color-primary)]">
            {clinicName}
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-6">
          {navlinks.map((link) => (
            <li key={link.label}>
              <NavHashLink
                smooth
                to={`/${clinicSlug}/${link.href}`}
                className={({ isActive }) => {
                  const currentPath = window.location.pathname;
                  const expectedPath = `/${clinicSlug}${link.href ? `/${link.href}` : ''}`;
                  const isExactMatch = currentPath === expectedPath;
                  const hashMatch = window.location.hash ===
                    (link.href.includes("#") ? `#${link.href.split("#")[1]}` : "");
                  return `text-sm transition-colors duration-200 font-medium pb-1 ${
                    isExactMatch && hashMatch
                      ? "text-blue-600 font-bold border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }`;
                }}
              >
                {link.label}
              </NavHashLink>
            </li>
          ))}
        </ul>
        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href={`/${clinicSlug}/booking`}
            className="bg-[var(--color-primary)] hover:bg-[var(--hover-primary)] text-white text-sm font-bold px-5 py-2 rounded-full transition-all duration-200"
          >
            احجز موعد
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-3 mt-3">
            {navlinks.map((link) => (
              <li key={link.label}>
                <NavHashLink
            smooth
            to={`/${clinicSlug}/${link.href}`}
            className={({ isActive }) => {
              const currentPath = window.location.pathname;
              const expectedPath = `/${clinicSlug}${link.href ? `/${link.href}` : ''}`;
              const isExactMatch = currentPath === expectedPath;
              const hashMatch = window.location.hash === (link.href.includes('#') ? `#${link.href.split('#')[1]}` : '');
              return `block py-3 text-sm font-medium transition-all ${
                isExactMatch && hashMatch
                ? "text-blue-600 bg-blue-50 px-3 rounded-md"
                : "text-gray-600 hover:text-blue-600 px-3"
              }`;
            }}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </NavHashLink>
              </li>
            ))}
          </ul>
          <a
            href={`/${clinicSlug}/booking`}
            className="mt-4 block text-center bg-[var(--color-primary)] text-white text-sm font-bold px-5 py-2 rounded-full"
          >
            احجز موعد
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
