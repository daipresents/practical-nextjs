// 「3-2-2-2.Route Groups 専用のレイアウトをネストする」で解説されている「Layout A」ファイル

import { Metadata } from "next";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Nav } from "./_components/Nav";
import styles from "./layout.module.css";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  description: "/photos Segment の Layout で設定された description",
};

// 動的要素が入り混り構成される(site)配下で全適用されるレイアウト
export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Nav />
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
