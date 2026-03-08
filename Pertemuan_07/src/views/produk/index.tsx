import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const ProdukView = () => {
  // const router = useRouter();

  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const isLogin = localStorage.getItem("isLogin");
  //   if (!isLogin) {
  //     router.push("/auth/login");
  //   }
  // }, [router]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/produk");
      const data = await response.json();
      setProducts(data.data); 
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {fetchProducts();}, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <button onClick={fetchProducts} disabled={loading} style={{
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >{loading ? "Loading..." : "Refresh Data"}</button>
      {products.map((product: ProductType) => (
        <div key={product.id} style={{border: "1px solid #ccc", marginBottom: "10px", padding: "10px",}}>
          <h2>{product.name}</h2>
          <p>Harga: Rp {product.price}</p>
          <p>Ukuran: {product.size}</p>
          <p>Kategori: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default ProdukView;