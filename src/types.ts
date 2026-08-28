export type PoolCategory = 
  | 'obra'
  | 'gunitado'
  | 'poliester'
  | 'desbordante'
  | 'infinita'
  | 'salina'
  | 'pequena'
  | 'diseno'
  | 'comunitaria'
  | 'hotel';

export interface PoolTypeItem {
  id: string;
  name: string;
  category: PoolCategory;
  shortDesc: string;
  fullDesc: string;
  image: string;
  idealFor: string;
  features: string[];
  approxTime: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  benefits: string[];
  subServices: string[];
}

export interface StepProcess {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  duration: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  stat?: string;
  statLabel?: string;
}

export interface ConfiguratorState {
  poolType: 'gunitado' | 'poliester' | 'desbordante' | 'pequena' | 'diseno';
  size: '6x3' | '7x3.5' | '8x4' | '10x5' | 'custom';
  finish: 'porcelanico' | 'gresite_bali' | 'gresite_azul' | 'gris_antracita' | 'arena';
  waterTreatment: 'salina' | 'salina_ph' | 'cloro_tradicional' | 'magnesio';
  extras: {
    heating: boolean;
    ledRgb: boolean;
    waterfall: boolean;
    cover: boolean;
    robotCleaner: boolean;
    hydromassageBench: boolean;
  };
  province: 'barcelona' | 'girona' | 'tarragona' | 'lleida';
  gardenStatus: 'tierra' | 'hormigon' | 'reforma' | 'nuevo';
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  municipality: string;
  province: string;
  serviceType: string;
  poolType: string;
  estimatedSize: string;
  timeframe: string;
  comments: string;
  acceptedPrivacy: boolean;
}
