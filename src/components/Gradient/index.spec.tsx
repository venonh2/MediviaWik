import { render } from "@testing-library/react-native";
import { Text } from "react-native";
import { Gradient } from "./index";

describe("Gradient component", () => {
  it("it should render the Gradient component", () => {
    const { getByTestId } = render(
      <Gradient>
        <Text testID="gradient-test">test</Text>
      </Gradient>
    );
    expect(getByTestId("gradient-test")).toBeTruthy();
  });
});
