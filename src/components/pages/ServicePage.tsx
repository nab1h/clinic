import AddressPage from "../ui/AddressPage";
import CardService from "../ui/CardService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IService } from "../../interfaces";
import axios from "axios";


const ServicePage = () => {
  const navigate = useNavigate();
  const { clinicSlug } = useParams<{ clinicSlug: string }>(); 
  const [services, setServices] = useState<IService[]>([]);
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_API_URL;

  const url = clinicSlug 
    ? `${baseURL}/api/${clinicSlug}/services` 
    : null;
  useEffect(() => {
    if (!url) {
      setLoading(false);
      return;
    }
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        if (Array.isArray(res.data)) {
            setServices(res.data);
        } else {
            console.error("API did not return an array:", res.data);
            setServices([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setServices([]);
      })
      .finally(() => setLoading(false));
  }, [url]);
  if (loading) return <p className="text-center py-10">جارٍ التحميل...</p>;
  return (
    <div className="min-h-screen my-20" id="services">
      <AddressPage address="الخدمات" title="تعرف علي خدمتنا" color="cyan" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.length > 0 ? (
          services.map((service) => (
            <CardService
              key={service.id}
              onClick={() => {
                navigate(`/service/${service.id}`);
              }}
              id={service.id}
              image={`${baseURL}/storage/${service.image}`}
              address={service.name}
              desc={service.description}
            />
          ))
        ) : (
          !loading && <p className="col-span-3 text-center text-gray-500">لا توجد خدمات متاحة.</p>
        )}
      </div>
    </div>
  );
};
export default ServicePage;