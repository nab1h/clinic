import type { ChangeEvent } from "react";

export interface Doctor {
    id: number;
    name: string;
    specialty: string;
    description: string;
    image: string;
    social: {
      twitter?: string;
      facebook?: string;
      linkedin?: string;
    };
}
export interface IPropBooking {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  required?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface Services {
    id: number;
    label: string;
    href: string;
    active?: boolean;
}
export  interface Tag {
    id: number;
    label: string;
    href: string;
}
export interface IArticleCardProps {
    id: number;
    image: string;
    title: string;
    imageAlt?: string;
    description?: string;
    date?: string;
    author?: string;
    views?: number;
    comments?: number;
    authetImage?: string;
}
export interface IServices {
  id: number;
  image: string;
  name: string;
  details: string;
}
export interface IService {
  id: number;
  name: string;
  description: string;
  image: string | null;
  price: string;
  duration_minutes: number;
}
export interface ITestimonial {
  id: number;
  name: string;
  profession: string;
  image: string;
  review: string;
}
export interface ClinicSettings {
  content: string;
  message: string;
  footer_text: string;
  brand_color: string;
  primary_color: string;
  logo?: string;
}
export interface Clinic {
  name: string;
  email: string;
  phone: string;
  address: string;
  logo: string;
  favicon: string | null;
  icon_16: string | null;
  icon_32: string | null;
  icon_48: string | null;
  icon_180: string | null;
  icon_192: string | null;
  icon_512: string | null;
  settings: ClinicSettings;
}
export interface Appointment {
  name: string;
  phone: string;
  email: string;
  appointment_date: string;
  start_time: string;
  notes: string;
}
export interface IComment {
  id: number;
  article_id: number;
  user_id: number | null;
  parent_id: number | null;
  guest_name: string;
  guest_email: string | null;
  body: string;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
}
export interface IArticle {
  id: number;
  title: string;
  slug: string;
  body: string;
  excerpt: string;
  featured_image: string;
  is_published: boolean;
  is_favorite: boolean;
  created_at: string;
  updated_at: string;
  comment_count: number;
  comments: IComment[];
}
export interface IAddComment {
  id: number;
  article_id: number;
  guest_name: string;
  body: string;
  parent_id: number | null;
  guest_email: string | null;
  user_id: number | null;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
}
export interface ICreateCommentResponse {
  message: string;
  comment: IComment;
}
export interface SocialLink {
  id: number;
  clinic_id: number;
  type: string;
  label: string | null;
  url: string;
  order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}