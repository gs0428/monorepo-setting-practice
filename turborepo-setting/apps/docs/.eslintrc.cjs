/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/storybook.js"],
  parserOptions: {
    project: "/users/gwangsoo/desktop/monorepo-setting-practice/turborepo-setting/apps/docs/tsconfig.json",
  },
};
