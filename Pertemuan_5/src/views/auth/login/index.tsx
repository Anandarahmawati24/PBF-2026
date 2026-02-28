import Link from "next/link";
import { useRouter } from "next/router";
//import styles from "./login.module.css";
import styles from "./login.module.scss";

const TampilanLogin = () => {
  const { push } = useRouter();
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
      <h1 style={{ color: "red",borderRadius: "10px",padding: "10px",}}> belum punya akun</h1>
      <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  );
};

export default TampilanLogin;
