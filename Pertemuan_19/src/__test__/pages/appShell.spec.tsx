import { render } from "@testing-library/react";
import Appshell from "@/components/layouts/Appshell";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
    };
  },
}));

jest.mock("next/dynamic", () => () => {
  const MockNavbar = () => <div>Navbar</div>;
  return MockNavbar;
});

describe("Appshell", () => {
  it("renders appshell with children", () => {
    render(
      <Appshell>
        <div>Test Child</div>
      </Appshell>,
    );
  });
});