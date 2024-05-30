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
    
export type ColorType = keyof typeof colors;

export default colors;`,
    "utf-8",
    (err) => {
      if (err) throw err;
    }
  );
};

export default generateColor;
