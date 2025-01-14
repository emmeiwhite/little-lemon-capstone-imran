export const scrollWithOffset = function (element) {
  const coordinateY = element.getBoundingClientRect().top + window.scrollY;
  const offsetY = -50;
  window.scrollTo({ top: coordinateY + offsetY, behavior: 'smooth' });
};
