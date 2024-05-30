const colors = {
  "primary": {
    "normal": "#FFAE22",
    "hover": "#FFC54A",
    "active": "#F98A07",
    "disabled": "rgba(255, 174, 34, 0.5)",
    "subtle": "#FFF9EB",
    "strong": "#B74306"
  }
} as const;
    
export type ColorType = keyof typeof colors;

export default colors;