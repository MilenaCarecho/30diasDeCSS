const generateSpan = (quantity) => Array.from({ length: quantity }, () => {
  const span = document.createElement('span');
  span.setAttribute('class', 'logoLayer');
  return span;
});

const injectLayers = (element, layers = 4) => {
  generateSpan(layers).forEach((span) => {
    element.parentNode.appendChild(span);
  });
};

const removeLayers = () => {
  document.querySelectorAll('span')
    .forEach((element) => {
      element.remove();
    });
};

document.querySelectorAll('img')
  .forEach((element) => {
    element.addEventListener('animationstart', ({ target }) => injectLayers(target, 4));
    element.addEventListener('animationend', removeLayers);
    element.addEventListener('animationcancel', removeLayers);
  });
