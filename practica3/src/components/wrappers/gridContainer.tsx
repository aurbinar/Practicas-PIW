import styles from '../../app/page.module.css';
import { ReactNode } from 'react';

export default function GridContainer({ children }: { children: ReactNode }) {
  return (
    <section className={styles.grid}>
      {children}
    </section>
  );
}