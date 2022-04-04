export type ThumbnailItemType = {
  id?: string;
  title: string;
  text: string;
  image: string;
};

export interface IThumbnail {
  items: ThumbnailItemType[];
}
