import fs from "node:fs/promises";
import generateComponent from "./utils/generate-component.js";

async function main() {
  try {
    // icons.json 파일 읽기
    const result = await fs.readFile("../../../../.icona/icons.json", "utf8");
    // 읽어들인 결과 JSON 형태로 변환
    const svgs = JSON.parse(result);

    // 모든 svg 파일을 컴포넌트로 생성
    await Promise.all(Object.entries(svgs).map(([name, value]) => generateComponent(name, value.svg)));
  } catch (err) {
    console.error(err);
  }
}

main();
