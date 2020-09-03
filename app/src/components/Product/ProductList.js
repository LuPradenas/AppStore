import React from 'react';
import styles from './styles.module.scss';
import Product from './Product';

class ProductsList extends React.Component {

	render() {
	  const { add_to_cart, products } = this.props;
  
	  return (
		<div className={styles.cardList}>
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					add_to_cart={add_to_cart}
				/>
			))}
		</div>
	);
 };
}

export default ProductsList;