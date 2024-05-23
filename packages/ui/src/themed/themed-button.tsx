import "../global.css";
import type { ColorType } from "../../color";
import PrimitiveButton from "../primitive/primitive-button";

export interface ThemedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  // other: {
  //   type: ColorType;
  // };
}

// size, color, radius
export default function ThemedButton({ children, ...other }: ThemedButtonProps): JSX.Element {
  return <PrimitiveButton>{children}</PrimitiveButton>;
}

ThemedButton.displayName = "Button";
