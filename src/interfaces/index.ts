export interface Doctor {
    twitter: string | undefined;
    facebook: string | undefined;
    linkedin: string | undefined;
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