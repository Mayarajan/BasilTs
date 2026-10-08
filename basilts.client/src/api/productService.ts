// src/api/productService.ts
import { handleRequest } from './apiClient';

export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    stock: number;
    imageUrl?: string;
}

// Interacts directly with your C# ProductController
export const productService = {
    getAll: () => handleRequest<Product[]>('/api/products'),
    getById: (id: number) => handleRequest<Product>(`/api/products/${id}`),
    // You can easily add create, update, delete functions here later
};