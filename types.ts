import type { LucideIcon } from 'lucide-react';

export type ServiceCategory = 'PENAL' | 'CIVIL' | 'FAMILIAR' | 'AGRARIO' | 'NOTARIAL' | 'CORPORATIVO' | 'AMPAROS';

export interface ServiceItem {
  id: number;
  category: ServiceCategory;
  title: string;
  description: string;
  actionText: string;
  icon: LucideIcon;
  details?: string[];
}

export interface TickerItem {
  id: number;
  text: string;
  location: string;
  time: string;
}

export interface CaseStudy {
  id: number;
  category: string;
  title: string;
  result: string;
  description: string;
  image: string;
  stat: string;
  imageClass?: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}