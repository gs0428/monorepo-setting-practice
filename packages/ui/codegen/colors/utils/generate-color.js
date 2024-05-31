import fs from "node:fs";
import prettier from "prettier";

const generateColor = async (colorObj) => {
  const formattedColors = await prettier.format(JSON.stringify(colorObj), {
    parser: "json",
  });

  // 포멧팅한 colors를 파일로 생성
  fs.writeFile(
    "./src/colors/index.ts",
    `const colors = ${formattedColors.trimEnd()} as const;
    
type ColorKey = keyof typeof colors;

type ColorType<T extends ColorKey> = {
  [Key in keyof (typeof colors)[T]]: (typeof colors)[T][Key];
};

export type ColorValue = {
  [C in ColorKey]: ColorType<C>;
}[ColorKey][keyof ColorType<ColorKey>];

export default colors;`,
    "utf-8",
    (err) => {
      if (err) throw err;
    }
  );
};

export default generateColor;
