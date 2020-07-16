import React from "react";
import { render, getByTestId, fireEvent } from "@testing-library/react";
import Header from "./App";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Counter tests", () => {
  // it("snapshot test", () => {
  //   const { asFragment } = render(<Header text="Team Nick" />);

  //   expect(asFragment()).toMatchSnapshot();
  // });

  // it("Renders proper text", () => {
  //   const { getByTestId } = render(<Header text="Team Nick" />);

  //   expect(getByTestId("textCheck")).toHaveTextContent("Team Nick");
  // });

  // it("Finds classes by text", () => {
  //   const { getByText } = render(<Header text="Team Nick" />);

  //   expect(getByText(/team nick/i).classList.contains("styling"));
  // });
  it("initial state is 0", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("textCheck")).toHaveTextContent(0);
  });
  it("should increase increase counter by 1", () => {
    const { getByTestId } = render(<Header />);

    fireEvent.click(getByTestId("up"));

    expect(getByTestId("textCheck")).toHaveTextContent(1);
  });
});
