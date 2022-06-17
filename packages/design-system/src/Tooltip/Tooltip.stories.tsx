import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TooltipComponent from "./index";

export default {
  title: "Design System/Tooltip Component",
  component: TooltipComponent,
} as ComponentMeta<typeof TooltipComponent>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TooltipComponent> = (args) => (
  <TooltipComponent {...args} content="test">
    {/* Added content prop above since it is conflict with some storybook props */}
    Hover over me 😁
  </TooltipComponent>
);

export const Tooltip = Template.bind({
  hoverOpenDelay: 200,
});
