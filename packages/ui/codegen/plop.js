import path from "node:path";
import { cwd } from "node:process";
import { mkdir } from "node:fs";

export default function (plop) {
  plop.setGenerator("new story", {
    description: "Generate a story about new component ",
    prompts: [
      {
        // 생성하고자 하는 story의 이름을 입력하는 단계
        type: "input",
        name: "name",
        message: "Enter new component name",
      },
      {
        // 생성하고자 하는 story가 primitive인지 확인하는 단계
        type: "confirm",
        name: "isPrimitive",
        message: "Is it primitive component?",
      },
    ],
    actions(data) {
      const { isPrimitive } = data;
      const type = isPrimitive ? "primitive" : "themed";
      const pascalCaseType = isPrimitive ? "Primitive" : "Themed";
      const existPath = path.resolve(cwd(), "../..", `apps/docs/stories/${type}`);

      // 경로에 primitive 혹은 themed 폴더가 존재하는지 확인 후
      // 존재하지 않는다면 폴더 생성
      if (!existPath) {
        mkdir(existPath);
      }

      // primitive 혹은 themed일 때 story 저장 경로와 hbs 파일 구분
      const action = {
        type: "add",
        path: `../../../apps/docs/stories/${type}/${pascalCaseType}{{pascalCase name}}.stories.tsx`,
        templateFile: `templates/story-${type}.hbs`,
      };

      return [action];
    },
  });
}
