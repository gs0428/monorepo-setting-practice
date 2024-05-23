import type { Meta, StoryObj } from "@storybook/react";

import PrimitiveButton from "@acme/ui/primitive/primitive-button";

const meta = {
  title: "Primitive-UI/PrimitiveButton",
  // 컴포넌트명 작성
  component: PrimitiveButton,
  tags: ["autodocs"],
  parameters: {
    // 컴포넌트 부제목 작성
    componentSubtitle: "버튼 컴포넌트",
    docs: {
      description: {
        // 컴포넌트 세부 설명 작성, props 등 상세한 설명 작성 (Optional)
        component: `- children으로 텍스트 값을 지정하면 됩니다.\n- onClick은 클릭 함수입니다.`,
      },
    },
  },
  argTypes: {
    // props1: {
    //   description: "props1은 default 값이 있는 필수적인 속성입니다.",
    //   table: {
    //     // type, 필수가 아닐 경우 required 삭제
    //     type: { summary: "string", required: true },
    //     // defaultValue (Optional)
    //     defaultValue: { summary: "기본 값이 있으면 여기에 적습니다." },
    //   },
    //   control: {
    //     // Args Table에서 사용자가 조작할 수 있는 타입
    //     // select일 경우 options를 배열로 제공
    //     // 그 외 text, number, boolean, color, check, radio 등 존재
    //     // control 불가능하게 하고 싶을 경우 객체가 아니라 false로 설정
    //     // ex) control: false,
    //     // 참고 : https://storybook.js.org/docs/react/essentials/controls
    //     type: "select",
    //     options: ["option1", "option2"],
    //   },
    // },
  },
  // decorators (Optional)
  // 공통적으로 적용하고 싶은 컴포넌트 설정
  decorators: [(Story) => <>{Story()}</>],
} satisfies Meta<typeof PrimitiveButton>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Story 설명 작성
 */
export const Primary: Story = {
  args: {
    children: "PrimitiveButton",
    type: "button",
    style: {
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10,
    },
  },
};
