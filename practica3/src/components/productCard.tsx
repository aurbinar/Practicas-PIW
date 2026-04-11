"use client";
import Link from 'next/link';
import { Product } from '../types/types';
import { useSelection } from '../context/context';
import styles from '../app/page.module.css';

export default function ProductCard({ product }: { product: Product }) {
  const { toggleSelection, checkIsSelected } = useSelection();
  const isSelected = checkIsSelected(product.id);

  return (
    <div className={styles.card}>
      <img src={product.thumbnail} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h3>{product.title}</h3>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.price}>{product.price}€</p>
        
        <div className={styles.actions}>
          <Link href={`/product/${product.id}`} className={styles.detailBtn}>
            Ver detalle
          </Link>
          <button 
            onClick={() => toggleSelection(product)}
            className={`${styles.selectBtn} ${isSelected ? styles.selected : ''}`}
          >
            {isSelected ? 'Quitar' : 'Añadir'}
          </button>
        </div>
      </div>
    </div>
  );
}