export const useUtils = () => {
  const getImagePath = (name: string) => {
    
      const path = new URL(`assets/images`, import.meta.url);
      return `${path}/${name}`;    
  }

  const getShortDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('sv-SE', { month: 'short' });
    return `${day} ${month}`;
  };

  return {
    getImagePath,
    getShortDate
  }
}