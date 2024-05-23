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

      // primitive 혹은 themed일 때 story 저장 경로와 hbs 파일 구분
      const action = {
        type: "add",
        path: `../../../apps/docs/stories/${type}/{{pascalCase name}}.stories.tsx`,
        templateFile: `templates/story-${type}.hbs`,
      };

      return [action];
    },
  });
}
