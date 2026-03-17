import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

// ✅ Interface متوافقة مع بيانات الـ API
interface IApiTestimonial {
  id: number;
  clinic_id: number;
  name: string;
  job_title: string;
  message: string;
  stars: number;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
}

interface IProps {
  testimonials: IApiTestimonial[];
}

const TestimonialCard = ({ testimonials }: IProps) => {
  return (
    <div className="w-full mx-auto py-16 px-6 -mx-16">
      <Swiper
        className="!flex !flex-row"
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center pb-12">

              {/* صورة العميل — Avatar تلقائي من الاسم */}
              <div className="relative mb-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=00bcd4&color=fff&size=112`}
                  alt={item.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                />
                {/* أيقونة الاقتباس */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#00bcd4]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.17 6A5.001 5.001 0 0 0 2 11c0 2.76 2.24 5 5 5 .34 0 .67-.04 1-.1V17a4 4 0 0 1-4 4H3v2h1a6 6 0 0 0 6-6v-6.1C10 8.28 8.76 6 7.17 6zm10 0A5.001 5.001 0 0 0 12 11c0 2.76 2.24 5 5 5 .34 0 .67-.04 1-.1V17a4 4 0 0 1-4 4h-1v2h1a6 6 0 0 0 6-6v-6.1C20 8.28 18.76 6 17.17 6z" />
                  </svg>
                </div>
              </div>

              {/* النجوم */}
              <div className="flex gap-1 mt-6 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-xl ${star <= item.stars ? "text-amber-400" : "text-gray-200"}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* نص الرأي */}
              <p className="text-gray-500 text-center leading-relaxed text-base mt-2 mb-6 max-w-xl">
                {item.message} {/* ✅ كان item.review */}
              </p>

              {/* الخط الفاصل */}
              <div className="w-24 border-t border-gray-300 mb-4" />

              {/* الاسم والمهنة */}
              <h4 className="font-bold text-gray-800 text-lg">{item.name}</h4>
              <p className="text-[#00bcd4] text-sm mt-1">{item.job_title}</p> {/* ✅ كان item.profession */}

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Pagination Styles */}
      <style>{`
        .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: transparent;
          border: 2px solid #9ca3af;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #00bcd4;
          border-color: #00bcd4;
          width: 18px;
          height: 18px;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCard;