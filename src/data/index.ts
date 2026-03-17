import type {
  Doctor,
  IArticle,
  IArticleCardProps,
  IPropBooking,
  IServices,
  ITestimonial,
  Services,
  Tag,
} from "../interfaces";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
export const inputBooking: IPropBooking[] = [
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
  {
    id: 3,
    label: "تطوير الويب المتقدم",
    href: "/category/advanced-web-development",
    active: true,
  },
  { id: 4, label: "بحث الكلمات المفتاحية", href: "/category/keyword-research" },
  {
    id: 5,
    label: "التسويق بالبريد الإلكتروني",
    href: "/category/email-marketing",
  },
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

export const articalCard: IArticleCardProps[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80",
    title:
      "بسم الله الرحمن الرحيم مالك يوم الدين اياك نعبد واياك نستعين اهدنا الصراط المستقيم صراط اللزين انعمت عليهم ",
    imageAlt: "بسم الله الرحمن الرحيم",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80",
    title:
      "بسم الله الرحمن الرحيم مالك يوم الدين اياك نعبد واياك نستعين اهدنا الصراط المستقيم صراط اللزين انعمت عليهم ",
    imageAlt: "بسم الله الرحمن الرحيم",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80",
    title:
      "بسم الله الرحمن الرحيم مالك يوم الدين اياك نعبد واياك نستعين اهدنا الصراط المستقيم صراط اللزين انعمت عليهم ",
    imageAlt: "بسم الله الرحمن الرحيم",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80",
    title:
      "بسم الله الرحمن الرحيم مالك يوم الدين اياك نعبد واياك نستعين اهدنا الصراط المستقيم صراط اللزين انعمت عليهم ",
    imageAlt: "بسم الله الرحمن الرحيم",
  },
];

export const services: IServices[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
    name: "الكشف العام",
    details:
      "فحص شامل للحالة الصحية العامة مع تقييم دقيق من أطباء متخصصين وإعداد تقرير طبي مفصل.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400",
    name: "الأشعة والتصوير الطبي",
    details:
      "خدمات أشعة متكاملة تشمل الأشعة السينية والرنين المغناطيسي والأشعة المقطعية بأحدث الأجهزة.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400",
    name: "تحاليل المختبر",
    details:
      "تحاليل دم وبول وأنسجة بدقة عالية مع ظهور النتائج خلال ساعات معدودة.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1571772996211-2912789b5a3a?w=400",
    name: "طب الأسنان",
    details:
      "علاج وتجميل الأسنان بأحدث التقنيات، يشمل الحشوات والتقويم والزراعة وتبييض الأسنان.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400",
    name: "طب العيون",
    details:
      "فحص وعلاج أمراض العيون وتصحيح النظر بالليزر مع توفير أحدث العدسات والنظارات الطبية.",
  },

  
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400",
    name: "العلاج الطبيعي",
    details:
      "جلسات علاج طبيعي متخصصة لإعادة التأهيل وعلاج آلام العظام والمفاصل والعضلات.",
  },
];

export const testimonials: ITestimonial[] = [
  {
    id: 1,
    name: "أحمد محمد السيد",
    profession: "مهندس معماري",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "خدمة ممتازة واحترافية عالية، تعاملت معهم في مشروع كبير وكانوا على قدر المسؤولية في كل خطوة. أنصح الجميع بالتعامل معهم بكل ثقة.",
  },
  {
    id: 2,
    name: "فاطمة علي حسن",
    profession: "طبيبة أسنان",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "تجربة رائعة من البداية للنهاية، الفريق محترف ومتعاون جداً. شعرت بالراحة والثقة طوال فترة التعامل معهم.",
  },
  {
    id: 3,
    name: "خالد عبد الرحمن",
    profession: "رجل أعمال",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    review:
      "من أفضل الشركات التي تعاملت معها، الدقة في المواعيد والالتزام بالعقود شيء نادر في السوق. سأستمر في التعامل معهم بالتأكيد.",
  },
  {
    id: 4,
    name: "منى إبراهيم عمر",
    profession: "مديرة تسويق",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "أعجبني جداً مستوى الشفافية والوضوح في التعامل، لا توجد أي تفاصيل مخفية. فريق عمل رائع وخدمة عملاء متميزة.",
  },
  {
    id: 5,
    name: "يوسف حمدي نصر",
    profession: "محامي",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    review:
      "تعاملت معهم في قضية معقدة وأبهرني مستوى الكفاءة والدقة. يمكن الاعتماد عليهم بشكل كامل في أصعب المواقف.",
  },
  {
    id: 6,
    name: "سارة محمود طه",
    profession: "مصممة جرافيك",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    review:
      "خدمة احترافية بامتياز، الفريق يفهم احتياجات العميل ويعمل بجد لتحقيقها. النتيجة دائماً تفوق التوقعات.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "ما هي أوقات العمل في العيادة؟",
    answer:
      "العيادة مفتوحة من السبت إلى الخميس من الساعة ٩ صباحاً حتى ٩ مساءً، وأيام الجمعة من ٤ عصراً حتى ٩ مساءً.",
  },
  {
    id: 2,
    question: "كيف يمكنني حجز موعد؟",
    answer:
      "يمكنك حجز موعدك بسهولة عن طريق الاتصال بنا على الرقم الموجود في صفحة التواصل، أو من خلال نموذج الحجز الإلكتروني على موقعنا.",
  },
  {
    id: 3,
    question: "هل تقبلون التأمين الطبي؟",
    answer:
      "نعم، نتعامل مع معظم شركات التأمين الطبي. يُرجى التواصل معنا مسبقاً للتأكد من تغطية تأمينك قبل الزيارة.",
  },
  {
    id: 4,
    question: "ما هي التخصصات المتوفرة في العيادة؟",
    answer:
      "تضم عيادتنا تخصصات متعددة منها الباطنة، طب الأطفال، الجلدية، العظام، وطب الأسنان. كل تخصص له طاقم طبي متخصص وذو خبرة عالية.",
  },
  {
    id: 5,
    question: "كم تستغرق مدة الانتظار عادةً؟",
    answer:
      "نحرص على احترام وقت مرضانا، ومتوسط وقت الانتظار لا يتجاوز ١٥ دقيقة للمواعيد المحجوزة مسبقاً.",
  },
  {
    id: 6,
    question: "هل تتوفر خدمة الكشف المنزلي؟",
    answer:
      "نعم، نوفر خدمة الزيارات المنزلية لحالات معينة وللمرضى الذين يصعب عليهم التنقل. يمكن التواصل معنا لترتيب الزيارة.",
  },
  {
    id: 7,
    question: "هل يمكنني الاطلاع على نتائج التحاليل إلكترونياً؟",
    answer:
      "نعم، نوفر خدمة إرسال نتائج التحاليل والأشعة عبر البريد الإلكتروني أو واتساب بعد مراجعة الطبيب المختص.",
  },
  {
    id: 8,
    question: "ما هي إجراءات الطوارئ في العيادة؟",
    answer:
      "يتوفر لدينا خط طوارئ على مدار الساعة للحالات الحرجة، كما يوجد طاقم طبي مدرب للتعامل مع الطوارئ داخل العيادة فور وصول المريض.",
  },
];
export const navlinks = [
  { id: 1, label: "الرئيسية", href: "" },
  { id: 2, label: "من نحن", href: "about" },
  { id: 3, label: "خدماتنا", href: "services" },
  { id: 5, label: "المدونة", href: "blog" },
  { id: 6, label: "تواصل معنا", href: "contact" },
  { id: 4, label: "الاسئلة الشائعه", href: "qa" },
];
export const contactData = [
  {
    icon: FaPhone,
    address: "+20 100 123 4567",
    sizeIcone: 24,
  },
  {
    icon: FaMapMarkerAlt,
    address: "شارع التحرير، المعادي، القاهرة",
    sizeIcone: 24,
  },
  {
    icon: FaEnvelope,
    address: "info@clinic.com",
    sizeIcone: 24,
  },
  {
    icon: FaClock,
    address: "السبت - الخميس: ٩ص - ٩م",
    sizeIcone: 24,
  },
];

