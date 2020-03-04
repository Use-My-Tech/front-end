import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import deleteImg from "../imgs/delete.png";

import { Button, Card, DeleteImg, Image } from "../styles/styled"

function ItemCard({ item, deleteItem }) {
  const id = Number(localStorage.getItem("user"));
  const history = useHistory();
  const showItem = () => {
    history.push(`/item${item.id}`);
  };

  return (
    <Card>
      {id === item.user_id && window.location.pathname === "/owner/items" ? (
        <DeleteImg src={deleteImg} onClick={evt => deleteItem(item.id)}/>
      ) : null}
      <h3>
        {item.item_name} {item.daily_rate}$/day
      </h3>
      {item.imgs === "" ? <Button onClick={showItem}>show</Button> : <Image src={item.imgs} alt="" onClick={showItem}/>}
      
      <p>
        condition: {item.condition} address: {item.location} <br /> description: {item.description}
      </p>
      
    </Card>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actionCreators)(ItemCard);
