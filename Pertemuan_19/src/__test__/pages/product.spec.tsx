import {render, screen} from "@testing-library/react";
import ProdukView from "../../pages/produk";

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
        const page = render (<ProdukView />);
        expect(screen.getByTestId("title").textContent).toBe("Produk Page");
        expect(page).toMatchSnapshot();
    });
});