import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

function Home() {
    return (
        <div>
            home
        </div>
    )
}

function mapStateToProps(state) {
    return {
      loginForm: state.loginForm
    };
  }
  
  export default connect(mapStateToProps, actionCreators)(Home);
  