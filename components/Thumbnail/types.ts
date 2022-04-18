export type ThumbnailItemType = {
  id?: string;
  title: JSX.Element | string;
  customTitle?: boolean;
  text: string;
  image?: string;
  showButton?: boolean;
  onButtonClick?: () => void;
  buttonTitle?: string;
  isSvg?: boolean;
  imageFull?: boolean;
  backgroundColor?: string;
  color?: string;
};

export interface IThumbnail {
  items: ThumbnailItemType[];
}
