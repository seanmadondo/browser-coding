/** @jsxImportSource @emotion/react */
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { ElementDataId } from "../../utilities";

interface AccordionProps {
  title: string;
  description: string;
}

export const FaqExpand = ({ title, description }: AccordionProps) => {
  return (
    <Accordion
      data-testid={ElementDataId.AccordionComponent}
      css={{
        width: "40em",
        marginBottom: "15px",
        border: "1px solid black",
      }}
    >
      <AccordionSummary
        data-testid={ElementDataId.AccordionQuestion}
        css={{
          fontWeight: "bold",
        }}
        expandIcon={<ArrowForwardIosSharpIcon />}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails data-testid={ElementDataId.AccordionAnswer}>
        {description}
      </AccordionDetails>
    </Accordion>
  );
};
