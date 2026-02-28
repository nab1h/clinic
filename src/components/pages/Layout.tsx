import ContactButtons from "../ui/ContactButtons";

import Navbar from "../ui/Navbar";
import Footer from "./Footer";

const Layout = ()=>{
    return(
        <div>
            <Navbar logo="/logo.png" clinicName="عيادة الأمانة" />
            <ContactButtons />
            <Footer />
        </div>
    );
};
export default Layout;