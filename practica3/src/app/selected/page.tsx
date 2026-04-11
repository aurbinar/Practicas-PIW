"use client";
import PageWrapper from '../../components/wrappers/pageWrapper';
import GridContainer from '../../components/wrappers/gridContainer';
import ProductCard from '../../components/productCard';
import { useSelection } from '../../context/context';

export default function SelectedPage() {
  const { selectedProducts } = useSelection();

  return (
    <PageWrapper>
      <h1>Tu Selección</h1>
      {selectedProducts.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p>No tienes productos seleccionados todavía.</p>
        </div>
      ) : (
        <GridContainer>
          {selectedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </GridContainer>
      )}
    </PageWrapper>
  );
}