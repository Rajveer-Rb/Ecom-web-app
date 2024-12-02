import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescripBox from '../Components/DescriptionBox/DescripBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {

  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));    // for converting product-id into integer, as it is string by default
  return (
    <div className='product'>
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <DescripBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
