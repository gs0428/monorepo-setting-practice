/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/react.js"],
  parserOptions: {
    project: "/users/gwangsoo/desktop/monorepo-setting-practice/packages/ui/tsconfig.json",
  },
};
