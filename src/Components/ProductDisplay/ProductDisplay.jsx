import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className = "productdisplay-main-img" src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            This beige polo t-shirt by WES Casuals features an evergreen striped pattern in a relaxed fit. Crafted from lightweight fabric for added breathability, this classic old-school design is finished with a cutaway collar and short sleeves, making it a timeless choice for casual wear.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select size</h1>
                <div className="productdisplay-right-sizes">
                    <div className='selected-size'>S</div>
                    <div className='selected-size'>M</div>
                    <div className='selected-size'>L</div>
                    <div className='selected-size'>XL</div>
                    <div className='selected-size'>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category">
                <span>Category: </span> Women, T Shirt, Slim Fit
            </p>
            <p className="productdisplay-right-category">
                <span>Tags: </span> Modern, Latest, Trending
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay