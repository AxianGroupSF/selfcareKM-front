export interface TableHead {
  label?: string;
  label_value?: string;
  type_value?: string;
  relation?: string;
  relation_label?: string;
  relation_img?: string;
  action_data?: BtnAction[];
  avatar?: Avatar;
  order?: boolean;
  sort?: string;
  width_th?: string;
  align?: string;
  btnFilter?: boolean;
}
export interface OrderTable {
  sort: string;
  order: string;
}
export interface BtnAction {
  icon: string;
  label: string;
  type: string;
  size?: string;
}
export interface Avatar {
  img: string;
  relation: string;
  relation_label: string;
}
export interface DataAction {
  action: string;
  type: string;
}
