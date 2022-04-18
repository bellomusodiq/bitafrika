export interface IFundBuyItem {
  title: string;
  text: string;
  onButtonClick?: () => void;
  image: string;
  backgroundColor?: string;
  color?: string;
  centerText?: boolean;
  buttonType?: string;
}
