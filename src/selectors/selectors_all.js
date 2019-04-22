import { createSelector } from "reselect";
import {totalAmount1, totalAmount2} from '../calculations/calculationHelper'

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
  (items = []) => totalAmount1(items)
);

export const getTotalAmount2 = createSelector(
  getItems,
  (items = []) => totalAmount2(items)
);