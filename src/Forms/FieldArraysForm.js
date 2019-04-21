import React, { Component, Fragment } from 'react'
import { Field, FieldArray, reduxForm, getFormValues, change } from 'redux-form'
import { connect } from 'react-redux'
import { CalcTotal } from '../calculationHelper';
import _ from 'lodash';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderMods = ({ fields, meta: { error, submitFailed } }) => (
  <Fragment>
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>
          Add Row
      </button>
        {submitFailed && error && <span>{error}</span>}
      </li>
      {fields.map((mod, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Row"
            onClick={() => fields.remove(index)}
          />
          <h4>Rownr #{index + 1}</h4>
          
          <Field
            name={`${mod}.amount1`}
            type="number"
            component={renderField}
            label="Amount 1"
          />

          <Field
            name={`${mod}.amount2`}
            type="number"
            component={renderField}
            label="Amount 2"
          />
        
        </li>
      ))}
    </ul>

    <Field
      name="totalAmount1"
      type="number"
      component="input"
      label="Total Amount 1"
    />

<Field
      name="totalAmount2"
      type="number"
      component="input"
      label="Total Amount 2"
    />

  </Fragment>
)


const isArrayEqual = function (x, y) {
  return _(x).differenceWith(y, _.isEqual).isEmpty();
};
class FieldArraysForm extends Component {

  componentDidMount() {
    //initialize the total value
    this.props.change('fieldArraysForm', 'total', 10)
  }

  // componentDidUpdate(prevProps) {
  //   let formHasChanged = false
  //   let newTotal = 0

  //   if (prevProps.formValues && prevProps.formValues.mods && this.props.formValues && this.props.formValues.mods) {
  //     formHasChanged = !(isArrayEqual(prevProps.formValues.mods, this.props.formValues.mods))
  //   }
  //   //form haschanged then calculate the number
  //   if (formHasChanged) {
  //     newTotal = CalcTotal(this.props.formValues.mods);
  //     console.log('calc=', newTotal);
  //     debugger
  //     this.props.change("fieldArraysForm", "total", newTotal.currentYear);
  //   }
  // }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <FieldArray name="mods" component={renderMods} />
        <div>
          <button type="submit" >
            Submit
        </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  formValues: getFormValues('fieldArraysForm')(state),
});

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

