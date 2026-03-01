import ContactButtons from "../ui/ContactButtons";

import Navbar from "../ui/Navbar";
import Footer from "./Footer";
interface ILayoutProps {
    children: React.ReactNode;
}
const Layout = ({ children }: ILayoutProps)=>{
    return(
        <div>
            <Navbar logo="/logo.png" clinicName="عيادة الأمانة" />
            <main className="mx-auto px-8 overflow-hidden">
                {children}
            </main>
            <ContactButtons />
            <Footer />
        </div>
    );
};
export default Layout;