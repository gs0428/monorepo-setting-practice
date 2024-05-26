import fs from "node:fs";

/**
 * 컴포넌트를 생성하여 파일로 저장합니다.
 * @param {string} name - SVG 이름
 * @param {string} svg - SVG 내용
 */
const generateComponent = (name, svg) => {
  const pascalCase = name[0].toUpperCase() + name.split("").splice(1).join("");

  // size와 fill 변수를 이용하기 위해
  // 고정되어있는 width, height, fill을 변수화 시키는 과정
  // 단, icons.json에 있는 svg의 크기가 24이고, 색상이 black이라는 가정하에 적용됨
  const replacedSvg = svg.replace(/"24"/g, "{size}").replace(/fill="black"/g, "fill={fill}");
  fs.writeFile(
    `./src/icons/${name}.tsx`,
    `interface ${pascalCase}Props {
  size?: number;
  fill?: string;
}

function ${pascalCase}({ size = 24, fill = "black" }: ${pascalCase}Props): React.ReactElement {
  return (
  ${replacedSvg});
}

export default ${pascalCase};
`,
    "utf-8",
    (err) => {
      if (err) throw err;
    }
  );
};

export default generateComponent;
