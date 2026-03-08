import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h3 >About Page</h3> 
      <p>Nama: Ananda Rahmawati</p>
      <p>NIM: 2341720048</p>
      <p>Program Studi: D4 Teknik Informatika</p>
    </div>
  );
}