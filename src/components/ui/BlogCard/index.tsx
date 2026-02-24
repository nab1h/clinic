import { BiSolidComment } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight, BsEye } from "react-icons/bs";
import { descSlice } from "../../../until";
import { useState } from "react";

interface IComment {
  id: number;
  author: string;
  authorImage: string;
  content: string;
  date: string;
}
const COMMENTS_PER_PAGE = 2; // عدد الكومنتات في كل صفحة
interface IProps {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  views: number;
  comments: number;
  authetImage: string;
  commentsList?: IComment[];
}
const BlogCard = ({
  title,
  description,
  image,
  date,
  author,
  views,
  comments,
  authetImage,
  commentsList,
}: IProps) => {
  const hasComments = commentsList && commentsList.length > 0;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = hasComments
    ? Math.ceil(commentsList.length / COMMENTS_PER_PAGE)
    : 0;

  const paginatedComments = hasComments
    ? commentsList.slice(
        (currentPage - 1) * COMMENTS_PER_PAGE,
        currentPage * COMMENTS_PER_PAGE
      )
    : [];

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* ===== Blog Card ===== */}
      <div className="overflow-hidden flex flex-col items-start bg-[var(--primary-bg-light)] rounded-2xl shadow-md">
        {/* Image */}
        <div className="w-full h-auto relative">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-2 left-2">
            <p className="text-gray-500 text-sm bg-[var(--primary-bg-light)] px-3 py-1 rounded-full shadow">
              {date}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-2 my-4 px-5 w-full text-right">
          <a href="#" className="w-full">
            <h2 className="text-3xl my-2 font-bold text-black hover:text-[var(--primary-cyan)] transition-all duration-300 text-right">
              {title}
            </h2>
          </a>
          <p className="text-gray-500 leading-relaxed antialiased my-2">
            {descSlice(description, 120)}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 w-full border-t border-gray-200 py-4 px-5">
          <div className="flex items-center gap-3">
            <img
              src={authetImage}
              alt={author}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[var(--primary-cyan)]"
            />
            <p className="text-gray-600 font-medium">{author}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-500 text-sm">
              {views} <BsEye className="text-[var(--primary-cyan)]" />
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-sm">
              {comments}
              <BiSolidComment className="text-[var(--primary-cyan)]" />
            </span>
          </div>
        </div>
      </div>

      {/* ===== Comments Section ===== */}
      {hasComments && (
        <div className="mt-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4 px-1">
            <BiSolidComment className="text-[var(--primary-cyan)] text-xl" />
            <h3 className="text-lg font-bold text-gray-800">
              التعليقات{" "}
              <span className="text-sm font-normal text-gray-400">
                ({commentsList.length})
              </span>
            </h3>
          </div>

          {/* Comments List */}
          <div className="flex flex-col gap-4">
            {paginatedComments.map((comment) => (
              <div
                key={comment.id}
                className="flex gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-[2px]"
              >
                <img
                  src={comment.authorImage}
                  alt={comment.author}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-gray-100"
                />
                <div className="flex flex-col gap-1 w-full text-right">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{comment.date}</span>
                    <span className="font-semibold text-gray-800 text-sm">
                      {comment.author}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ===== Pagination ===== */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
      
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:bg-[var(--primary-cyan)] hover:text-white hover:border-[var(--primary-cyan)] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <BsChevronRight className="text-sm" />
              </button>

      
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-9 h-9 rounded-full text-sm font-medium transition-all duration-200 border ${
                    currentPage === page
                      ? "bg-[var(--primary-cyan)] text-white border-[var(--primary-cyan)] shadow-md scale-110"
                      : "border-gray-200 text-gray-600 hover:border-[var(--primary-cyan)] hover:text-[var(--primary-cyan)]"
                  }`}
                >
                  {page}
                </button>
              ))}

              
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 text-gray-500 hover:bg-[var(--primary-cyan)] hover:text-white hover:border-[var(--primary-cyan)] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <BsChevronLeft className="text-sm" />
              </button>
            </div>
          )}

        
          {totalPages > 1 && (
            <p className="text-center text-xs text-gray-400 mt-2">
              صفحة {currentPage} من {totalPages}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogCard;
