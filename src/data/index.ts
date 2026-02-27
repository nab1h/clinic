import type { Doctor, IArticleCardProps, Services, Tag } from "../interfaces";

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


export const defaultCategories: Services[] = [
  { id: 1, label: "تصميم المواقع", href: "/category/web-design" },
  { id: 2, label: "تطوير الويب", href: "/category/web-development" },
  { id: 3, label: "تطوير الويب المتقدم", href: "/category/advanced-web-development", active: true },
  { id: 4, label: "بحث الكلمات المفتاحية", href: "/category/keyword-research" },
  { id: 5, label: "التسويق بالبريد الإلكتروني", href: "/category/email-marketing" },
];

export const defaultTags: Tag[] = [
  { id: 1, label: "تصميم", href: "/tags/design" },
  { id: 2, label: "تطوير", href: "/tags/development" },
  { id: 3, label: "تسويق", href: "/tags/marketing" },
  { id: 4, label: "سيو", href: "/tags/seo" },
  { id: 5, label: "كتابة", href: "/tags/writing" },
  { id: 6, label: "استشارات", href: "/tags/consulting" },
  { id: 7, label: "تصميم جرافيك", href: "/tags/graphic-design" },
  { id: 8, label: "تطوير ويب", href: "/tags/web-dev" },
  { id: 9, label: "تسويق رقمي", href: "/tags/digital-marketing" },
  { id: 10, label: "سيو متقدم", href: "/tags/advanced-seo" },
  { id: 11, label: "كتابة إبداعية", href: "/tags/creative-writing" },
  { id: 12, label: "استشارات أعمال", href: "/tags/business" },
];


export const articalCard:IArticleCardProps[] = [
  {
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80',
    title: 'بسم الله الرحمن الرحيم مالك يوم الدين اياك نعبد واياك نستعين اهدنا الصراط المستقيم صراط اللزين انعمت عليهم ',
    imageAlt: 'بسم الله الرحمن الرحيم'
  },
  {
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80',
    title: 'بسم الله الرحمن الرحيم مالك يوم الدين اياك نعبد واياك نستعين اهدنا الصراط المستقيم صراط اللزين انعمت عليهم ',
    imageAlt: 'بسم الله الرحمن الرحيم'
  },
  {
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80',
    title: 'بسم الله الرحمن الرحيم مالك يوم الدين اياك نعبد واياك نستعين اهدنا الصراط المستقيم صراط اللزين انعمت عليهم ',
    imageAlt: 'بسم الله الرحمن الرحيم'
  },
  {
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80',
    title: 'بسم الله الرحمن الرحيم مالك يوم الدين اياك نعبد واياك نستعين اهدنا الصراط المستقيم صراط اللزين انعمت عليهم ',
    imageAlt: 'بسم الله الرحمن الرحيم'
  },
]