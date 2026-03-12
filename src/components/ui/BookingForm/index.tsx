import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import Input from "../Input";
import { inputBooking } from "../../../data/index";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import Button from "../Button";

interface IProps {
  title: string;
}

const BookingForm = ({ title }: IProps) => {
  const baseURL = import.meta.env.VITE_API_URL;
  const {clinicSlug} = useParams<{clinicSlug: string}>();
  // form ------------------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    date: "",
  });

  const [isBooked , setIsBooked] = useState(false);
  useEffect(()=>{
    const booked = Cookies.get("booked_done");
    if(booked){
      setIsBooked(true);
    }
  },[]);
  const handleChange =(event: ChangeEvent<HTMLInputElement>) =>{
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  }
  console.log(formData);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // ---make random time___
    const getRandomTime = () => {
      const minHour = 9;
      const maxHour = 17;
    
      const hour = Math.floor(Math.random() * (maxHour - minHour + 1)) + minHour;
      const minute = Math.floor(Math.random() * 60);
    
      // Format HH:MM
      const hh = hour.toString().padStart(2, "0");
      const mm = minute.toString().padStart(2, "0");
      return `${hh}:${mm}`;
    };
    // ----edn random time----
    const customBooking = {
      "name": formData.name,
      "phone": formData.phone,
      "email": formData.email,
      "appointment_date": formData.date,
      "start_time": getRandomTime(),
      "notes": " "
    };
  
    try {
      const res = await axios.post(`${baseURL}/api/${clinicSlug}/booking`, customBooking);
      console.log("Booking sent:", res.data);
      toast.success("تم إرسال الحجز بنجاح!");

      // --cookie---
      Cookies.set("booked_done" , "true" , {expires: 1});
      setIsBooked(true);
      // --end cookie ---

      setFormData({
        name: "",
        email: "",
        age: "",
        phone: "",
        date: "",
      });


    } catch (error) {
      console.error("Booking error:", error);
      toast.error("حدث خطأ أثناء الحجز!");
    }
  };
  if (isBooked) {
    return (
      <div className="p-5 bg-white rounded-xl shadow-md text-center text-green-600 font-bold text-2xl space-y-3">
        تم الحجز ✅
        <br></br>
        <Button onClick={()=>setIsBooked(false)} children="حجز أخر" variant={"primary"} className="bg-[var(--color-primary)] mt-4"/>
      </div>
    );
  }
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
                required={input.required || false}
                value={formData[input.name as keyof typeof formData]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="mt-2 cursor-pointer w-full py-3 rounded-full font-bold text-white bg-[var(--color-primary)] hover:opacity-90 transition-opacity duration-200"
        >
          تأكيد الحجز
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
