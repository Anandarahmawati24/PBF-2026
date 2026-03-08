import { useRouter } from "next/router";

const DetailProdukView = () => {
  const { query } = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded border">
        <h2 className="text-xl font-bold mb-2">Detail Produk</h2>
        <p className="text-gray-600">Produk ID: {query.id}</p>
      </div>
    </div>
  );
};

export default DetailProdukView;
