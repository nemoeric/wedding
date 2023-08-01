export const formatEuro = (value:number|string) => {
  value = typeof value === 'string' ? parseFloat(value) : value;
  return new Intl.NumberFormat('fr-FR', { 
    style: 'currency', 
    currency: 'EUR' 
  }).format(value);
}

export const formatPercentage = (value:number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'percent', minimumFractionDigits: 2 }).format(value);
}

export const formatDate = (dateString: string|number): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('default', { 
    year: '2-digit', 
    month: 'long', 
    // day: 'numeric' 
  }).format(date);
}
