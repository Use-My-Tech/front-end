import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import axios from "../axiosWithAuth";
import ItemCard from "./ItemCard";

function RenterDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios()
      .get("https://usetechstuff.herokuapp.com/api/items")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      renter dashboard
      {data.map(item => {
        return (
          <ItemCard key={item.id} item={item}/>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actionCreators)(RenterDashboard);
