export interface Resource {
  id: number;
  url: string;
  name: string;
  description?: string;
}

export interface Resources {
  id: number;
  module: string;
  resources: Resource[];
}
