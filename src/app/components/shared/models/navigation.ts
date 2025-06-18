export interface Nav {
  link: string;
  title: string;
  children?: NavChild[];
}
export interface NavChild {
  link: string;
  title: string;
}
