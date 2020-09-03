import React from 'react';
import styles from './styles.module.scss';


class Product extends React.Component {
	
    render() {
		const { add_to_cart, product } = this.props;
        return (
            <div className={styles.cardContainer}>
                <img  src={product.url} />
                <td>{product.title}</td>
                 <td>${product.price}</td>
				<button   type="submit"
				 onClick={e => add_to_cart(e, product)}>
				Agregar al Carro
			</button>
             </div>
        );
    }
}

export default Product;
