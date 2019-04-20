import React from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";

export class FormContainer extends React.Component {
  render() {
    return (
      <form>
        <Field
          name="amount1"
          type="number"
          component="input"
          label="Amount 1"
        />

        <Field
          name="amount2"
          type="number"
          component="input"
          label="Amount 1"
        />

        <Field
          name="amount3"
          type="number"
          component="input"
          label="Amount 3"
        />

        <Field
          name="amount4"
          type="number"
          component="input"
          label="Amount 4"
        />





<Field
          name="amount4"
          type="number"
          component="label"
          label="Sum of amount1 and 2"
        />



      </form>
    );
  }
}

FormContainer = reduxForm({
  form: "myForm" // a unique identifier for this form
})(FormContainer);

const selector = formValueSelector("myForm");

FormContainer = connect(state => {
  const amount1 = selector(state, "amount1");
  return { amount1 };
})(FormContainer);

export default FormContainer;
