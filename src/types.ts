export interface BannerItem {
  id: number;
  imageUrl: string;
}

export interface MapArea {
  id: number;
  name: string;
  x: number;
  y: number;
  description: string;
}

export interface ExhibitionItem {
  id: number;
  title: string;
  description: string;
  date?: string;
  imageUrl: string;
}

export interface ExhibitionCarouselProps {
  title: string;
  type: "current" | "upcoming";
}
