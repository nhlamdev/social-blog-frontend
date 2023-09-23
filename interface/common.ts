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
