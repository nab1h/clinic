import AddressPage from "../ui/AddressPage";
import CardService from "../ui/CardService";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { IService } from "../../interfaces";
import { getServices } from "../../api/services";

const ServicePage = () => {
  const navigate = useNavigate();
  const { clinicSlug } = useParams<{ clinicSlug: string }>();
  const baseURL = import.meta.env.VITE_API_URL;

  const { data: services = [], isLoading, error } = useQuery<IService[]>({
    queryKey: ["services", clinicSlug],
    queryFn: () => getServices(clinicSlug || "default"),
    enabled: !!clinicSlug,
  });

  if (isLoading) return <p className="text-center py-10">جارٍ التحميل...</p>;
  if (error) return <p className="text-center py-10 text-red-500">حدث خطأ أثناء تحميل الخدمات</p>;

  return (
    <div className="min-h-screen my-20" id="services">
      <AddressPage address="الخدمات" title="تعرف علي خدمتنا" color="cyan" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.length > 0 ? (
          services.map((service) => (
            <CardService
              key={service.id}
              onClick={() => {
                navigate(`/${clinicSlug}/service/${service.id}`);
              }}
              id={service.id}
              image={service.image ? `${baseURL}/storage/${service.image}` : "https://via.placeholder.com/400x300/13C5CC/ffffff?text=Service"}
              address={service.name}
              desc={service.description}
            />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">لا توجد خدمات متاحة.</p>
        )}
      </div>
    </div>
  );
};
export default ServicePage;
