// ButtonGroup.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Menu, { MenuProps } from "./index";

export default {
  title: "Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args: MenuProps) => (
  <Menu {...args} />
);

export const Selected = (args: MenuProps) => <Menu {...args}></Menu>;

// export const Selected = Template.bind({});
// Selected.args = {
//   children: "선택",
//   path: "https://momofunding.com/selected",
// };
