import { sum } from "../calculations";
import { formValueSelector } from "redux-form";
const selector = formValueSelector("myForm");

export const getAmount1 = state => selector(state, "amount1");
export const getAmount2 = state =>selector(state,"amount2")

export const sumAmounts = state => {

    const test = sum(getAmount1(state),getAmount2(state))
    return test;
};
