import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TestimonialCard from "../ui/TestimonialCard";
import AddressPage from "../ui/AddressPage";
import TestimonialForm from "../ui/TestimonialForm";

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

const TestimonialPage: React.FC = () => {
  const { clinicSlug } = useParams<{ clinicSlug: string }>();
  const [testimonials, setTestimonials] = useState<IApiTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/${clinicSlug}/customer-reviews`;
        const res = await axios.get(url);
        setTestimonials(res.data);
      } catch (err) {
        console.error("خطأ في جلب التقييمات:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (clinicSlug) fetchTestimonials();
  }, [clinicSlug]);

  return (
    <div className="" id="testimonial">
      <AddressPage address={"أراء عملائنا"} title={"تعرف علي اراء عملائنا"} />

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="w-10 h-10 border-4 border-[#00bcd4] border-t-transparent rounded-full animate-spin" />
        </div>
      ) : error ? (
        <p className="text-center text-red-400 py-10">حدث خطأ أثناء تحميل التقييمات</p>
      ) : testimonials.length === 0 ? (
        <p className="text-center text-gray-400 py-10">لا توجد تقييمات بعد</p>
      ) : (
        <TestimonialCard testimonials={testimonials} />
      )}

      <TestimonialForm />
    </div>
  );
};

export default TestimonialPage;