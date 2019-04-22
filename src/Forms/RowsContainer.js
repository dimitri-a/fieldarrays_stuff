import React, { Fragment } from "react";
import RowComponent from "./RowComponent";

import { registerSelectors } from "reselect-tools";

import * as selectors from "../selectors/selectors_all";

import { getCurrentAdjustedEbitda } from "../selectors/selectors_all";
import { connect } from "react-redux";

registerSelectors(selectors);

class RowsContainer extends React.Component {
  render() {
    const { fields, getEb } = this.props;


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
        getEb: {getEb}
      </Fragment>
    );
  }
}


const mapStateToProps = state => ({
  getEb: getCurrentAdjustedEbitda(state)
});



RowsContainer = connect(
    mapStateToProps,
    undefined
  )(RowsContainer)

  export default RowsContainer;