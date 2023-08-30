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
