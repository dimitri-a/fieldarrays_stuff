import React, { Component, Fragment } from "react";
import {
  Field,
  FieldArray,
  reduxForm,
  getFormValues,
  change
} from "redux-form";
import { connect } from "react-redux";
import * as selectors from "../selectors/sumSelector";
import RowsContainer from './RowsContainer'


class FieldArraysForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <FieldArray name="items" component={RowsContainer} />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default FieldArraysForm

// const mapStateToProps = state => {
//   return {
//     sum: selectors.sumAmounts(state),
//     // t1: selectors.totalAmount1(state)
//   };
// };

// const mapDispatchToProps = {
//   change
// };

// export default reduxForm({
//   form: "fieldArraysForm"
// })(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(FieldArraysForm)
// );
