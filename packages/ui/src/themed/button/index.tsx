import "../../global.css";
import PrimitiveButton from "../../primitive/button";

export interface ThemedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  // other: {
  //   type: ColorType;
  // };
}

// size, color, radius

export default function ThemedButton({ children, ...other }: ThemedButtonProps): JSX.Element {
  return <PrimitiveButton {...other}>{children}</PrimitiveButton>;
}

ThemedButton.displayName = "Button";
