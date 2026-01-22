
export interface Artwork {
  id: string;
  title: string;
  year: string;
  technique: string;
  images: string[];
  dimensions?: string;
  available?: boolean;
}

export interface Exhibition {
  id: string;
  title: string;
  year: string;
  location: string;
  link?: string;
}

export interface Study {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}