// src/components/pages/Blog/ArticlePage.tsx
import { useState } from "react";
import { BiSolidComment } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight, BsEye } from "react-icons/bs";
import type { IAddComment, IArticle, ICreateCommentResponse } from "../../../interfaces";
import { useNavigate, useParams } from "react-router-dom";
import TagCloud from "../../ui/TagCloud";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getArticles } from "../../../api/articles";
import { createComment, fetchComments } from "../../../api/comments";
import toast from "react-hot-toast";
import { formatDate } from "../../../until";

const COMMENTS_PER_PAGE = 2;

const ArticlePage = () => {
  // ======================= Hooks - MUST be called first =======================
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { clinicSlug } = useParams<{ clinicSlug: string }>();

  const { data: articles, isLoading: loadingArticles, error: articlesError } = useQuery<IArticle[]>({
    queryKey: ["articles", clinicSlug],
    queryFn: () => getArticles(clinicSlug || "default"),
    enabled: !!clinicSlug,
  });

  const { data: commentsData = [], refetch } = useQuery<IAddComment[]>({
    queryKey: ["comments", Number(id)],
    queryFn: () => fetchComments(clinicSlug!, Number(id)),
    enabled: !!clinicSlug && !!id,
  });

  const totalPages = Math.ceil(commentsData.length / COMMENTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedComments = commentsData.slice(
    (currentPage - 1) * COMMENTS_PER_PAGE,
    currentPage * COMMENTS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  interface IAddCommentPayload {
    article_id: number;
    guest_name: string;
    body: string;
  }

  const { mutate, isPending } = useMutation<ICreateCommentResponse, Error, IAddCommentPayload>({
    mutationFn: (data) => createComment(clinicSlug || "default", data),
    onSuccess: (response) => {
      toast.success(response.message || "تم إضافة التعليق بنجاح");
      refetch();
    },
    onError: (error) => {
      toast.error("فشل إرسال التعليق، حاول مرة أخرى");
      console.error("Comment error:", error);
    },
  });

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !content.trim()) return;

    mutate({
      article_id: Number(id),
      guest_name: name,
      body: content,
    });

    setName("");
    setContent("");
  };

  // ======================= Conditional Logic =======================
  const url_api = import.meta.env.VITE_API_URL;
  const article = articles?.find((item) => item.id.toString() === id);

  // Early returns AFTER all hooks
  if (loadingArticles) return <p className="mt-20 text-center">جاري تحميل المقالات...</p>;
  if (articlesError) return <p className="mt-20 text-center">حدث خطأ أثناء جلب المقالات!</p>;
  if (!article) return <p className="mt-20 text-center">المقال غير موجود</p>;

  // ======================= Render =======================
  return (
    <div dir="rtl" className="mt-20 flex flex-col md:flex-row gap-6 px-4 md:px-8 min-h-screen">

      {/* ===== المحتوى الرئيسي ===== */}
      <div className="max-w-3xl w-full mx-auto px-4 md:px-8 pb-16 flex-1">

        {/* Article Image */}
        <div className="rounded-2xl overflow-hidden shadow-md mb-6">
          <img src={`${url_api}/storage/${article.featured_image}`} alt={article.title} className="w-full h-72 object-cover" />
        </div>

        {/* Article Meta */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img src={"/img/person_14981315.png"} alt={clinicSlug} className="w-11 h-11 rounded-full object-cover ring-2 ring-[#13C5CC]" />
            <div>
              <p className="font-bold text-gray-800 text-sm">{clinicSlug}</p>
              <p className="text-xs text-gray-400">{formatDate(article.created_at)}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span className="flex items-center gap-1">{49} <BsEye className="text-[#13C5CC]" /></span>
            <span className="flex items-center gap-1">{commentsData.length} <BiSolidComment className="text-[#13C5CC]" /></span>
          </div>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-5">{article.title}</h1>

        {/* Article Body */}
        <div className="text-gray-600 leading-relaxed whitespace-pre-line text-base mb-10">
          {article.body}
        </div>

        {/* Comments Section */}
        <div className="border-t pt-8">
          <div className="flex items-center gap-2 mb-6">
            <BiSolidComment className="text-[#13C5CC] text-xl" />
            <h3 className="text-lg font-bold text-gray-800">
              التعليقات <span className="text-sm font-normal text-gray-400">({commentsData.length})</span>
            </h3>
          </div>

          {/* Comments List */}
          <div className="flex flex-col gap-4">
            {paginatedComments.map((comment) => (
              <div key={comment.id} className="flex gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-[2px] transition-all duration-300">
                <img src={"/img/person_14981315.png"} alt={comment.guest_name} className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-gray-100" />
                <div className="flex flex-col gap-1 w-full text-right">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{formatDate(comment.created_at)}</span>
                    <span className="font-semibold text-gray-800 text-sm">{comment.guest_name}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{comment.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
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
          )}

          {/* Comment Form */}
          <div className="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h4 className="text-lg font-bold text-gray-800 mb-5">أضف تعليقك</h4>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="أدخل اسمك"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#13C5CC] focus:border-transparent transition"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="اكتب تعليقك هنا..."
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#13C5CC] focus:border-transparent transition resize-none"
              />
              <button
                onClick={handleSubmit}
                disabled={!name.trim() || !content.trim() || isPending}
                className="w-full bg-[#13C5CC] hover:bg-[#0fb0b7] disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-3 rounded-xl transition-all duration-200 text-sm disabled:cursor-not-allowed"
              >
                {isPending ? "جاري الإرسال..." : "إرسال التعليق"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Sidebar ===== */}
      <aside className="flex flex-col gap-3 w-full md:w-72 md:shrink-0 mt-20 pb-16">
        <h2 className="text-lg font-bold text-gray-700 mb-2 border-b pb-2">المقالات</h2>
        {articles?.map((blog: IArticle) => (
          <button
            key={blog.id}
            onClick={() => {
              navigate(`/${clinicSlug}/artical/${blog.id}`);
            }}
            className={`flex items-center gap-3 text-right px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border w-full
              ${id === blog.id.toString()
                ? "bg-[#13C5CC] text-white border-[#13C5CC]"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#13C5CC] hover:text-[#13C5CC]"
              }`}
          >
            <img
              src={`${url_api}/storage/${blog.featured_image}`}
              alt={blog.title}
              className="w-12 h-12 rounded-lg object-cover shrink-0"
            />
            <span className="flex-1 leading-snug">{blog.title}</span>
          </button>
        ))}
        <TagCloud />
      </aside>
    </div>
  );
};

export default ArticlePage;
