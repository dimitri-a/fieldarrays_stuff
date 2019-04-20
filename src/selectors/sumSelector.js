import { sum } from "../calculations";
import { formValueSelector } from "redux-form";
const selector = formValueSelector("myForm");

const sumAmounts = state =>{

    const amount1 = selector(state, "amount1");
    const amount2 = selector(state, "amount2");
    return sum(amount1,amount2)
};

export default sumAmounts;