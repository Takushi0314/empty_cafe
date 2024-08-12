import { render, screen } from "@testing-library/react";
import Hello from "../src/components/hello";

describe("Hello", () => {
  test("<Hello/>で Hello Next.js 14 が表示されること", () => {
    render(<Hello />);
    expect(screen.getByText("Hello Next.js 14")).toBeVisible();
  });
});
