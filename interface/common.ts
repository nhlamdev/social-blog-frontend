export interface PageProps {
  params: {
    [key: string]: string | undefined;
  };
  searchParams: {
    [key: string]: string | undefined;
  };
}

export interface LayoutProps {
  children?: React.ReactNode;

  params: {
    [key: string]: string | undefined;
  };
}

export interface IProfile {
  delete_at: string | null;
  created_at: string;
  updated_at: string;
  index: number;
  _id: string;
  name: string;
  email: string;
  image: string;
  role_author: boolean;
  role_comment: boolean;
  role_owner: boolean;
}

export interface IImage {
  delete_at: string | null;
  created_at: string;
  updated_at: string;
  index: number;
  _id: string;
  originalName: string;
  fileName: string;
  mimeType: string;
  size: number;
}

export interface ISession {
  browser: string;
  created_at: string;
  delete_at: string | null;
  device: "desktop" | "mobile";
  index: number;
  ip: string;
  os: string;
  provider: "google" | "github" | "discord";
  provider_id: string;
  updated_at: string;
  isCurrent: boolean;
  _id: string;
}

export type TypeLocationLanguage = "vi" | "en";
