import { useParams } from "react-router-dom";
import ContactButtons from "../ui/ContactButtons";

import Navbar from "../ui/Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import type { Clinic } from "../../interfaces";
import axios from "axios";
interface ILayoutProps {
    children: React.ReactNode;
}
const Layout = ({ children }: ILayoutProps)=>{
    const baseURL = import.meta.env.VITE_API_URL;
    const {clinicSlug} = useParams<{clinicSlug: string}>()
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState<Clinic>();
    const url = clinicSlug ? `${baseURL}/api/${clinicSlug}/settings` : null ;
    useEffect(()=>{
      if (!url) {
        setLoading(false);
        return;
      }
      setLoading(true);
      const fetchData = async()=>{
        try{
          const res = await axios.get<Clinic>(url);
          setContent(res.data);
        }catch(error){
          console.error("Error fetching clinic:",error);
        }finally{
          setLoading(false);
        }
      }
      fetchData();
      console.log(content)
    },[url, clinicSlug])
    if (loading) return <p>Loading...</p>;
    return(
        <div>

            <Navbar logo={`${baseURL}/storage/${content?.logo}`} clinicName={content?.name} />
            <main className="mx-auto px-8 pt-1 mt-0 overflow-hidden">
                {children}
            </main>
            <ContactButtons whatsapp={content?.phone} number={content?.phone}/>
            <Footer address={content?.address} emailAddress={content?.email} phone={content?.phone}/>
        </div>
    );
};
export default Layout;