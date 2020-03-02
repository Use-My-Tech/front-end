import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "../axiosWithAuth";

import ItemCard from "./ItemCard";

export default function ItemById() {
    const [item, setItem] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios()
        .get(`https://usetechstuff.herokuapp.com/api/item/${id}`)
        .then(res => {
            console.log(res)
            setItem(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <ItemCard key={item.id} item={item}/>
    )
}