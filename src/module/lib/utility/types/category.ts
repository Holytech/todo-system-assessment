export interface ICategoryBoxProps {
  activeIcon: React.ReactNode;
  icon: React.ReactNode;
  label: string;
  value: string;
  count: number;
  iconColor?: string;
  boxBg: string;
  countBg: string;
  textColor?: string;
  activeCategory: string;
  handleClick: () => void;
}
