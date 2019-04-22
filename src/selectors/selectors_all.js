import { createSelector } from "reselect";
import { totalAmount1, totalAmount2 } from "../calculations/calculationHelper";
import { formValueSelector } from "redux-form";

export const getItems = state => {
  const selector = formValueSelector("fieldArraysForm");
  return selector(state, "items");
};

export const getTotalAmount1 = createSelector(
  getItems,
  (items = []) => totalAmount1(items)
);

export const getTotalAmount2 = createSelector(
  getItems,
  (items = []) => totalAmount2(items)
);
