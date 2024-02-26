'use strict'

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

/**
 * 
 * @param {string} tag 
 * @param {string} html 
 * @param {string} src 
 * @returns {HTMLElement}
 */
const createElm = (tag, html = '', src = '') => {
  const elm = document.createElement(tag);
  elm.innerHTML = html;
  tag === 'img' ? elm.src = src : undefined;
  return elm;
}

const expH1Elm = document.createElement('h1');
expH1Elm.innerHTML = 'ab<font color="blue">cd</font>ef';

const expImgElm = document.createElement('img');
expImgElm.src = 'https://cdn.dribbble.com/users/1281272/screenshots/4515441/unicorn.gif';

test(createElm('h1', 'ab<font color="blue">cd</font>ef'), expH1Elm);
test(createElm('img', '', 'https://cdn.dribbble.com/users/1281272/screenshots/4515441/unicorn.gif'), expImgElm);

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
  },
];

window.onload = () => {

  unicorns.forEach(unicorn => {
    const elm = createElm('div');
    elm.className = 'unicorns';
    elm.appendChild((() => {
      const imgElm = createElm('img', '', unicorn.img);
      imgElm.width = '400';
      imgElm.height = '400';
      return imgElm;
    })());
    elm.appendChild(createElm('h2', unicorn.name));
    elm.appendChild(createElm('p', unicorn.desc));
    elm.style.marginTop = '75px';
    document.body.appendChild(elm);
  });

};