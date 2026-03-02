import AddressPage from "../ui/AddressPage";
import CardService from "../ui/CardService";
import { services } from "../../data";
import { useNavigate } from "react-router-dom";

interface IProps {}

const ServicePage: React.FC<IProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen my-20" id="services">
      <AddressPage address="الخدمات" title="تعرف علي خدمتنا" color="cyan" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service) => (
          <CardService
            key={service.id}
            onClick={()=>{
              navigate(`/service/${service.id}`);
            }}
            id={service.id}
            image={service.image}
            address={service.name}
            desc={service.details}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
