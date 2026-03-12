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
export interface IArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  authorImage: string;
  views: number;
  comments: IComment[];
}
export interface IComment {
  id: number;
  author: string;
  authorImage: string;
  content: string;
  date: string;
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