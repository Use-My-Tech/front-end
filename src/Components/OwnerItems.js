import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import ItemCard from "./ItemCard";

function OwnerItems({data, fetch}) {

    const id = Number(localStorage.getItem("user"))
    const filteredData = data.filter(item => item.user_id === id);
    const [isData, setIsData] = useState(false)
    
  useEffect(() => {
    if (data.length === 0) {
      setIsData(true)
      fetch(`https://usetechstuff.herokuapp.com/api/users/${id}/items`)
    }
  }, []);

  return (
    <>
    {isData ? data.map(item => {return <ItemCard key={item.id} item={item} />}): filteredData.map(item => {
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
