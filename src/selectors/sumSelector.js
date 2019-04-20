import { createSelector } from "reselect";
import { sum } from "../calculations";

const sumAmounts = state =>{
  return  sum(state.amount1,state.amount2);
};
export default createSelector(
    sumAmounts
);
