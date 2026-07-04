export const formatPrice = (price: number): string => {
  if (price === 0) return '$00.000'; // Mantiene tu diseño de marcador por ahora

  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price);
};
