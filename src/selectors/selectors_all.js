// import { sum } from "../calculations";
// import { formValueSelector } from "redux-form";
import { createSelector } from "reselect";

// const selector = formValueSelector("fieldArraysForm");

export const getItems = state => {
  const form = state.form.fieldArraysForm;
  if (form && form.values && form.values.items) {
    console.log("selector getItems =", form.values.items);
    return form.values.items;
  }
  return undefined;
};

export const getTotalAmount1 = createSelector(
  getItems,
  (items = []) => sumItems(items)
);

// export function sumItems(items) {

//   const test = items.reduce((sum, item) => {
//     return sum + Number(item.amount1);
//   });

//   console.log("selector sumItems = ", test);
//   return test;
// }

export function sumItems(items) {
  if (!items) return;
  if (items.length < 1) return;
  return items.reduce((sum, item) => {
    return sum + Number(item.amount1);
  }, 0);
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
