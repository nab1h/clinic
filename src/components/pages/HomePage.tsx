import { useParams } from "react-router-dom";
import type { Clinic } from "../../interfaces";
import Button from "../ui/Button";
import Content from "../ui/content/Content";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from "../LoadingScreen";

interface IProps {}

const HomePage: React.FC<IProps> = () => {
  const baseURL = import.meta.env.VITE_API_URL;
  const { clinicSlug } = useParams<{ clinicSlug: string }>();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<Clinic>();
  const url = clinicSlug ? `${baseURL}/api/${clinicSlug}/settings` : null;

  useEffect(() => {
    if (!url) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get<Clinic>(url);
        setContent(res.data);
      } catch (error) {
        console.error("Error fetching clinic:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    console.log(content);
  }, [url, clinicSlug]);
  if (loading) return <LoadingScreen />;
  return (
    <div
      className="hero-section min-h-screen -mx-16 px-16 md:px-16 flex items-center"
      id="home"
    >
      <div className="grid grid-cols-1 md:grid-cols-9 items-center w-full">
        <div className="md:col-span-6 flex flex-col items-center text-right text-center">
          <Content
            name={`مرحبا بك في ${content?.name}`}
            content={content?.settings.message}
            className="w-full text-right text-center"
          />
          <div className="flex flex-wrap gap-4 mt-10">
            <a href={`/${clinicSlug}/booking`}>
              <Button variant="primary" className="font-bold">
                احجز معادك
              </Button>
            </a>
            <a href={`/${clinicSlug}/contact`}>
              <Button variant="outline" className="font-bold">
                إتصل بنا
              </Button>
            </a>
          </div>
        </div>
        <div className="md:col-span-3 hidden md:block" />
      </div>
    </div>
  );
};

export default HomePage;
