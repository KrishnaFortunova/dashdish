import React from 'react'
import './Popular.css'
import products from '../../data/Products'
import Item from '../Item/Item';
import { useNavigate } from 'react-router-dom/dist';

const Popular = () => {
  const navigate = useNavigate()
  const popular_products = [products[2], products[4], products[6], products[8]]
  return (
    <div className='popular'>
      <h1>POPULAR</h1>
      <hr />
      <div className="popular-item">
        {popular_products.map((item, i) => (
          <div key={i} onClick={() => navigate('/food-amount', { state: item.id })} className="item-link">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Popular