import ScrollToTop from "../ScrollToTop";
import ContactButtons from "../ui/ContactButtons";

import Navbar from "../ui/Navbar";
import Footer from "./Footer";
interface ILayoutProps {
    children: React.ReactNode;
}
const Layout = ({ children }: ILayoutProps)=>{
    return(
        <div>
            <ScrollToTop />
            <Navbar logo="/logo.png" clinicName="عيادة الأمانة" />
            <main className="mx-auto px-8 pt-1 mt-0 overflow-hidden">
                {children}
            </main>
            <ContactButtons />
            <Footer />
        </div>
    );
};
export default Layout;