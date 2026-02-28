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
export interface IService {
  id: number;
  image: string;
  name: string;
  details: string;
}

export interface ITestimonial {
  id: number;
  name: string;
  profession: string;
  image: string;
  review: string;
}