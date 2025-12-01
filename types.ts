export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  codename: string;
  description: string;
  features: string[];
  price: string;
  cta: string;
}

export interface Testimony {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface ComparisonPoint {
  metric: string;
  traditional: string;
  rebel: string;
}