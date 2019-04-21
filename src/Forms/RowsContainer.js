import React from "react";
import RowsComponent from "./RowComponent";
import * as selectors from "../selectors/sumSelector";
import {
  Field,
  FieldArray,
  reduxForm,
  getFormValues,
  change
} from "redux-form";
import { connect } from "react-redux";

class RowsContainer extends React.Component {
  render() {
    const { fields } = this.props;

    return (
      <div>
        {fields.map((name, index) => (
          <RowsComponent row={name} index={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sum: selectors.sumAmounts(state)
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
