
// import { articles } from "../../data";
import { useQuery } from "@tanstack/react-query";
import AddressPage from "../ui/AddressPage";
import BlogCard from "../ui/BlogCard";
import { useNavigate, useParams } from "react-router-dom";
import type { IArticle } from "../../interfaces";
import { getArticles } from "../../api/articles";
import { formatDate } from "../../until";

interface IProps {}
const CirclePage: React.FC<IProps> = () => {
  const navigate = useNavigate();
  const {clinicSlug} = useParams<{clinicSlug: string}>();
  const randomMath = ()=>{
    return Math.floor(Math.random() * 151);}
  const url_api= import.meta.env.VITE_API_URL;
  const { data, isLoading, error } = useQuery<IArticle[]>({
      queryKey: ["articles", clinicSlug],
      queryFn: () => getArticles(clinicSlug || "default"),
      enabled: !!clinicSlug,
  });
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="my-20" id="blog" >
      <AddressPage address={"المقالات"} title={"بعض المقالات "} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {data?.map((blog)=>(
            <BlogCard
            key={blog.id}
            onClick={() => navigate(`/${clinicSlug}/artical/${blog.id}`)}
            title={blog.title}
            description={
              blog.body
            }
            image={`${url_api}/storage/${blog.featured_image}`}
            date={formatDate(blog.created_at)}
            author={clinicSlug}
            views={randomMath()}
            comments={blog.comments.length}
            authetImage={"/img/person_14981315.png"}
          />
        ))}
      </div>
    </div>
  );
};
export default CirclePage;
