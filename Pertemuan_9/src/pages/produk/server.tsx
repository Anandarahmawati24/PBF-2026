import ProdukView from "@/views/produk";

const HalamanProdukServer = () => {
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <ProdukView products={[]} isLoading={false} />
    </div>
  );
};

export default HalamanProdukServer;
