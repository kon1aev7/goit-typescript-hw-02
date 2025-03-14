const scrollOnLoad = (): void => {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 0);
};

export default scrollOnLoad;