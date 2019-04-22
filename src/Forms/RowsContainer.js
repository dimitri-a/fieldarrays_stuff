import React, { Fragment } from "react";
import RowComponent from "./RowComponent";
import { registerSelectors } from "reselect-tools";
import * as selectors from "../selectors/selectors_all";
import { getTotalAmount1, getTotalAmount2 } from "../selectors/selectors_all";
import { connect } from "react-redux";
registerSelectors(selectors);

class RowsContainer extends React.Component {
  render() {
    const { fields, totalAmount1, totalAmount2 } = this.props;
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
        Total amount1 = {totalAmount1}
        Total amount2 = {totalAmount2}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  totalAmount1: getTotalAmount1(state),
  totalAmount2: getTotalAmount2(state)
});

RowsContainer = connect(
  mapStateToProps,
  undefined
)(RowsContainer);

export default RowsContainer;
