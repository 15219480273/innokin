import React from "react";

import { Button } from "../ui-components";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args}>A Button</Button>;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
};

export const Large = Template.bind({});
Large.args = {
  size: "xl",
};

//
// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
