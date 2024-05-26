import fs from "node:fs";

/**
 * 컴포넌트를 생성하여 파일로 저장합니다.
 * @param {string} name - SVG 이름
 * @param {string} svg - SVG 내용
 */
const generateComponent = (name, svg) => {
  const pascalCase = name[0].toUpperCase() + name.split("").splice(1).join("");
  fs.writeFile(
    `./src/icons/${name}.tsx`,
    `function ${pascalCase}() {
    return (
    ${svg}
    );
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
