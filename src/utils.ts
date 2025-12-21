export const useUtils = () => {
  const getShortDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("sv-SE", { month: "short" });
    return `${day} ${month}`;
  };

  const getLongDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("sv-SE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const scrollToMain = () => {
    setTimeout(() => {
      document.querySelector("main")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  };

  return {
    getShortDate,
    getLongDate,
    scrollToMain,
  };
};
