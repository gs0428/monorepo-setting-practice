const fs = require("node:fs");
const path = require("node:path");

fs.readdir("./asset", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const icondirPath = path.resolve("./icons");

  if (!path.extname(icondirPath)) {
    fs.mkdir(icondirPath, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
  result.forEach((file) => {
    fs.readFile(`./asset/${file}`, "utf8", (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      const name = file.split(".")[0];
      const upperName = name[0].toUpperCase() + name.split("").splice(1).join("");
      fs.writeFile(
        `./icons/${name}.tsx`,
        `function ${upperName}() {
    return (
        ${res}
    );
}

export default ${upperName};
`,
        "utf-8",
        (error) => {
          if (error) {
            console.error(error);
            return;
          }
          console.log(`${name}.tsx 파일이 성공적으로 생성되었습니다.`);
        }
      );
    });
  });
});
