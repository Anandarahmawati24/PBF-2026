import styles from "@/styles/404.module.scss";
const Custom404 = () => {
    return (
        <div className={styles.eror}>
            <img src="/page-not-found.png" alt="404" className={styles.eror_image} />
            <h1>404 - Halaman Tidak Ditemukan</h1>
            <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
        </div>
    );
};

export default Custom404;