import { ProductCreator } from '../components/Products/ProductForm';
import { Product } from '../shared/Table/Table.mockdata';
import http from '../utils/http';

export const getAllProducts = () =>
http.get<Product[]>('/products')
.then(res => res.data)

export const createSingleProduct= (product: ProductCreator) =>
http.post<Product>('/products', product)

export const updateSingleProduct= ({_id, name, price, stock }: Product) =>
http.patch<Product>(`/products/${_id}`, {
    ...(name && { name}),
    ...(price && { price}),
    ...(stock && { stock}),
})

export const deleteSingleProduct= (_id: string ) =>
http.delete(`/products/${_id}`)


