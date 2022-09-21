/** @jsxImportSource @emotion/react */
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";
import { IExpandableDropdown } from "../../types";

const FileTreeExpand = ({
  icon,
  title,
  label,
  children,
}: IExpandableDropdown) => {
  return (
    <section css={{ minWidth: "50%" }}>
      <Accordion elevation={0}>
        <AccordionSummary
          arial-label={title}
          expandIcon={<PlayArrowIcon />}
          css={{
            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
              transform: "rotate(90deg)",
            },
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <div css={{ paddingRight: "5px" }}>{icon}</div>
          {label}
        </AccordionSummary>
        <AccordionDetails css={{ marginLeft: "20px" }}>
          {children}
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export const MemoizedFileExpand = React.memo(FileTreeExpand);
