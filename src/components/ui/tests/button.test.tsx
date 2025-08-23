import { render, screen } from "@testing-library/react";
import { Button } from "../button";

it("renders button text", () => {
  render(<Button>Press</Button>);
  expect(screen.getByRole("button", { name: "Press" })).toBeInTheDocument();
});
