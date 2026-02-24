import type { Doctor } from "../interfaces";
export const inputBooking = [
  {
    name: "name",
    type: "text",
    placeholder: "إسمك",
    label: "الاسم",
    required: true,
  },
  {
    name: "email",
    type: "email",
    placeholder: "البريد الإلكتروني",
    label: "البريد الإلكتروني",
    required: true,
  },
  {
    name: "age",
    type: "number",
    placeholder: "عمرك",
    label: "العمر",
    required: true,
  },
  {
    name: "phone",
    type: "tel",
    placeholder: "رقم هاتفك",
    label: "رقم الهاتف",
    required: true,
  },
  {
    name: "date",
    type: "date",
    placeholder: "تاريخ الحجز",
    label: "تاريخ الحجز",
    required: true,
  },
];

export const sampleDoctors: Doctor[] = [
  {
    id: 1,
    name: "د. سارة جونسون",
    specialty: "أخصائية أمراض القلب",
    description:
      "خبرة تزيد عن 12 سنة في طب القلب والأوعية الدموية، متخصصة في الوقاية من أمراض القلب وعلاج قصور القلب.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80",
    social: { twitter: "#", facebook: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "د. مايكل كارتر",
    specialty: "أخصائي أمراض القلب",
    description:
      "طبيب قلب معتمد متخصص في التدخلات القلبية وعلاج أمراض الشرايين التاجية المعقدة.",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&q=80",
    social: { twitter: "#", facebook: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "د. إيميلي تشن",
    specialty: "أخصائية الأعصاب",
    description:
      "طبيبة أعصاب متخصصة في الوقاية من السكتة الدماغية وأبحاث الأمراض التنكسية العصبية بنهج يركز على المريض.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80",
    social: { twitter: "#", facebook: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "د. جيمس ويلسون",
    specialty: "جراح عظام",
    description:
      "متخصص في جراحة المفاصل بالمنظار وإعادة تأهيل إصابات الرياضة بخبرة جراحية تتجاوز 15 سنة.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80",
    social: { twitter: "#", facebook: "#", linkedin: "#" },
  },
];
