import "../global.css";

export interface PrimitiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PrimitiveButton({ children, ...other }: PrimitiveButtonProps): JSX.Element {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  );
}

PrimitiveButton.displayName = "Button";
