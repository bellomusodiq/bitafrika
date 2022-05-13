export interface IButton {
  onClick?: () => void;
  title?: string;
  outlined?: boolean;
  store?: "apple" | "google";
  isHover?: boolean;
  stretch?: boolean;
  noBackground?: boolean;
  type?: string;
  url?: string;
}
