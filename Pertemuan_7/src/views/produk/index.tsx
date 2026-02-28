import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
};

const ProdukView = () => {
  // const router = useRouter();

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const isLogin = localStorage.getItem("isLogin");
  //
  //   if (!isLogin) {
  //     router.push("/auth/login");
  //   }
  // }, [router]);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((respondata) => {
       // console.log("Data produk:", respondata.data);
       setProducts(respondata.data);
        })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      {products.map((products: ProductType) => (
        <div key={products.id}>
          <h2>{products.name}</h2>
          <p>Harga: Rp {products.price}</p>
          <p>Ukuran: {products.size}</p>
        </div>
      ))}
    </div>
  );
};

export default ProdukView;
