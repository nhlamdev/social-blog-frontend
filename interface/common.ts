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
  role: {
    delete_at: null;
    created_at: string;
    updated_at: string;
    index: number;
    _id: string;
    author: boolean;
    comment: boolean;
    owner: boolean;
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
