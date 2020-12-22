import React from "react";
import { render } from "@testing-library/react";
import { App } from "../src/App";

describe("<App />", () => {
  test("renders i18nd App", () => {
    const { getByText } = render(<App />);
    const p = getByText("This is a translated paragraph.");
    expect(p).toHaveTextContent("This is a translated paragraph.");
  });
});
