import React from 'react';

export default function ItemCard({item}) {
    
    return(
        <div key={item.id}>
            <h3>{item.item_name} {item.daily_rate}$/day</h3>
            <img src={item.imgs} alt=""/>
            <h4>condition: {item.condition}</h4>
            <p>address: {item.location} <br/> description: {item.description}</p>
          </div>
    )
}