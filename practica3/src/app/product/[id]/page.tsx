"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PageWrapper from '../../../components/wrappers/pageWrapper';
import { useSelection } from '../../../context/context';
import { Product } from '../../../types/types';
import styles from '../../page.module.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { toggleSelection, checkIsSelected } = useSelection();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  const isSelected = checkIsSelected(product.id);

  return (
    <PageWrapper>
      <div className={styles.container}>
        <div className={styles.gallery}>
          {product.images?.map((img, index) => (
            <img key={index} src={img} alt={product.title} />
          ))}
        </div>
        <div className={styles.info}>
          <h1>{product.title}</h1>
          <p className={styles.brand}>{product.brand}</p>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.stock}>Stock disponible: {product.stock}</p>
          <button 
            onClick={() => toggleSelection(product)}
            className={`${styles.mainBtn} ${isSelected ? styles.active : ''}`}
          >
            {isSelected ? 'Borrar de favoritos' : 'Añadir a favoritos'}
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}