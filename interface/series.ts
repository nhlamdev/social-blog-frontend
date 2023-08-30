export interface ISeriesItem {
  _id: string;
  title: string;
  summary: string;
  delete_at: string | null;
  created_at: string;
  updated_at: string;
  contents: number;
}

export interface ISeries {
  data: ISeriesItem[];
  max: number;
}
