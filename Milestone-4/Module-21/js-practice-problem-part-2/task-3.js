function calculateElectronicsBudget(
  laptopQuantity,
  tablesQuantity,
  mobileQuantity
) {
  const perLaptop = 35000;
  const perTablet = 15000;
  const perMobile = 20000;

  const laptopPrice = perLaptop * laptopQuantity;
  const tabletsPrice = perTablet * tablesQuantity;
  const mobilePrice = perMobile * mobileQuantity;

  const totalMoneyRequired = laptopPrice + tabletsPrice + mobilePrice;
  return totalMoneyRequired;
}

const electronicsQuantity = calculateElectronicsBudget(2, 4, 3);
console.log(electronicsQuantity);
