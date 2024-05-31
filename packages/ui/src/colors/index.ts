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
    
type ColorKey = keyof typeof colors;

type ColorType<T extends ColorKey> = {
  [Key in keyof (typeof colors)[T]]: (typeof colors)[T][Key];
};

export type ColorValue = {
  [C in ColorKey]: ColorType<C>;
}[ColorKey][keyof ColorType<ColorKey>];

export default colors;