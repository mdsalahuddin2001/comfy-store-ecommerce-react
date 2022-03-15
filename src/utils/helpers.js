export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, field) => {
  let items = data.map((item) => item[field]);
  if (field === 'colors') {
    items = items.flat();
  }
  return ['all', ...new Set(items)];
};
