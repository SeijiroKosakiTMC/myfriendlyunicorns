'use strict'

const unicorns = [
  {
    name: 'GoldenChocolate',
    img: 'imgs/01_goldenchocolate.jpg',
    desc: 'Gentle and kind.'
  },
  {
    name: 'StareingCourage',
    img: 'imgs/02_stareingcourage.jpg',
    desc: 'Young unicorn, brother of NobleBreeze.'
  },
  {
    name: 'ObsidianConfidence',
    img: 'imgs/03_obsidianconfidence.jpg',
    desc: 'Black knight of Abirian kingdom.'
  },
  {
    name: 'NobleBreeze',
    img: 'imgs/04_noblebreeze.jpg',
    desc: 'Princess of Abirian kingdom.'
  },
  {
    name: 'DreamBox',
    img: 'imgs/05_dreambox.jpg',
    desc: 'She is full of dreams.'
  }
];

const nameElement = document.createElement('h3');
const imgElement = document.createElement('img');
imgElement.style.width = '400px';
const descElement = document.createElement('p');

const showUnicorn = event => {
  const name = event.target.innerText;
  const unicorn = unicorns.filter(unicorn => unicorn.name === name)[0];
  nameElement.innerText = unicorn.name;
  imgElement.src = unicorn.img;
  descElement.innerText = unicorn.desc;
}

const unicornListElmemnts = [];

unicorns.forEach(unicorn => {
  const elm = document.createElement('p');
  elm.innerText = unicorn.name;
  elm.addEventListener('click', showUnicorn);
  unicornListElmemnts.push(elm);
});

window.onload = () => {
  unicornListElmemnts.forEach(unicornElm => {
    document.body.appendChild(unicornElm);
  });

  document.body.appendChild(imgElement);
  document.body.appendChild(nameElement);
  document.body.appendChild(descElement);
}