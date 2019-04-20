import React from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import sumAmounts from "../selectors/sumSelector";

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
          label={this.props.sum}
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
  const amount2 = selector(state, "amount2");
  const sum = sumAmounts(amount1, amount2);
  return { amount1, amount2, sum };
})(FormContainer);

export default FormContainer;
