// import React from "react";
// import { Field, reduxForm, formValueSelector } from "redux-form";
// import { connect } from "react-redux";
// import * as selectors from "../selectors/selectors_all";

// export class FormContainer extends React.Component {
//   render() {
//     const { sum,am1,am2 } = this.props;
//     return (
//       <form>
//         <Field
//           name="amount1"
//           type="number"
//           component="input"
//           label="Amount 1"
//         />
//         <Field
//           name="amount2"
//           type="number"
//           component="input"
//           label="Amount 1"
//         />
//         <Field
//           name="amount3"
//           type="number"
//           component="input"
//           label="Amount 3"
//         />
//         <Field
//           name="amount4"
//           type="number"
//           component="input"
//           label="Amount 4"
//         />
//         Total sum: {sum}<br/>
//         amount1: {am1}
//         amount2: {am2}
//       </form>
//     );
//   }
// }

// FormContainer = reduxForm({
//   form: "myForm" // a unique identifier for this form
// })(FormContainer);

// const mapStateToProps = state => {
//   return {
//     sum: selectors.sumAmounts(state),
//     am1: selectors.getAmount1(state),
//     am2:selectors.getAmount2(state)

//   };
// };

// FormContainer = connect(
//   mapStateToProps,
//   null
// )(FormContainer);

// export default FormContainer;
