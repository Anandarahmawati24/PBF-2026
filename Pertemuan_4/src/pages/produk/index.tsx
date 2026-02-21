import { useRouter } from "next/router";
import { useEffect } from "react";

const Produk = () => {
  const router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  return <div>Produk Page</div>;
};

export default Produk;