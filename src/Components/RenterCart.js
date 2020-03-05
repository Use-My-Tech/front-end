import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import ItemCard from "./ItemCard";

import {CardContainer} from "../styles/styled";

function RenterCart({cart}) {
    return(
        <CardContainer>
        {cart.map(item => {
            return <ItemCard key={item.id} item={item}/>
        })}
        </CardContainer>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    };
  }
  
  export default connect(mapStateToProps, actionCreators)(RenterCart);
  