declare module 'next' {
  export interface Metadata {
    title?: string;
    description?: string;
    keywords?: string[];
    authors?: Array<{ name: string; url?: string }>;
    creator?: string;
    publisher?: string;
    formatDetection?: {
      email?: boolean;
      address?: boolean;
      telephone?: boolean;
    };
    metadataBase?: URL;
    alternates?: {
      canonical?: string | URL;
      languages?: Record<string, string | URL>;
    };
    openGraph?: {
      title?: string;
      description?: string;
      url?: string | URL;
      siteName?: string;
      images?: Array<{
        url: string | URL;
        width?: number;
        height?: number;
        alt?: string;
      }>;
      locale?: string;
      type?: string;
    };
    twitter?: {
      card?: string;
      title?: string;
      description?: string;
      creator?: string;
      images?: string[];
    };
    robots?: {
      index?: boolean;
      follow?: boolean;
      nocache?: boolean;
      googleBot?: {
        index?: boolean;
        follow?: boolean;
        noimageindex?: boolean;
      };
    };
    icons?: {
      icon?: string | URL;
      shortcut?: string | URL;
      apple?: string | URL;
      other?: Array<{
        rel: string;
        url: string | URL;
      }>;
    };
    viewport?: {
      width?: string;
      initialScale?: number;
      minimumScale?: number;
      maximumScale?: number;
      userScalable?: boolean;
    };
    verification?: {
      google?: string;
      yandex?: string;
      yahoo?: string;
      other?: Record<string, string>;
    };
  }
}

declare module 'next/font/google' {
  interface FontOptions {
    weight?: string | string[];
    style?: string | string[];
    subsets?: string[];
    display?: string;
    variable?: string;
    preload?: boolean;
    fallback?: string[];
    adjustFontFallback?: boolean;
  }

  export function Inter(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };
  
  export function Roboto(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };
  
  export function Open_Sans(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };
  
  export function Lato(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };
  
  export function Poppins(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };
  
  export function Montserrat(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };
  
  export function Source_Sans_Pro(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };
  
  export function Raleway(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };
  
  export function Ubuntu(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };
  
  export function Playfair_Display(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
    variable: string;
  };
} 