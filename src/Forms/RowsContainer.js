import React, { Fragment } from "react";
import RowComponent from "./RowComponent";

import { registerSelectors } from "reselect-tools";

import * as selectors from "../selectors/selectors_all";

import { getTotalAmount1 } from "../selectors/selectors_all";

import { connect } from "react-redux";

registerSelectors(selectors);

class RowsContainer extends React.Component {
  render() {
    const { fields, totalAmount1 } = this.props;

    console.log('totalAmount1 in rowscontainer',totalAmount1)
    
    return (
      <Fragment>
        <button type="button" onClick={() => fields.push({})}>
          Add Row
        </button>
        <ul>
          {fields.map((name, index) => (
            <RowComponent row={name} fields={fields} index={index} />
          ))}
        </ul>


        {/* total amount 1 {totalAmount1.amount1}
        total amount 2 {totalAmount1.amount2} */}
      
      </Fragment>
    );
  }
}


const mapStateToProps = state => ({
  totalAmount1: getTotalAmount1(state)
});



RowsContainer = connect(
    mapStateToProps,
    undefined
  )(RowsContainer)

  export default RowsContainer;