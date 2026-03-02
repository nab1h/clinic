import { useState } from "react";
import { articalCard } from "../../../data";
import type { IArticleCardProps } from "../../../interfaces";
import ArticlePage from "./ArticalPage";

const BlogLayout = () => {
  const [selectedId, setSelectedId] = useState<number>(articalCard[0].id);


  return (
    <div dir="rtl" className="mt-20 flex flex-col md:flex-row gap-6 px-4 md:px-8 min-h-screen">

<ArticlePage />

      {/* Sidebar */}
      <aside className="flex flex-col gap-3 w-full md:w-72 md:shrink-0 order-2 md:order-1">
        <h2 className="text-lg font-bold text-gray-700 mb-2 border-b pb-2">المقالات</h2>
        {articalCard.map((blog: IArticleCardProps) => (
          <button
            key={blog.id}
            onClick={() => setSelectedId(blog.id)}
            className={`text-right px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border
              ${selectedId === blog.id
                ? "bg-[#13C5CC] text-white border-[#13C5CC]"
                : "bg-white text-gray-600 border-gray-200 hover:border-[#13C5CC] hover:text-[#13C5CC]"
              }`}
          >
            {blog.title}
          </button>
        ))}
      </aside>

    </div>
  );
};

export default BlogLayout;