import { render } from "@testing-library/react-native";
import { FilterPlaceButton } from "./index";

describe("FilterPlaceButton component", () => {
  it("it should show the text paased down as props", () => {
    const { getByText } = render(
      <FilterPlaceButton title="casa azul" pressed={false} />
    );
    expect(getByText("casa azul").props.children).toBe("casa azul");
  });
  it("it should change the border bottom width and border color", () => {
    const { getByTestId } = render(
      <FilterPlaceButton title="casa azul" pressed />
    );

    const {
      _fiber: {
        stateNode: {
          props: { style },
        },
      },
    } = getByTestId("filter-place-button-id");

    expect(style.borderBottomColor).toBe("#111827");
    expect(style.borderBottomWidth).toBe(1);
  });
});
