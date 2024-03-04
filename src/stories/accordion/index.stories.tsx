import { StoryObj } from "@storybook/react";
import Accordion from "./index";

export default {
  title: "Components/AccordionList",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BaseAccordion: StoryObj = {
  args: {
    text: "Is it accessible?",
    header: " Yes. It adheres to the WAI-ARIA design pattern",
  },
};
