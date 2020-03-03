import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import axios from "../axiosWithAuth";
import ItemCard from "./ItemCard";

function OwnerItems() {
    const [data, setData] = useState([])
    const id = localStorage.getItem("user")
  useEffect(() => {
    axios()
      .get(`https://usetechstuff.herokuapp.com/api/users/${id}/items`)
      .then(res => {
        console.log(res);
        setData(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {data.map(item => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actionCreators)(OwnerItems);
