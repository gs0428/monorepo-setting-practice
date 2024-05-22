export default function (plop) {
  plop.setGenerator("new story", {
    description: "Generate a story about new component ",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter new component name",
      },
      {
        type: "confirm",
        name: "isPrimitive",
        message: "Is it primitive component?",
      },
    ],
    actions(data) {
      const actions = [];

      // primitive 컴포넌트이면 primitive hbs 파일로 스토리 생성
      if (data.isPrimitive) {
        actions.push({
          type: "add",
          path: "../src/{{pascalCase name}}.stories.tsx",
          templateFile: "templates/story-primitive.hbs",
        });
      } else {
        actions.push({
          type: "add",
          path: "../src/{{pascalCase name}}.stories.tsx",
          templateFile: "templates/story-themed.hbs",
        });
      }

      return actions;
    },
  });
}
