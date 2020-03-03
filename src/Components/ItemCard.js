import React from 'react';
import { useHistory } from "react-router-dom";

export default function ItemCard({item}) {
    const history = useHistory()
    const showItem = () => {
        history.push(`/item${item.id}`)
    }
    return(
        <a onClick={showItem}>
            <h3>{item.item_name} {item.daily_rate}$/day</h3>
            <img src={item.imgs} alt=""/>
            <h4>condition: {item.condition}</h4>
            <p>address: {item.location} <br/> description: {item.description}</p>
          </a>
    )
}