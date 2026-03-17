import axios from "axios";
import type { SocialLink } from "../interfaces";

const urlApi = import.meta.env.VITE_API_URL;

export const getSocialLinks = async (clinicSlug: string): Promise<SocialLink[]> => {
  const url = `${urlApi}/api/${clinicSlug}/links`;
  const res = await axios.get<SocialLink[]>(url);
  return res.data;
};