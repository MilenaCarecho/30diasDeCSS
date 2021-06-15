import data from './data/logos.js';

const generateLogoAnchor = (atributes) => {
  const a = document.createElement('a');
  a.setAttribute('href', atributes.href);
  a.setAttribute('class', atributes.class.a);

  const img = document.createElement('img');
  img.setAttribute('src', atributes.src);
  img.setAttribute('class', atributes.class.img);
  img.setAttribute('alt', atributes.alt || '');

  a.appendChild(img);

  return a;
};

const injectList = (log) => {
  const li = document.createElement('li');
  const a = generateLogoAnchor({ ...log, class: { img: 'logoImage', a: 'logoA' } });
  li.appendChild(a);

  document.querySelector('.logoList').appendChild(li);
};

data.forEach(injectList);
