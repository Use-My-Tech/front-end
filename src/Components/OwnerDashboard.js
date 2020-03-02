import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import axios from "../axiosWithAuth";

function OwnerDashboard() {

    useEffect(() => {
        axios()
        .get("https://usetechstuff.herokuapp.com/api/items")
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <div>
            owner dashboard
        </div>
    )
}

function mapStateToProps(state) {
    return {
      loginForm: state.loginForm
    };
  }
  
  export default connect(mapStateToProps, actionCreators)(OwnerDashboard);
  