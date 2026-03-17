import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import type { Doctor } from "../../../interfaces";
import AddressPage from "../AddressPage";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../LoadingScreen";
import { getDoctors } from "../../../api/doctors";


interface IProps{
  name: string;
  specialty: string;
  description: string;
  image: string;
}
const DoctorCard: React.FC<IProps > = ({ name, specialty , description , image }) => {
  return (
    <div className="doctor-card">
      <div className="card-image-wrapper">
        <img src={image} alt={name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-specialty">{specialty}</p>
        <p className="doctor-desc">{description}</p>
        <div className="social-icons">
          <a href={""} className="social-btn twitter" aria-label="twitter">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.626L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
          <a href={""} className="social-btn facebook" aria-label="facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href={""} className="social-btn linkedin" aria-label="linkedin">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// ======= المكوّن الرئيسي للسلايدر =======
const DoctorsSlider: React.FC = () => {
  const { clinicSlug } = useParams<{ clinicSlug: string }>();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!clinicSlug) return;

    getDoctors(clinicSlug)
      .then(setDoctors)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [clinicSlug]);

  if (loading) return <LoadingScreen />;
  const baseURL = import.meta.env.VITE_API_URL;
  return (
    <section className="doctors-section overflow-hidden" dir="rtl">
      <AddressPage address={"فريق طبي"} title={"متخصصون"} />
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        navigation={{
          prevEl: ".swiper-btn-prev",
          nextEl: ".swiper-btn-next",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 2 },
        }}
        className="doctors-swiper"
      >
        {doctors.map((doctor: Doctor) => (
          <SwiperSlide key={doctor.id}>
            <DoctorCard  name={doctor.name} image={doctor.image ? `${baseURL}/storage/${doctor.image}` : "/default-doctor.png"} description={doctor.description} specialty={doctor.specialty}/>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-btn swiper-btn-prev" aria-label="السابق">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      <button className="swiper-btn swiper-btn-next" aria-label="التالي">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');

        .doctors-section {
          font-family: 'Tajawal', sans-serif;
          padding: 60px 0px;
          background: #f4f9fc;
          position: relative;

          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-badge {
          display: inline-block;
          background: rgba(0, 188, 188, 0.12);
          color: var(--cyan);
          font-size: 13px;
          font-weight: 500;
          padding: 6px 18px;
          border-radius: 20px;
          margin-bottom: 10px;
          letter-spacing: 0.5px;
        }

        .section-title {
          font-size: 32px;
          font-weight: 700;
          color: #1a2d4e;
          margin: 0;
        }

        /* ===== Doctor Card ===== */
        .doctor-card {
          display: flex;
          background: #eaf5f8;
          border-radius: 12px;
          overflow: hidden;
          min-height: 220px;
          box-shadow: 0 4px 20px rgba(0, 100, 150, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .doctor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0, 100, 150, 0.14);
        }

        .card-image-wrapper {
          width: 200px;
          min-width: 200px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .card-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.4s ease;
        }

        .doctor-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-content {
          padding: 24px 24px 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
          flex: 1;
        }

        .doctor-name {
          font-size: 20px;
          font-weight: 700;
          color: #1a2d4e;
          margin: 0;
        }

        .doctor-specialty {
          font-size: 14px;
          font-weight: 500;
          color: var(--cyan);
          font-style: italic;
          margin: 0;
        }

        .doctor-desc {
          font-size: 13.5px;
          color: #5a6e80;
          line-height: 1.7;
          margin: 4px 0 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .social-icons {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          flex-direction: row-reverse;
          justify-content: flex-end;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #00bcbc;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .social-btn:hover {
          background: #009999;
          transform: scale(1.1);
        }

        /* ===== Swiper ===== */
        .doctors-swiper {
          padding-bottom: 48px !important;
        }

        .swiper-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-70%);
          z-index: 10;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #00bcbc;
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 14px rgba(0, 188, 188, 0.35);
        }

        .swiper-btn:hover {
          background: #009999;
          transform: translateY(-70%) scale(1.08);
        }

        .swiper-btn-prev {
          left: -8px;
        }

        .swiper-btn-next {
          right: -8px;
        }

        .swiper-pagination-bullet {
          background: #00bcbc !important;
          opacity: 0.4;
        }

        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          background: #00bcbc !important;
        }

        @media (max-width: 600px) {
          .doctor-card {
            flex-direction: column;
          }
          .card-image-wrapper {
            width: 100%;
            min-width: unset;
            height: 200px;
          }
          .social-icons {
            flex-direction: row;
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default DoctorsSlider;
