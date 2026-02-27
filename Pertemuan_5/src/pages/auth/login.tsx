import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const halamanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
     // logic login
        push("/produk");
    };
    return (
        <div className={styles.login}>
            <h1>Halaman Login</h1>
           {/* <button onClick={handlerLogin}>Login</button> <br /> }*/}
           {/* <button onClick={() => push("/produk")}>Login </button> <br /> */}
            <button onClick={() => handlerLogin()}>Login</button> <br />
           <p>Belum punya akun? <br /> <Link href="/auth/register">Ke Halaman Register</Link></p>
        </div>
    );
};

export default halamanLogin;