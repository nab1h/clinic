import axios from "axios";
import type { ICreateCommentResponse, IAddComment } from "../interfaces";

const urlApi = import.meta.env.VITE_API_URL;

// إنشاء تعليق
export interface IAddCommentPayload {
    article_id: number;  // سيتم تحويله إلى string عند الإرسال
    guest_name: string;
    body: string;
  }

  export const createComment = async (clinicSlug: string, data: IAddCommentPayload): Promise<ICreateCommentResponse> => {
    const url = `${urlApi}/api/${clinicSlug}/comments`;
    // تحويل article_id إلى string كما يتوقع الـ API
    const payload = {
      ...data,
      article_id: String(data.article_id)
    };
    const res = await axios.post<ICreateCommentResponse>(url, payload);
    return res.data;
  };
// جلب التعليقات
export const fetchComments = async (clinicSlug: string, article_id: number) => {
  const url = `${urlApi}/api/${clinicSlug}/comments?article_id=${article_id}`;
  const res = await axios.get<IAddComment[]>(url);
  return res.data;
};