import type { FormEvent } from "react";
import Input from "../Input";
import { inputBooking } from "../../../data/index";

interface IProps {
  title: string;
}

const BookingForm = ({ title }: IProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Booking form submitted");
  };

  return (
    <div className="p-5 bg-white rounded-xl shadow-md">
      <h3 className="text-3xl font-extrabold text-[var(--color-black)] mb-6">
        {title}
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          {inputBooking.map((input) => (
            <div key={input.name} className="flex-1 min-w-[200px]">
              <Input
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                label={input.label}
                required={input.required}
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-2 w-full py-3 rounded-full font-bold text-white bg-[var(--color-primary)] hover:opacity-90 transition-opacity duration-200"
        >
          تأكيد الحجز
        </button>
      </form>
    </div>
  );
};

export default BookingForm;