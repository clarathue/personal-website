// Global type definitions

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  phone?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

export type Route = {
  path: string;
  element: React.ComponentType;
  title: string;
};
