import type { Product } from '../api/productService';
import './ProductCard.css';

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    return (
        <div className="product-card">
            <div className="product-card__image">
                {product.imageUrl? (
                    <img src={product.imageUrl} alt={product.name} />
                ) : (
                    <span>No image</span>
                )}
            </div>
            <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>
                {product.description && (
                    <p className="product-card__desc">{product.description}</p>
                )}
                <div className="product-card__footer">
                    <span className="product-card__price">${product.price.toFixed(2)}</span>
                    <button disabled={product.stock === 0}>
                        {product.stock === 0 ? 'Sold out' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </div>
    );
}