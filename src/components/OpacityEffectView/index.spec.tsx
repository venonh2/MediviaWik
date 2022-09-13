import { View } from "react-native";
import { render } from "@testing-library/react-native";
import { OpacityEffectView } from "./index";

describe("OpacityEffectView component", () => {
  it("it should not render without children", () => {
    const { container } = render(<OpacityEffectView delay={200} />);
    expect(container.children.length).toBe(0);
  });
  it("Should not render without delay <= 0", () => {
    const { container } = render(
      <OpacityEffectView delay={-1}>
        <View />
      </OpacityEffectView>
    );
    expect(container.children.length).toBe(0);
  });
  it("Should render", () => {
    const { container } = render(
      <OpacityEffectView delay={200}>
        <View />
      </OpacityEffectView>
    );
    expect(container.children.length).toBe(1);
  });
});
