import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import deleteImg from "../imgs/delete.png";

function ItemCard({ item, deleteItem }) {
  const id = Number(localStorage.getItem("user"));
  const history = useHistory();
  const showItem = () => {
    history.push(`/item${item.id}`);
  };

  return (
    <>
      <h3>
        {item.item_name} {item.daily_rate}$/day
      </h3>
      {id === item.user_id ? (
        <img src={deleteImg} onClick={evt => deleteItem(item.id)}/>
      ) : null}
      {item.imgs === "" ? <button onClick={showItem}>show</button> : <img src={item.imgs} alt="" onClick={showItem}/>}
      <h4>condition: {item.condition}</h4>
      <p>
        address: {item.location} <br /> description: {item.description}
      </p>
      
    </>
  );
}

function mapStateToProps(state) {
  return { };
}

export default connect(mapStateToProps, actionCreators)(ItemCard);
