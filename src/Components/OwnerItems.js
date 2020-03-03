import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import ItemCard from "./ItemCard";

function OwnerItems({data, fetch}) {
    const id = localStorage.getItem("user")

  useEffect(() => {
      fetch(`https://usetechstuff.herokuapp.com/api/users/${id}/items`)
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
  return {
      data: state.data
  };
}

export default connect(mapStateToProps, actionCreators)(OwnerItems);
