import {React,Fragment} from 'react'
import { Field, reduxForm, formValueSelector } from "redux-form";

const RowsComponent = ({ fields, meta: { error, submitFailed },t1 }) => (
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
              component="input"
              label="Amount 1"
            />
            <Field
              name={`${item}.amount2`}
              type="number"
              component="input"
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

  export default RowsComponent;