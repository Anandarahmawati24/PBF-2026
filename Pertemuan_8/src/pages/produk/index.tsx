import ProdukView from "@/views/produk";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";

const halamanProduk = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState([]);
  //console.log("Products:", products);
  //UseEffect(() => {
  //  if (!isLogin) {
  //    push("/auth/login");
  //  }
  //}, []);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data);
        //console.log("Data Products:", responsedata.data);
  })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
    }, []);

    return (
      <div>
        <ProdukView products={products} />
      </div>
    );
};

export default halamanProduk;