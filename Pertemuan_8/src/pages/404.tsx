import styles from "@/styles/404.module.scss";
import Head from "next/head";
import Link from "next/link";
const Custom404 = () => {
    return (
      <div className={styles.eror}>
        <head>
          <title>Error - 404</title>
        </head>
        <img
          src="/page-not-found.png"
          alt="404"
          className={styles.eror_image}
        />
        <h1>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>

        <Link href="/">
          <button className={styles.eror_button}>Kembali ke Home</button>
        </Link>
      </div>
    );
};

export default Custom404