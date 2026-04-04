import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const AboutPage = () => {
  return (
    <div>
      <h1 data-testid="title">About Page</h1>
    </div>
  );
};

export default AboutPage;