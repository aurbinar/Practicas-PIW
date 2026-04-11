"use client";
import { useState, useEffect } from "react";
import Search from "../components/search";
import { Product } from "../types/types";
import styles from "./page.module.css"
import ProductCard from "../components/productCard";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  
  const [searchQuery, setSearchQuery] = useState("");
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className={styles.pageContainer}>
      <h1>Catálogo de Productos</h1>

      <Search setSearchQuery={setSearchQuery} />

      {isLoading ? (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          Cargando catálogo...
        </p>
      ) : (
        <section className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}