export interface A11yButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function A11yButton({ children, ...other }: A11yButtonProps): JSX.Element {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  );
}

A11yButton.displayName = "A11yButton";
