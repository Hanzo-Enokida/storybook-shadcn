export type ButtonListProps = {
  buttonListType?: "complete" | "delete" | "yes" | "cancel";
  func: () => void;
  text: string;
  variant: "redButton" | "blueButton" | "purpleButton" | "addButton" | "link";
  size: "sm" | "second" | "third" | "fourth";
};
