import React from 'react';
import styles from './styles.module.scss';


class Product extends React.Component {
   
    render() {
		const { product } = this.props;
        return (
            <div className={styles.cardContainer}>
                <img  src={product.url} />
                <td>{product.title}</td>
                 <td>${product.price}</td>
				<button   type="submit">
				Agregar al Carro
			</button>
             </div>
        );
    }
}

export default Product;
