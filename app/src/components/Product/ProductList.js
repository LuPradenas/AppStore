import React from 'react';
import styles from './styles.module.scss';
import Product from './Product';

class ProductsList extends React.Component {
   state = {
	   products:[],
   };

   async componentDidMount(){
	axios.get('http://localhost:8080//apps/:id')
	.then(res =>{
		const products = res.data;
    this.setState({products: products.data});
	})

   }
	render() {
	  const { products } = this.props;
  
	  return (
		<div className={styles.cardList}>
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
 };
}

export default ProductsList;