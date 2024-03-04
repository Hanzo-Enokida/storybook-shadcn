import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { AccordonListProps } from "./types";

const AccordionList = ({ text, header }: AccordonListProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{text}</AccordionTrigger>
        <AccordionContent>{header}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionList;
