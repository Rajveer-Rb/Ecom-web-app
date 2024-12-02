import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import starImg from '../Assets/star_icon.png'
import starDull from '../Assets/star_dull_icon.png'
import trolley from '../Assets/trolley.svg'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  
  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
    

    const handleSizeClick = (size) => {
        setSelectedSize(size);
        console.log(size)
    };

  return (
    <div className='display'>

      <div className="left">
        <div className="images">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="Main_productImg">
            <img className='mainImg' src={product.image} alt="" />
        </div>
      </div>

      <div className="right">
        <h1 className='heading'>{product.name}</h1>
        <div className="ratings">
            <img src={starImg} alt="" />
            <img src={starImg} alt="" />
            <img src={starImg} alt="" />
            <img src={starImg} alt="" />
            <img src={starDull} alt="" />
            <p className='totalRatings'>(122)</p>
        </div>
        <div className="prices">
            <div className="prevPrice">${product.old_price}</div>
            <div className="NewPrice">${product.new_price}</div>
        </div>
        <div className="description">
        Wrap yourself in warmth and style with our Cozy Knit Sweater. Crafted from soft, breathable fabric, this versatile sweater features a relaxed fit, ribbed cuffs, and a classic crew neckline. Perfect for layering or wearing on its own, it's an essential addition to your wardrobe for any season. Available in multiple colors.
        </div>
        <div className="sizes">
            <h1>Select size</h1>
            <div className="AvailableSizes">
                <div size="S" onClick={() => {handleSizeClick()}}>S</div>
                <div size="M" onClick={() => {handleSizeClick()}}>M</div>
                <div size="L" onClick={() => {handleSizeClick()}}>L</div>
                <div size="XL" onClick={() => {handleSizeClick()}}>XL</div>
                <div size="XXL" onClick={() => {handleSizeClick()}}>XXL</div>
            </div>
        </div>

        <button onClick={() => {addToCart(product.id)}} className='AddToCart'>ADD TO CART <img src={trolley} alt="" /></button>
        <p className='category'><span>Category : </span>Women , T-Shirt, Crop Top</p>
        <p className='category'><span>Tags : </span>Modern , Latest</p>

      </div>

    </div>
  )
}

export default ProductDisplay
