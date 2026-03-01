
import AddressPage from "../ui/AddressPage";
import BlogCard from "../ui/BlogCard";

interface IProps {}
const CirclePage: React.FC<IProps> = () => {
  return (
    <div className="" id="blog">
      <AddressPage address={"المقالات"} title={"بعض المقالات "} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <BlogCard
        title={"كيف تحافظ على صحة أسنانك يومياً"}
        description={
          "نصائح ذهبية من أطباء الأسنان للحفاظ على ابتسامة صحية وجميلة وتجنب مشاكل التسوس واللثة على المدى الطويل"
        }
        image={
          "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800"
        }
        date={"١٥ يناير ٢٠٢٥"}
        author={"د. أحمد السيد"}
        views={1240}
        comments={38}
        authetImage={"https://randomuser.me/api/portraits/men/32.jpg"}
      />

      <BlogCard
        title={"أعراض السكري المبكرة وكيف تكتشفها"}
        description={
          "تعرف على العلامات التحذيرية الأولى لمرض السكري وأهمية الكشف المبكر في السيطرة على المرض وتجنب المضاعفات الخطيرة"
        }
        image={
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
        }
        date={"٢٢ يناير ٢٠٢٥"}
        author={"د. فاطمة علي"}
        views={980}
        comments={25}
        authetImage={"https://randomuser.me/api/portraits/women/44.jpg"}
      />

      <BlogCard
        title={"ضغط الدم الصامت.. الخطر الخفي"}
        description={
          "لماذا يُسمى ضغط الدم المرتفع بالقاتل الصامت؟ وكيف تحمي نفسك منه بتغييرات بسيطة في نمط حياتك اليومي"
        }
        image={
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800"
        }
        date={"٣ فبراير ٢٠٢٥"}
        author={"د. خالد عبد الرحمن"}
        views={2100}
        comments={54}
        authetImage={"https://randomuser.me/api/portraits/men/55.jpg"}
      />

      <BlogCard
        title={"التغذية السليمة لتقوية المناعة"}
        description={
          "الأطعمة والفيتامينات الضرورية التي يحتاجها جسمك لتعزيز جهاز المناعة والوقاية من الأمراض الموسمية طوال العام"
        }
        image={
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800"
        }
        date={"١٠ فبراير ٢٠٢٥"}
        author={"د. منى إبراهيم"}
        views={760}
        comments={19}
        authetImage={"https://randomuser.me/api/portraits/women/68.jpg"}
      />

      <BlogCard
        title={"متى تزور الطبيب؟ لا تتجاهل هذه الأعراض"}
        description={
          "أعراض يتجاهلها كثيرون ظناً أنها بسيطة لكنها قد تكون إشارة لمشاكل صحية خطيرة تستوجب زيارة الطبيب فوراً"
        }
        image={
          "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800"
        }
        date={"١٨ فبراير ٢٠٢٥"}
        author={"د. يوسف حمدي"}
        views={1450}
        comments={47}
        authetImage={"https://randomuser.me/api/portraits/men/77.jpg"}
      />
      </div>
    </div>
  );
};
export default CirclePage;
