export interface APIError {
  status: number;
  message: string;
  _links?: Links;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
  templated: boolean;
}
