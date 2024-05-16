import type { Meta, StoryObj } from "@storybook/react";
import { A11yButton } from "@acme/ui/a11y-button";
import { withCssResources } from "@storybook/addon-cssresources";

const meta: Meta<typeof A11yButton> = {
  component: A11yButton,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
  parameters: {
    cssresources: [
      {
        id: `darktheme`,
        code: "<style>button { background-color: black; }</style>",
        picked: false,
      },
    ],
  },
  decorators: [withCssResources],
};

export default meta;

type Story = StoryObj<typeof A11yButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Secondary: Story = {
  name: "SecondaryButton",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "grey",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};

export const Primary: Story = {
  name: "PrimaryButton",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};
