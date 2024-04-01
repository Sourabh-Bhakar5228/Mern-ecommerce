import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcurb from '../components/Breadcrumps/Breadcurb'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../components/DescrptionBox/DescriptionBox'
import RelatedProduct from '../components/RelatedProduct/RelatedProduct'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const { productId } = useParams()
  // const product = all_product.find((e) => e.id === Number(productId))
  const product = all_product.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div >
      <Breadcurb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product
