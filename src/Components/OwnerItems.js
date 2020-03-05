import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import ItemCard from "./ItemCard";

import {
  Button,
  CardContainer,
  Container,
  Form,
  Input
} from "../styles/styled";

function OwnerItems({ addForm, data, changeHandler, onAdd, fetch }) {
  const id = Number(localStorage.getItem("user"));
  const filteredData = data.filter(item => item.user_id === id);
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    if (data.length === 0) {
      setIsData(true);
      fetch(`https://usetechstuff.herokuapp.com/api/users/${id}/items`);
    }
  }, []);

  return (
    <>
      <Container>
        <Form>
          <label>
            name
            <Input
              name="item_name"
              onChange={changeHandler}
              value={addForm.item_name}
            />
          </label>
          <label>
            daily-rate
            <Input
              name="daily_rate"
              onChange={changeHandler}
              value={addForm.daily_rate}
              type="number"
            />
          </label>
          <label>
            condition
            <Input
              name="condition"
              onChange={changeHandler}
              value={addForm.condition}
            />
          </label>
          <label>
            address
            <Input
              name="location"
              onChange={changeHandler}
              value={addForm.location}
            />
          </label>
          <label>
            description
            <Input
              name="description"
              onChange={changeHandler}
              value={addForm.description}
            />
          </label>
          <Button
            id="form-button"
            type="button"
            onClick={evt => onAdd(addForm, id)}
          >
            SUBMIT
          </Button>
        </Form>
      </Container>
      <CardContainer>
        {isData
          ? data.map(item => {
              return <ItemCard key={item.id} item={item} />;
            })
          : filteredData.map(item => {
              return <ItemCard key={item.id} item={item} />;
            })}
      </CardContainer>
    </>
  );
}

function mapStateToProps(state) {
  return {
    addForm: state.addForm,
    data: state.data
  };
}

export default connect(mapStateToProps, actionCreators)(OwnerItems);
