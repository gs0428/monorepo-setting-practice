import fs from "node:fs/promises";
import path from "node:path";
import generateComponent from "./utils/generate-component.js";

async function main() {
  try {
    // icons.json 파일 읽기
    const result = await fs.readFile("../../.icona/icons.json", "utf8");
    // 읽어들인 결과 JSON 형태로 변환
    const svgs = JSON.parse(result);

    // 만들어진 icon 컴포넌트가 쓰여질 디렉토리 경로
    const icondirPath = path.resolve("./src/icons");

    // 존재하지 않는다면 디렉토리 생성
    if (await fs.stat(icondirPath).catch(() => true)) {
      await fs.mkdir(icondirPath);
    }

    // 모든 svg 파일을 컴포넌트로 생성
    await Promise.all(Object.entries(svgs).map(([name, value]) => generateComponent(name, value.svg)));
  } catch (err) {
    console.error(err);
  }
}

main();
