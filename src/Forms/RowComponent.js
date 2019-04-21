import React from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";

const RowsComponent = ({ fields, index, row }) => (
  <li key={index}>

    <h4>Rownr #{index + 1}</h4>
    <button
        type="button"
        title="Remove Row"
        onClick={() => fields.remove(index)}
      />
    
    <Field
      name={`${row}.amount1`}
      type="number"
      component="input"
      label="Amount 1"
    />
    <Field
      name={`${row}.amount2`}
      type="number"
      component="input"
      label="Amount 2"
    />
  </li>
);

export default RowsComponent;

// eslint-disable-next-line no-lone-blocks

// eslint-disable-next-line no-lone-blocks
