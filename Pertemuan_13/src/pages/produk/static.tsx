import ProdukView from "@/views/produk";
import { ProductType } from "../../types/Product.type";

const halamanProdukStatic = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <ProdukView products={products} />
    </div>
  );
};

export default halamanProdukStatic;

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:3000/api/produk");
  // const response = ProductType[] = await res.json();
  const response: { data: ProductType[] } = await res.json();

  //console.log("Data Produk yang diambil dari API:", response);
  return {
    props: {
      products: response.data,
    },
    revalidate: 10, //revalidate data setiap 10 detik
  };
}
