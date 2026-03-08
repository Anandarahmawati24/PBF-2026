import { useRouter } from "next/router";
import { useEffect } from "react";
import HeroSection from "./hero_section";
import MainSection from "./main_section";

const ProdukView = () => {
  const router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <MainSection />
    </div>
  );
};

export default ProdukView;
