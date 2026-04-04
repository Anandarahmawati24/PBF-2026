import { render, screen } from "@testing-library/react";
import HalamanEditor from "@/pages/editor";
import "@testing-library/jest-dom";

describe("Editor Page", () => {
  it("renders editor page", () => {
    render(<HalamanEditor />);
    expect(screen.getByText("Halaman Editor")).toBeInTheDocument();
  });
});
