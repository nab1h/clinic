import axios from "axios";
import type { Clinic } from "../interfaces";

const urlApi = import.meta.env.VITE_API_URL;

export const getClinicAll = async (clinicSlug: string): Promise<Clinic> => {
  const url = `${urlApi}/api/${clinicSlug}/settings`;
  const res = await axios.get<Clinic>(url);
  return res.data;
};
