/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/storybook.js"],
  parserOptions: {
    project: "/users/gwangsoo/desktop/monorepo-setting-practice/apps/docs/tsconfig.json",
  },
};
