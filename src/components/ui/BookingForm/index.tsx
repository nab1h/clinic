import type { FormEvent } from "react";
import Input from "../Input";
import {inputBooking} from "../../../data/index";

interface IProps{
    title: string;
}

const BookingForm = ({ title } : IProps)=>{
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // هنا تقدر تضيف لوجيك حفظ البيانات أو إرساله للسيرفر
        console.log("Booking form submitted");
    };

    return(
        <div className="p-5 bg-white">
            <h3 className="flex flex-col text-3xl font-extrabold text-[var(--black)] mb-4">
                {title}
            </h3>
            <div>
                <form onSubmit={handleSubmit}>
                    {inputBooking.map((input) => (
                        <Input
                            key={input.name}
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            label={input.label}
                            required={input.required}
                        />
                    ))}
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 rounded-md bg-[var(--primary-cyan)] text-[var(--white)]"
                    >
                        تأكيد الحجز
                    </button>
                </form>
            </div>
        </div>
    )}
export default BookingForm;