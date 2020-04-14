import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import deleteImg from "../imgs/delete.png";

import { Button, Card, DeleteImg, Image } from "../styles/styled";

function ItemCard({ cart, item, addToCart, deleteToCart, deleteItem }) {
  const id = Number(localStorage.getItem("user"));
  const type = localStorage.getItem("type");
  const history = useHistory();
  const showItem = () => {
    history.push(`/item${item.id}`);
  };

  return (
    <Card>
      {id === item.user_id && window.location.pathname === "/owner/items" ? (
        <DeleteImg src={deleteImg} onClick={(evt) => deleteItem(item.id)} />
      ) : null}
      <h3>
        {item.item_name} {item.daily_rate}$/day <br /> condition:{" "}
        {item.condition}
      </h3>
      {item.imgs === "" ? (
        <Button onClick={showItem}>show</Button>
      ) : (
        <Image src={item.imgs} alt="" onClick={showItem} />
      )}
      <p>
        address: {item.location} <br /> {item.description}
      </p>
      {type === "renter" && !cart.includes(item) && (
        <Button onClick={(evt) => addToCart(item)}>Add To Cart</Button>
      )}{" "}
      {type === "renter" && cart.includes(item) && (
        <DeleteImg src={deleteImg} onClick={(evt) => deleteToCart(item)} />
      )}
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps, actionCreators)(ItemCard);
