import { render } from "@testing-library/react-native";
import { View } from "react-native";

import { RoundedIcon } from "./index";

describe("RoundedIcon component", () => {
  it("should render", () => {
    render(
      <RoundedIcon>
        <View className="w-10 h-10" />
      </RoundedIcon>
    );
  });
});
