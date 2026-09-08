export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export type ActiveTab = 'preview' | 'visual' | 'code';

export interface WebsiteTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  html: string;
}

export interface SelectedElementData {
  tagName: string;
  id: string;
  className: string;
  textContent: string;
  outerHTML: string;
  xpath?: string;
  href?: string;
  src?: string;
}
