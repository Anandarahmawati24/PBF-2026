import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/layouts/navbar";

// mock next-auth
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
}));

// mock next/image
jest.mock("next/image", () => (props: any) => {
  return <img {...props} />;
});

//mock Script
jest.mock("next/dist/client/script", () => {
  return ({ children }: any) => <>{children}</>;
});

describe("Navbar Component", () => {
  const { useSession } = require("next-auth/react");
  it("renders Sign In when not logged in", () => {
    useSession.mockReturnValue({ data: null });
    render(<Navbar />);
    expect(screen.getByText("Sign In")).toBeInTheDocument(); 
  });

  it("renders user when logged in", () => {
    useSession.mockReturnValue({
      data: {
        user: {
          fullname: "John Doe",
          image: "",
        },
      },
    });
    render(<Navbar />);
    expect(screen.getByText(/Welcome, John Doe/i)).toBeInTheDocument();
  });

  it("renders title", () => {
    useSession.mockReturnValue({ data: null });
    render(<Navbar />);
    expect(screen.getByTestId("title")).toBeInTheDocument(); 
  });

  it("matches snapshot", () => {
    useSession.mockReturnValue({ data: null });
    const page = render(<Navbar />);
    expect(page).toMatchSnapshot(); 
  });
});
