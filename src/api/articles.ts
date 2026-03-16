import axios from "axios";
import type { IArticle } from "../interfaces";

const urlApi = import.meta.env.VITE_API_URL;

export const getArticles = async(clinicSlug: string): Promise<IArticle[]> => {
    const url = `${urlApi}/api/${clinicSlug}/articles`;
    const res = await axios.get(url);
    return res.data;
}