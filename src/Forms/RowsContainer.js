import React, { Fragment } from "react"
import RowComponent from "./RowComponent";
import * as selectors from "../selectors/sumSelector";
import {
  Field,
} from "redux-form";
import { connect } from "react-redux";

class RowsContainer extends React.Component {
  render() {
    const { fields } = this.props;
    debugger

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

        
        Total amount1
        <Field
          name="totalAmount2"
          type="number"
          component="input"
          label="Total Amount 2"
        />

      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    sum: selectors.sumAmounts(state),
    initialValues: [{ amount1: 1 }]
    // t1: selectors.totalAmount1(state)
  };
};

const mapDispatchToProps = {
  //change
};

connect({
  mapStateToProps,
  mapDispatchToProps
})(RowsContainer);

export default RowsContainer;
