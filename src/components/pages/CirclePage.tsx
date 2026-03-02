
import { articles } from "../../data";
import AddressPage from "../ui/AddressPage";
import BlogCard from "../ui/BlogCard";
import { useNavigate } from "react-router-dom";

interface IProps {}
const CirclePage: React.FC<IProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="my-20" id="blog" >
      <AddressPage address={"المقالات"} title={"بعض المقالات "} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {articles.map((blog)=>(
            <BlogCard
            key={blog.id}
            onClick={() => navigate(`/artical/${blog.id}`)}
            title={blog.title}
            description={
              blog.description
            }
            image={
             blog.image
            }
            date={blog.date}
            author={blog.author}
            views={blog.views}
            comments={blog.comments.length}
            authetImage={blog.authorImage}
          />
        ))}
      </div>
    </div>
  );
};
export default CirclePage;
