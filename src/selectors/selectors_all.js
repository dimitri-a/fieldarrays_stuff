// import { sum } from "../calculations";
// import { formValueSelector } from "redux-form";
import { createSelector } from "reselect";



// const selector = formValueSelector("fieldArraysForm");

export const getAdjustments = state => {
  const form = state.form.fieldArraysForm;
  if (form && form.values && form.values.items) {
    console.log(form)
    return form.values.items;
  }
  return undefined;
};

export const getCurrentAdjustedEbitda = createSelector(
  getAdjustments,
  (adjustments = []) => currentAdjustedEbitda(adjustments)
);

export function currentAdjustedEbitda(adjustments) {
  return 100
  }
  
  

// export const getForm = state => {
//   console.log(state.fieldArraysForm)
//   return state.fieldArraysForm
//   }

// export const getItems = state => {
//     const form = state.form.fieldArraysForm;
//     if (form && form.values && form.values.items) {
//         console.log('hello')
//       return form.values.items;
//     }
//     return undefined;
//   };

  
// export const getValues = state => state.form

// export const getAmount1 = state => selector(state.items[0].amount1);
// export const getAmount2 = state => selector(state.items[1].amount2);

// // export const getValues = state => {
// //     console.log('getvalues',state)
// //     return selector(state, "values");
// // }

// export const checkState = state => {
//     debugger
//     return selector("items")
// }
// 

// export const totalAmount1 = createSelector(
//     getAllItems,
//     items =>

//         items.reduce(
//             (sum, item) => sum + Number(item.amount1), 0)
// )






// export const sumAmounts = state => {
//     const test = sum(getAmount1(state), getAmount2(state))
//     console.log('sumAmounts = ', test)
//     return test;
// };
