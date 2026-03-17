import axios from "axios";
import type { IService } from "../interfaces";

const urlApi = import.meta.env.VITE_API_URL;

export const getServices = async (clinicSlug: string): Promise<IService[]> => {
    const url = `${urlApi}/api/${clinicSlug}/services`;
    const res = await axios.get<IService[]>(url);
    return res.data;
}
