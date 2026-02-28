import { useState } from "react";

interface ITestimonialForm {
  name: string;
  profession: string;
  review: string;
  rating: number;
}

const TestimonialForm: React.FC = () => {
  const [form, setForm] = useState<ITestimonialForm>({
    name: "",
    profession: "",
    review: "",
    rating: 5,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.review) return;
    console.log("New testimonial:", form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", profession: "", review: "", rating: 5 });
    }, 3000);
  };

  return (
    <div
      dir="rtl"
      className="mt-6 max-w-xl mx-auto "
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="text-center mb-8">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-1">
          شاركنا رأيك
        </p>
        <h2 className="text-3xl font-bold text-[var(--color-primary)]">اكتب تجربتك معنا</h2>
      </div>

      {submitted ? (
        <div className="text-center py-12 px-6 bg-amber-50 rounded-2xl border border-amber-200">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">شكراً لمشاركتك!</h3>
          <p className="text-gray-500">رأيك وصلنا وسيُراجع قريباً</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-5">
          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              تقييمك
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setForm({ ...form, rating: star })}
                  className="text-3xl transition-transform hover:scale-110"
                >
                  <span className={star <= form.rating ? "text-amber-400" : "text-gray-200"}>
                    ★
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              الاسم الكامل <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="أحمد محمد"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
            />
          </div>

          {/* Profession */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              المهنة
            </label>
            <input
              type="text"
              placeholder="مهندس، طبيب، ..."
              value={form.profession}
              onChange={(e) => setForm({ ...form, profession: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition"
            />
          </div>

          {/* Review */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              رأيك <span className="text-red-400">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="شاركنا تجربتك..."
              value={form.review}
              onChange={(e) => setForm({ ...form, review: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition resize-none"
            />
            <p className="text-xs text-gray-400 mt-1 text-left">
              {form.review.length} / 300
            </p>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!form.name || !form.review}
            className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)] disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm"
          >
            إرسال الرأي
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialForm;