import { formatCurrency } from "./formatCurrency";

const formatAmount = (value: string) => {
  if (value === "N/A") {
    return value;
  }
  const fixed = Math.floor(Number(value)).toFixed(0);
  if (fixed.length <= 4) {
    return formatCurrency(fixed);
  }
  if (fixed.length <= 6) {
    return "$" + fixed.substr(0, fixed.length - 3);
  } else {
    const dec = fixed.substr(fixed.length - 6, 2);
    const strNumb = fixed.substr(0, fixed.length - 6);
    if (fixed.length == 7) {
      // 1.000.000
      return `$${strNumb},${dec}`;
    }
    if (fixed.length == 8) {
      // 10.000.000
      return `$${strNumb},${dec.substring(0, 1)}`;
    }
    if (fixed.length >= 9) {
      // 100.000.000 & 1.000.000.000
      return `$${strNumb}`;
    }
  }
};

export { formatAmount };
