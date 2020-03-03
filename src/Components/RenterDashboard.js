import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import ItemCard from "./ItemCard";

function RenterDashboard({data, fetch}) {

  useEffect(() => {
    fetch("https://usetechstuff.herokuapp.com/api/items")
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
  return {
    data: state.data
  };
}

export default connect(mapStateToProps, actionCreators)(RenterDashboard);
