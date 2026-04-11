"use client";
import Link from 'next/link';
import { useSelection } from '../context/context';
import styles from '../app/page.module.css';

export default function Navbar() {
  const { selectedProducts } = useSelection();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>Tienda</Link>
      <div className={styles.links}>
        <Link href="/">Catálogo</Link>
        <Link href="/selected" className={styles.cartLink}>
          Seleccionados 
          <span className={styles.badge}>{selectedProducts.length}</span>
        </Link>
      </div>
    </nav>
  );
}