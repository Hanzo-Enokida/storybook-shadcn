import { StoryObj } from "@storybook/react";
import ButtonList from "./index";
import { ButtonListProps } from "./types";

export default {
  title: "Components/Button",
  component: ButtonList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const TaskCompleteButton: StoryObj<ButtonListProps> = {
  args: {
    text: "完了",
    func: () => {},
    variant: "redButton",
    size: "sm",
  },
};
export const TaskDeketeButton: StoryObj<ButtonListProps> = {
  args: {
    text: "削除",
    func: () => {},
    variant: "blueButton",
    size: "sm",
  },
};
export const DeleteYesButton: StoryObj<ButtonListProps> = {
  args: {
    text: "はい",
    func: () => {},
    variant: "purpleButton",
    size: "second",
  },
};
export const DeleteCancelButton: StoryObj<ButtonListProps> = {
  args: {
    text: "いいえ",
    func: () => {},
    variant: "purpleButton",
    size: "second",
  },
};
export const AddButton: StoryObj<ButtonListProps> = {
  args: {
    text: "追加",
    func: () => {},
    variant: "addButton",
    size: "fourth",
  },
};
