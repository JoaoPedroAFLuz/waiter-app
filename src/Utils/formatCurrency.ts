export function formatCurrency(value: number) {
  const formated = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formated;
}
