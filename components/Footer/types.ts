export interface IFooterItemLink {
  title: string;
  url?: string;
}

export interface IFooterItem {
  title: string;
  items: IFooterItemLink[];
}
