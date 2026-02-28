import { useRouter } from "next/router";

const DetailProdukView = () => {
  const { query } = useRouter();

  return (
    <div>
      <h2>Halaman Produk</h2>
      <p>Produk: {query.id}</p>
    </div>
  );
};

export default DetailProdukView;
