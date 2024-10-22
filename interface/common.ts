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
  _id: string;
  name: string;
  email: string;
  image: string;
  created_at: string;
  role: {
    owner: boolean;
    comment: boolean;
    author: boolean;
  };
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

export interface IUploadResponse {
  created_at: string;
  delete_at: string | null;
  fileName: string;
  index: number;
  mimeType: string;
  originalName: string;
  shape: { width: number; height: number } | null;
  size: number;
  updated_at: string;
  _id: string;
}
