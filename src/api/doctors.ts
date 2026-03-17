// api/doctors.ts
import axios from "axios";
import type { Doctor } from "../interfaces";

const urlApi = import.meta.env.VITE_API_URL;

export const getDoctors = async (clinicSlug: string): Promise<Doctor[]> => {
  const url = `${urlApi}/api/${clinicSlug}/doctors`;
  const res = await axios.get<Doctor[]>(url);
  return res.data;
};
