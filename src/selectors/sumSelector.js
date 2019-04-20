import { createSelector } from "reselect";
import { sum } from "../calculations";

const sumAmounts = state =>{
    debugger
    if (!state) return;

    if (!state.amount1 || !state.amount2)
  return  sum(state.amount1,state.amount2);
};
export default createSelector(
    sumAmounts
);
