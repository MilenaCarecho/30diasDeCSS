import data from '../data/index.js';

const generateLogoAnchor = (atributes) => {
  const a = document.createElement('a');
  a.setAttribute('href', atributes.href);

  const img = document.createElement('img');
  img.setAttribute('src', atributes.src);
  img.setAttribute('class', 'logo');
  img.setAttribute('alt', atributes.alt || 'Logo');

  a.appendChild(img);

  return a;
};

const injectList = (log) => {
  const li = document.createElement('li');
  const a = generateLogoAnchor(log);
  li.appendChild(a);

  document.querySelector('.logo-list').appendChild(li);
};

data.forEach(injectList);
