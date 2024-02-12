import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Marbella/Input",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <Input type="email" placeholder="Email" />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
