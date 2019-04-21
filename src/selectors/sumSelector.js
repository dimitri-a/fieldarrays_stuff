import { sum } from "../calculations";
import { formValueSelector } from "redux-form";
import { createSelector } from "reselect";
const selector = formValueSelector("myForm");

export const getAmount1 = state => selector(state, "amount1");
export const getAmount2 = state =>selector(state,"amount2")
export const getAllItems= state =>selector(state,"items")

export const sumAmounts = state => {
    const test = sum(getAmount1(state),getAmount2(state))
    return test;
};


// export const totalAmount1 = createSelector(
//     getAllItems,
//     items=>
//     items.reduce(
//     (sum,item) => sum +Number(item.amount1),0)
// )


// creates =>{
//     getAllItems,
//     getAmount1.reduce(row => row.amount1)
    
//     }

// export const getMaxDistributionSum = createSelector(
//     getShareholderDistribution,
//     shareholderdistribution =>
//       shareholderdistribution &&
//       shareholderdistribution
//         .filter(s => s.name && s.name === true)
//         .reduce(
//           (sum, item) => sum + Number(item.ownership && item.ownership !== 0 ? item.ownership : 0),
//           0
//         )
//   );
  


// export const getAllShareHolders = state =>
//   state.mockData &&
//   state.mockData.BusinessFinancials &&
//   state.mockData.BusinessFinancials.shareHolder &&
//   state.mockData.BusinessFinancials.shareHolder.all
//     ? state.mockData.BusinessFinancials.shareHolder.all
//     : undefined;
