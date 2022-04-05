export type ThumbnailItemType = {
  id?: string;
  title: JSX.Element | string;
  text: string;
  image?: string;
  showButton?: boolean;
  onButtonClick?: () => void;
  buttonTitle?: string;
};

export interface IThumbnail {
  items: ThumbnailItemType[];
}
