import type React from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../../data";
import AddressPage from "../ui/AddressPage";
import TestimonialForm from "../ui/TestimonialForm";

interface IProps{}
const TestimonialPage: React.FC<IProps> = ()=>{
    return(
        <div className="mt-20">
            <AddressPage address={"أراء عملائنا"} title={"تعرف علي اراء عملائنا"} />
            <TestimonialCard testimonials={testimonials} />
            <TestimonialForm />
        </div>
    );
};
export default TestimonialPage;