import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import AddressPage from "../AddressPage";
import { useParams } from "react-router-dom";
import type { FAQ } from "../../../interfaces";
import { getFAQs } from "../../../api/faq";
import LoadingScreen from "../../LoadingScreen";

const FAQAccordion = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };



  const { clinicSlug } = useParams<{ clinicSlug: string }>();
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!clinicSlug) return;

    setLoading(true);
    getFAQs(clinicSlug)
      .then((data) => setFaqs(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [clinicSlug]);

  if (loading) return <LoadingScreen />;
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      
      <AddressPage address="الأسئلة الشائعة" title="كل اللي عايز تعرفه في مكان واحد" />

      {/* Accordion Items */}
      <div className="flex flex-col gap-3">
      {faqs.filter(f => f.is_active).map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-[var(--color-primary)] shadow-md"
                  : "border-transparent bg-[var(--color-gray-light)]"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggle(faq.id)}
                className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-right transition-all duration-300 cursor-pointer ${
                  isOpen
                    ? "bg-[var(--color-primary)]"
                    : "bg-[var(--color-bg-light)] hover:bg-[var(--color-gray-light)]"
                }`}
              >
                <BsChevronDown
                  className={`flex-shrink-0 text-lg transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 text-white"
                      : "text-[var(--primary-cyan)]"
                  }`}
                />
                <span
                  className={`font-semibold text-base ${
                    isOpen ? "text-white" : "text-[var(--black)]"
                  }`}
                >
                  {faq.question}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-[var(--color-gray-dark)] text-sm leading-relaxed px-5 py-4 text-right bg-white">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
