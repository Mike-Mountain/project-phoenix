export interface GalleryImage {
  id: number;
  name: string;
  tech: string[];
  images: GalleryImagePath[];
  description: string;
  categories: string[];
  datePosted: Date;
  isFeatured?: boolean
}

export interface GalleryImagePath {
  name: string;
  path: string;
}
