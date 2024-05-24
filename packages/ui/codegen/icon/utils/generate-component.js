import fs from "node:fs";

const generateComponent = (name, svg) => {
  const pascalCase = name[0].toUpperCase() + name.split("").splice(1).join("");
  fs.writeFile(
    `../../icon/${name}.tsx`,
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
