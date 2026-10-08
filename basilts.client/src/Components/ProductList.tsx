import { useEffect, useState } from 'react';
import { productService, type Product } from '../api/productService';
import ProductCard from './ProductCard';
import './ProductList.css';

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        productService.getAll()
            .then(data => setProducts(data))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading products...</p>;

    return (
        <div className="product-grid">
            {products.map(p => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}