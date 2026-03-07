import styles from "./register.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Register = () => {
  const { push } = useRouter();

  const handlerRegister = () => {
    push("/auth/login");
  };

  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <h1 className={styles.title}>Halaman Register</h1>

        <input type="text" placeholder="Username" className={styles.input} />

        <input type="password" placeholder="Password"className={styles.input}/>

        <button onClick={handlerRegister} className={styles.button}> Register</button>

        <Link href="/auth/login" className={styles.link}>Sudah punya akun? Login</Link>
      </div>
    </div>
  );
};

export default Register;
