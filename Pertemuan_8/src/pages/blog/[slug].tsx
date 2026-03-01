import Router, { useRouter } from "next/router";

const BlogDetail = () => {
  const router = useRouter();
  console.log(Router);
  const { slug } = router.query;

  return (
    <div>
      <h2>Halaman Blog</h2>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default BlogDetail;
