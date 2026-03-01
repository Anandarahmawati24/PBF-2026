import ProdukView from "@/views/produk";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const HalamanProdukServer = (props:{products: ProductType[]}) => {
  return (
    <div>
      <h1>Halaman Produk Server</h1>
      <ProdukView products={props.products} isLoading={false} />
    </div>
  );
};

export default HalamanProdukServer;

//fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari API sebelum merender halaman.
export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/produk");
    const respone = await res.json();
    //console.log("Data produk yang diambil dari API:", respone);
    return {
      props: {
        products: respone.data, // pastikan untuk memberikan nilai default jika data tidak tersedia
      },
    };
};