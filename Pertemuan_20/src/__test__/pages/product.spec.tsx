import {render, screen} from "@testing-library/react";
import TampilProduk from "@/pages/produk/index";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route:"/produk",
            pathname:"",
            query:{},
            asPath:"",
            push: jest.fn(),
            event:{
                on: jest.fn(),
                off: jest.fn(),
            },
            isReady: true,
        };
    },
}));


describe("Produk page", () => {
    it("renders the produk page correctly", () => {
         const page = render(<TampilProduk />);
      //  expect(screen.getByTestId("title").textContent).toBe("Produk Page");
        expect(page).toMatchSnapshot();
    });
    it("should render container div", () => {
      const { container } = render(<TampilProduk />);
      expect(container).toBeTruthy(); 
    });

    it("renders multiple times consistently", () => {
      render(<TampilProduk />);
      render(<TampilProduk />);
    });

    it("renders title text", () => {
      render(<TampilProduk />);
      expect(screen.getByText("Daftar Produk")).toBeInTheDocument();
    });
    
    it("renders title text with toBe", () => {
      render(<TampilProduk />);
      expect(screen.getByText("Daftar Produk").textContent).toBe(
        "Daftar Produk",
      );
    });

    it("renders title with testId", () => {
      render(<TampilProduk />);
      expect(screen.getByTestId("title")).toBeInTheDocument();
    });
});