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

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderitems = ({ fields, meta: { error, submitFailed },t1 }) => (
  <Fragment>
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>
          Add Row
        </button>
        {submitFailed && error && <span>{error}</span>}
      </li>
      {fields.map((item, index) => (
        <li key={index}>
          1
          <button
            type="button"
            title="Remove Row"
            onClick={() => fields.remove(index)}
          />
          <h4>Rownr #{index + 1}</h4>
          <Field
            name={`${item}.amount1`}
            type="number"
            component={renderField}
            label="Amount 1"
          />
          <Field
            name={`${item}.amount2`}
            type="number"
            component={renderField}
            label="Amount 2"
          />
        </li>
      ))}
    </ul>

  
  Total amount1 = {t1}

    <Field
      name="totalAmount2"
      type="number"
      component="input"
      label="Total Amount 2"
    />
  </Fragment>
);

class FieldArraysForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <FieldArray name="items" component={renderitems} />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    sum: selectors.sumAmounts(state),
    // t1: selectors.totalAmount1(state)
  };
};

const mapDispatchToProps = {
  change
};

export default reduxForm({
  form: "fieldArraysForm"
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FieldArraysForm)
);
