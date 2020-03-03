import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import axios from "../axiosWithAuth";
import ItemCard from "./ItemCard";

function OwnerDashboard({ addForm, changeHandler, data, fetchAllItems, onAdd }) {
  const id = localStorage.getItem("user");

  useEffect(() => {
    fetchAllItems()
  }, []);

  return (
    <div>
      owner dashboard
      <form>
        <label>
          name:
          <input
            name="item_name"
            onChange={changeHandler}
            value={addForm.item_name}
          />
        </label>
        <label>
          daily-rate:
          <input
            name="daily_rate"
            onChange={changeHandler}
            value={addForm.daily_rate}
            type="number"
          />
        </label>
        <label>
          condition:
          <input
            name="condition"
            onChange={changeHandler}
            value={addForm.condition}
          />
        </label>
        <label>
          address:
          <input
            name="location"
            onChange={changeHandler}
            value={addForm.location}
          />
        </label>
        <button type="button" onClick={evt => onAdd(addForm, id)}>
          submit
        </button>
      </form>
      {data.map(item => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    addForm: state.addForm,
    data: state.data
  };
}

export default connect(mapStateToProps, actionCreators)(OwnerDashboard);
