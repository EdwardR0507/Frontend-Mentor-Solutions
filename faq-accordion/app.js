const accordionSummary = document.querySelectorAll(
  `.faqs__accordion__item__summary`
);

accordionSummary.forEach((summary) => {
  summary.addEventListener("click", () => {
    accordionSummary.forEach(() => {
      const details = summary.parentNode;
      const isOpen = details.hasAttribute("open");

      if (isOpen) {
        details.removeAttribute("open");
      } else {
        details.setAttribute("open", "open");
      }
    });
  });
});
