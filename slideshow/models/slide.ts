export interface Slide {
  id: number;
  title: string;
  position: string;
  include: boolean;
  path: string;
}

export interface Presentation {
  id: number;
  module: string;
  slides: Slide[];
}
