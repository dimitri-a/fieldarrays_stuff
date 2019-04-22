export function CalcTotal(val) {
  const total = val.reduce(
    (a, { currentYear, lastYear, type }) => {
      const mult = type === "+" ? 1 : -1;
      a.currentYear += mult * currentYear;
      a.lastYear += mult * lastYear;
      return a;
    },
    { currentYear: 0, lastYear: 0 }
  );
  return total;
}

export function totalAmount1(items) {
  if (!items) return;
  if (items.length < 1) return;
  return items.reduce((sum, item) => {
    return sum + Number(item.amount1);
  }, 0);
}

export function totalAmount2(items) {
  if (!items) return;
  if (items.length < 1) return;
  return items.reduce((sum, item) => {
    return sum + Number(item.amount2);
  }, 0);
}
