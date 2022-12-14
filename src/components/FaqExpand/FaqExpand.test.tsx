import { render, screen } from "@testing-library/react";
import { FaqExpand } from ".";
import { ElementDataId } from "../../utilities";

const MOCK_QUESTION = "title";
const MOCK_ANSWER = "description";

describe("Expandable", () => {
  it("renders the accordion component", () => {
    render(<FaqExpand title={MOCK_QUESTION} description={MOCK_ANSWER} />);
    const accordionElement = screen.getByTestId(
      ElementDataId.AccordionComponent
    );
    expect(accordionElement).toBeVisible();
  });

  it("renders the correct title text", () => {
    render(<FaqExpand title={MOCK_QUESTION} description={MOCK_ANSWER} />);
    const titleText = screen.getByTestId(ElementDataId.AccordionQuestion);
    expect(titleText).toHaveTextContent(MOCK_QUESTION);
  });

  it("renders the correct description text", () => {
    render(<FaqExpand title={MOCK_QUESTION} description={MOCK_ANSWER} />);
    const titleText = screen.getByTestId(ElementDataId.AccordionAnswer);
    expect(titleText).toHaveTextContent(MOCK_ANSWER);
  });
});
