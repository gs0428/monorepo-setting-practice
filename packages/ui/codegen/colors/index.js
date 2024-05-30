import fsPromise from "node:fs/promises";
import fs from "node:fs";
import path from "node:path";
import jsonToColorObj from "./utils/json-to-color-obj.js";
import generateColor from "./utils/generate-color.js";

async function main() {
  try {
    // tokens.json 파일 읽기
    const result = await fsPromise.readFile("../../tokens.json", "utf8");
    // 읽어들인 결과 JSON 형태로 변환
    const colors = JSON.parse(result).token;

    // JSON 형태의 colors를 객체로 변환시키는 과정
    const colorObj = jsonToColorObj(colors);

    // 만들어진 colors가 쓰여질 디렉토리 경로
    const colorsDirPath = path.resolve("./src/colors");

    // 디렉토리가 존재하지 않는다면 생성
    if (!fs.existsSync(colorsDirPath)) {
      await fsPromise.mkdir(colorsDirPath);
    }

    // colors 파일 생성하는 함수 실행
    generateColor(colorObj);
  } catch (err) {
    console.error(err);
  }
}

main();
