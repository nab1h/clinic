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