import type { Tag } from "../../../interfaces";
import { defaultTags } from "../../../data";
interface TagCloudProps {
  title?: string;
  tags?: Tag[];
}
const TagCloud=({
  title = "سحابة الوسوم",
  tags = defaultTags,
}: TagCloudProps)=>{
  return (
    <div
      dir="rtl"
      className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden font-sans"
      style={{ fontFamily: "'Cairo', 'Tajawal', sans-serif" }}
    >
      {/* Decorative top bar */}
      <div className="h-1 w-16 bg-cyan-400 mx-auto mt-3 rounded-full" />

      <div className="p-5">
        {/* Title */}
        <div className="mb-4 p-4">
          <h3
            className="text-lg font-bold text-cyan-500 tracking-wide uppercase border-b-2 border-cyan-400 pb-2 inline-block"
            style={{ letterSpacing: "0.05em" }}
          >
            {title}
          </h3>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag.id}
              className="
                px-4 py-2 rounded-md text-sm font-semibold text-white
                bg-cyan-400 hover:bg-cyan-500
                transition-all duration-200
                hover:scale-105 hover:shadow-md
                active:scale-95
                cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-cyan-300
              "
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TagCloud;
/*
  ===================== طريقة الاستخدام =====================

  1. مع Next.js (App Router أو Pages Router):
     import TagCloud from "@/components/TagCloud";

     export default function Page() {
       const myTags = [
         { id: 1, label: "تصميم", href: "/tags/design" },
         { id: 2, label: "تطوير", href: "/tags/development" },
       ];
       return <TagCloud title="سحابة الوسوم" tags={myTags} />;
     }

  2. مع React Router:
     استبدل:
       import { useRouter } from "next/navigation";
       const router = useRouter();
       router.push(href);
     بـ:
       import { useNavigate } from "react-router-dom";
       const navigate = useNavigate();
       navigate(href);

  ============================================================
*/
