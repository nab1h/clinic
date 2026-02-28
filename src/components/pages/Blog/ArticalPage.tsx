import { useState } from "react";
import { BiSolidComment } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight, BsEye } from "react-icons/bs";

interface IComment {
  id: number;
  author: string;
  authorImage: string;
  content: string;
  date: string;
}

interface IArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  authorImage: string;
  views: number;
  comments: IComment[];
}

const article: IArticle = {
  id: 1,
  title: "كيف تحافظ على صحتك في فصل الشتاء",
  description: `مع قدوم فصل الشتاء، تزداد معدلات الإصابة بالأمراض الموسمية كالإنفلونزا ونزلات البرد، لذا يصبح من الضروري اتخاذ خطوات وقائية للحفاظ على صحتنا وصحة أسرتنا.

أولاً: تعزيز جهاز المناعة
يُعد تناول الأطعمة الغنية بفيتامين C من أهم الخطوات لتقوية المناعة، كالبرتقال والليمون والكيوي. كما أن النوم الكافي لا يقل أهمية، إذ يحتاج الجسم إلى 7-8 ساعات من النوم يومياً ليتمكن من التجدد والقيام بوظائفه الدفاعية.

ثانياً: ممارسة الرياضة
لا تتوقف عن ممارسة الرياضة في الشتاء، بل يمكنك ممارستها داخل المنزل أو ارتداء ملابس مناسبة للخروج. المشي لمدة 30 دقيقة يومياً يكفي للحفاظ على نشاط الجسم وتحفيز الدورة الدموية.

ثالثاً: الترطيب الكافي
يظن كثيرون أن شرب الماء مهم فقط في الصيف، لكن الحقيقة أن الجسم يحتاج إلى الترطيب على مدار العام. في الشتاء، يمكن الاستعانة بالشاي الأخضر والمشروبات الدافئة.

رابعاً: الوقاية من العدوى
اغسل يديك بانتظام، وتجنب لمس وجهك، وابتعد عن الأشخاص المصابين بالزكام. هذه الخطوات البسيطة تقلل بشكل كبير من فرص الإصابة بالعدوى.`,
  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
  date: "١٥ يناير ٢٠٢٥",
  author: "د. أحمد السيد",
  authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
  views: 1240,
  comments: [
    { id: 1, author: "محمد علي", authorImage: "https://randomuser.me/api/portraits/men/45.jpg", content: "مقال رائع ومفيد جداً، استفدت منه كثيراً في الحفاظ على صحة عائلتي هذا الشتاء.", date: "١٦ يناير ٢٠٢٥" },
    { id: 2, author: "فاطمة حسن", authorImage: "https://randomuser.me/api/portraits/women/44.jpg", content: "شكراً دكتور على هذه النصائح القيمة، هل يمكن إضافة معلومات عن اللقاحات الموسمية؟", date: "١٧ يناير ٢٠٢٥" },
    { id: 3, author: "خالد عمر", authorImage: "https://randomuser.me/api/portraits/men/55.jpg", content: "نصيحة الترطيب في الشتاء مهمة جداً وكثير من الناس يغفلون عنها.", date: "١٨ يناير ٢٠٢٥" },
    { id: 4, author: "سارة محمود", authorImage: "https://randomuser.me/api/portraits/women/68.jpg", content: "أنصح الجميع بقراءة هذا المقال، معلومات علمية مقدمة بأسلوب سهل وبسيط.", date: "١٩ يناير ٢٠٢٥" },
    { id: 5, author: "يوسف حمدي", authorImage: "https://randomuser.me/api/portraits/men/77.jpg", content: "هل ينصح الدكتور بتناول مكملات فيتامين D في الشتاء؟", date: "٢٠ يناير ٢٠٢٥" },
  ],
};

const COMMENTS_PER_PAGE = 2;

const ArticlePage = () => {
  const [comments, setComments] = useState<IComment[]>(article.comments);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);

  const paginatedComments = comments.slice(
    (currentPage - 1) * COMMENTS_PER_PAGE,
    currentPage * COMMENTS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleSubmit = () => {
    if (!name.trim() || !content.trim()) return;
    const newComment: IComment = {
      id: comments.length + 1,
      author: name,
      authorImage: `https://randomuser.me/api/portraits/lego/${comments.length + 1}.jpg`,
      content,
      date: new Date().toLocaleDateString("ar-EG"),
    };
    setComments([...comments, newComment]);
    setName("");
    setContent("");
    setCurrentPage(Math.ceil((comments.length + 1) / COMMENTS_PER_PAGE));
  };

  return (
    <div dir="rtl" className="mt-20 max-w-3xl mx-auto px-4 md:px-8 pb-16">

      {/* Article Image */}
      <div className="rounded-2xl overflow-hidden shadow-md mb-6">
        <img src={article.image} alt={article.title} className="w-full h-72 object-cover" />
      </div>

      {/* Article Meta */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={article.authorImage} alt={article.author} className="w-11 h-11 rounded-full object-cover ring-2 ring-[#13C5CC]" />
          <div>
            <p className="font-bold text-gray-800 text-sm">{article.author}</p>
            <p className="text-xs text-gray-400">{article.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span className="flex items-center gap-1">{article.views} <BsEye className="text-[#13C5CC]" /></span>
          <span className="flex items-center gap-1">{comments.length} <BiSolidComment className="text-[#13C5CC]" /></span>
        </div>
      </div>

      {/* Article Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-5">{article.title}</h1>

      {/* Article Body */}
      <div className="text-gray-600 leading-relaxed whitespace-pre-line text-base mb-10">
        {article.description}
      </div>

      {/* Comments Section */}
      <div className="border-t pt-8">
        <div className="flex items-center gap-2 mb-6">
          <BiSolidComment className="text-[#13C5CC] text-xl" />
          <h3 className="text-lg font-bold text-gray-800">
            التعليقات <span className="text-sm font-normal text-gray-400">({comments.length})</span>
          </h3>
        </div>

        {/* Comments List */}
        <div className="flex flex-col gap-4">
          {paginatedComments.map((comment) => (
            <div key={comment.id} className="flex gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-[2px] transition-all duration-300">
              <img src={comment.authorImage} alt={comment.author} className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-gray-100" />
              <div className="flex flex-col gap-1 w-full text-right">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{comment.date}</span>
                  <span className="font-semibold text-gray-800 text-sm">{comment.author}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <>
            <div className="flex items-center justify-center gap-2 mt-6">
              <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:bg-[#13C5CC] hover:text-white hover:border-[#13C5CC] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed">
                <BsChevronRight className="text-sm" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => goToPage(page)} className={`w-9 h-9 rounded-full text-sm font-medium transition-all duration-200 border ${currentPage === page ? "bg-[#13C5CC] text-white border-[#13C5CC] shadow-md scale-110" : "border-gray-200 text-gray-600 hover:border-[#13C5CC] hover:text-[#13C5CC]"}`}>
                  {page}
                </button>
              ))}
              <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:bg-[#13C5CC] hover:text-white hover:border-[#13C5CC] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed">
                <BsChevronLeft className="text-sm" />
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">صفحة {currentPage} من {totalPages}</p>
          </>
        )}

        {/* Comment Form */}
        <div className="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h4 className="text-lg font-bold text-gray-800 mb-5">أضف تعليقك</h4>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">الاسم <span className="text-red-400">*</span></label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="أدخل اسمك"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#13C5CC] focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2">التعليق <span className="text-red-400">*</span></label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="اكتب تعليقك هنا..."
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#13C5CC] focus:border-transparent transition resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!name.trim() || !content.trim()}
              className="w-full bg-[#13C5CC] hover:bg-[#0fb0b7] disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm"
            >
              إرسال التعليق
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ArticlePage;