export interface INotify {
  created_at: string;
  _id: string;
  title: string;
  description: string | null;
  from: {
    _id: string;
    email: string;
    name: string;
    image: string;
  };
  seen: boolean;
  to: string;
  url: string | null;
}
