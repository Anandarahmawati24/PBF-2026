import { useRouter } from "next/router";

const HalamanProduk = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log("Router:", router);
  console.log("ID Produk:", id);

  return (
    <div>
      <h2>Halaman Produk</h2>
      <p>Produk: {id}</p>
    </div>
  );
};

export default HalamanProduk;