// api/tracking.ts
import axios from "axios";

const urlApi = import.meta.env.VITE_API_URL;

export const getTracking = async (clinicSlug: string) => {
  const res = await axios.get(`${urlApi}/api/${clinicSlug}/scripts`);
  return res.data;
};
