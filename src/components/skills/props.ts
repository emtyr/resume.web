export interface TabuttonProps {
  text: string;
  color: 'pink' | 'blue' | 'green';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
