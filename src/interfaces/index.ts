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
  
  image: string;
  title: string;
  imageAlt?: string;
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