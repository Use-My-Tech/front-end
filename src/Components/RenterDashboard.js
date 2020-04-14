import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import ItemCard from "./ItemCard";

import { CardContainer, Center } from "../styles/styled";

function RenterDashboard({ data, spinner, fetch }) {
  useEffect(() => {
    fetch("https://eu-use-my-tech.herokuapp.com/api/items");
  }, []);

  return (
    <div>
      {spinner ? (
        <Center>
          <div id="loading"></div>
        </Center>
      ) : (
        <CardContainer>
          {data.map((item) => {
            return <ItemCard key={item.id} item={item} />;
          })}
        </CardContainer>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
    spinner: state.spinner,
  };
}

export default connect(mapStateToProps, actionCreators)(RenterDashboard);
