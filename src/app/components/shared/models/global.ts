export interface DefaultData {
  status: string;
  code: number;
  message: string;
  data?: any;
  errors: Errors[];
  meta?: Meta;
}
export interface Errors {
  code: number;
  title: string;
  message: string;
}

export interface Meta {
  page: number;
  page_size: number;
  total_pages: number;
  total_items: number;
}
