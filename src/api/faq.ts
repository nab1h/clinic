import axios from "axios";
import type { FAQ } from "../interfaces";

const urlApi = import.meta.env.VITE_API_URL;

export const getFAQs = async (clinicSlug: string): Promise<FAQ[]> => {
  const url = `${urlApi}/api/${clinicSlug}/faqs`;
  const res = await axios.get<FAQ[]>(url);
  return res.data;
};