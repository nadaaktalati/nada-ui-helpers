function formatPrice(amount, currency = "TRY") {
  return ${Number(amount).toFixed(2)} ;
}

module.exports = { formatPrice };
