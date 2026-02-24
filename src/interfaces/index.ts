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