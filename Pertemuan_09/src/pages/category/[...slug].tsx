import { useRouter } from "next/router";

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Halaman Kategori</h1>

      <ul>
        {Array.isArray(slug) ? (
          slug.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>Tidak ada kategori</li>
        )}
      </ul>
    </div>
  );
}
