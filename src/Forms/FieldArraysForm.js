import React, { Component, Fragment } from "react";
import {
  Field,
  FieldArray,
  reduxForm,
  getFormValues,
  change,
  
} from "redux-form";



import RowsContainer from './RowsContainer'


class FieldArraysForm extends Component {
  render() {
    const { handleSubmit ,stuff} = this.props;

    console.log(stuff)

    return (
      <form onSubmit={handleSubmit}>
        <FieldArray name="items" component={RowsContainer} />

      </form>
    );
  }
}


export default reduxForm({
  form: "fieldArraysForm"
})( FieldArraysForm)
