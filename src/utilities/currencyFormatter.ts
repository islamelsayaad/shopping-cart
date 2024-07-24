const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function currencyFormatter(price: number) {
  return CURRENCY_FORMATTER.format(price);
}

export default currencyFormatter;
