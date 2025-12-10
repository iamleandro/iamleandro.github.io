export interface ContactFormState {
  name: string;
  email: string;
  businessUrl: string;
  revenue: string;
  message: string;
}

export enum BusinessType {
  SAAS = 'SaaS',
  CONTENT = 'Content Site',
  ECOMMERCE = 'E-commerce',
  NEWSLETTER = 'Newsletter',
  OTHER = 'Other'
}