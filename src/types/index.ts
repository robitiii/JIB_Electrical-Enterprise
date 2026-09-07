export interface ServiceItem {
  id: string;
  code: string;
  category: string;
  title: string;
  description: string;
  image: string;
  specs?: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface ContactDirective {
  identifier: string;
  geographicSector: string;
  infrastructureRequirements: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  directiveId?: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
  tag: string;
}

export interface WorkflowStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  details: string[];
}

export interface LeaderProfile {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  credentials: string[];
  metrics: { label: string; value: string }[];
  portraitImage: string;
  fieldImage: string;
}

