import styles from '../../app/page.module.css';
import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <main className={styles.pageContainer}>
      {children}
    </main>
  );
}