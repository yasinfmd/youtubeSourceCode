import styles from './products.module.css';
import { Ui } from '@mymonorepoapp/ui';
/* eslint-disable-next-line */
export interface ProductsProps {}

export function Products(props: ProductsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
      <Ui />
    </div>
  );
}

export default Products;
