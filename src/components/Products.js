import React from 'react'
import { ProductContext } from '../context/productContext'

export default function Products() {
    const state = React.useContext(ProductContext)
    const { products } = state.state
    const { loading } = state.state
    const { addToCart } = state

    return (
        <div className="products">
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="products_grid">
                    {products && products.map(product => (
                        <div className="products_grid_item" key={product.id}>
                            <a href={`/products/${product.id}`}>
                                <div className="products_grid_item_image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="products_grid_item_title">
                                    {product.title}
                                </div>
                            </a>
                            <button className="products_grid_item_button" onClick={() => addToCart(product)}>
                                Add to cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
