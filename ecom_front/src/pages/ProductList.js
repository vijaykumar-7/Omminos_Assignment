import React from 'react'

const ProductList = ({product, addToCart}) => {
  return (
    <div className='main'>
      {
        product.map((item, index)=>{
            return(
                <div style={{ width: '33%' }}>
                    <div className='product-item'>                      
                        <img src={item.url} width="100%" />
                        <p>{item.name} | {item.category} </p>
                        <p> {item.seller} </p>
                        <p> Rs. {item.price} /-</p>
                        <button onClick={()=>addToCart(item)}>add to cart</button>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default ProductList
