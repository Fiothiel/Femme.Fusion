export const useUtils = () => {
  const getImagePath = (name: string) => {
    
      const path = new URL(`assets/images`, import.meta.url);
      return `${path}/${name}`;    
  }

  return {
    getImagePath
  }
}