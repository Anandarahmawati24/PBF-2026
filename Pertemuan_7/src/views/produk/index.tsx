import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  nama: string;
  harga: number;
  ukuran: string;
  warna: string;
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
      {products.map((product: ProductType) => (
        <div key={product.id}>
          <h2>{product.nama}</h2>
          <p>Harga: Rp {product.harga.toLocaleString()}</p>
          <p>Ukuran: {product.ukuran}</p>
          <p>Warna: {product.warna}</p>
        </div>
      ))}
    </div>
  );
};

export default ProdukView;
