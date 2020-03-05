import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import ItemCard from "./ItemCard";

import { CardContainer } from "../styles/styled";

function OwnerDashboard({ data, fetch }) {
  useEffect(() => {
    fetch("https://usetechstuff.herokuapp.com/api/items");
  }, []);

  return (
    <div>
      <CardContainer>
        {data.map(item => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </CardContainer>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps, actionCreators)(OwnerDashboard);
