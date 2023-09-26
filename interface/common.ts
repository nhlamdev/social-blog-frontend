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
  role: "member" | "writer" | "developer" | "owner";
  name: string;
  email: string;
  image: string;
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
