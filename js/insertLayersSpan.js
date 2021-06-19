const generateSpan = (quantity) => Array.from({ length: quantity }, () => {
  const img = document.createElement('img');
  return img;
});

const injectLayers = (element, layers = 4) => {
  generateSpan(layers).forEach((img, index) => {
    img.setAttribute('class', `layer layer-${index}`);
    img.setAttribute('data-index', index);
    img.setAttribute('src', element.src);
    const container = element.parentNode;
    container.appendChild(img);
  });
};

const removeLayers = () => {
  document.querySelectorAll('.layer')
    .forEach((element) => {
      element.remove();
    });
};

document.querySelectorAll('img')
  .forEach((element) => {
    element.addEventListener('animationstart', ({ target }) => injectLayers(target, 5));
    element.addEventListener('animationend', removeLayers);
    element.addEventListener('animationcancel', removeLayers);
  });
