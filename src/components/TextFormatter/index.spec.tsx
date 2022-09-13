import { render } from "@testing-library/react-native";

import { TextFormatter } from "./index";

describe("TextFormatter component", () => {
  it("should render", () => {
    render(<TextFormatter text="cachorro azul" cutTextAt={8} />);
  });
  it("should not render", () => {
    const { container } = render(<TextFormatter text="" cutTextAt={8} />);
    expect(container.children.length).toBe(0);
  });
  it("should format the text correctly", () => {
    const { getByText } = render(
      <TextFormatter text="cachorro azul" cutTextAt={8} dots />
    );
    expect(getByText("cachorro...")).toBeTruthy();
  });
});
