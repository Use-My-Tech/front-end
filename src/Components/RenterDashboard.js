import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import axios from "../axiosWithAuth";

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
          <div key={item.id}>
            <h3>{item.item_name} {item.daily_rate}$/day</h3>
            <img src={item.imgs}/>
            <h4>condition: {item.condition}</h4>
        <p>address: {item.location} <br/> description: {item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actionCreators)(RenterDashboard);
