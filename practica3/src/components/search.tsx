"use client";
import styles from '../app/page.module.css';

interface SearchProps {
  setSearchQuery: (query: string) => void;
}

export default function Search({ setSearchQuery }: SearchProps) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Buscar productos..."
        className={styles.searchInput}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}