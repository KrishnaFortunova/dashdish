import React from 'react'
import './Popular.css'
import Products from '../data/Products'
import Item from './Item'

const Popular = () => {
  const start = Math.round(Math.random() * 31)
  const popular_products = Products.slice(start, start + 4)

  return (
    <div className='popular'>
      <h1>POPULAR</h1>
      <hr />
      <div className="popular-item">
        {popular_products.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular