'use strict'
// 1行目に記載している 'use strict' は削除しないでください

/**
 * 🦄 Project DOM Unicorn 🦄
 * 
 * 全3回に分けて、基礎コースで使ったindex.htmlをDOMでいろいろ改造し、
 * DOM をおさらいしながらユニコーン図鑑を作ってみましょう。
 * 
 * Day3
 *   作ったものを発表しましょう。
 * 
 */

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
  // {
  //   name: 'CyberTiger',
  //   img: 'imgs/06_cybertiger.jpg',
  //   desc: 'Happy Hacking.'
  // },
];

// https://drive.google.com/file/d/1NZE_5tqRbILsJScIpe5TqSv5jQfhZ-Y9/view?usp=sharing

















function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
    return true;
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
    return false;
  }
}

test(test({ a: 'a', b: 2 }, { a: 'a', b: 2 }), true);
console.log(`--! NEXT ONE FAIL IS EXPECTED !--`);
test(test({ a: 'a', b: 2 }, { a: 'a', b: 2, c: true }), false);

function testHTMLs(actual, expected) {
  const testProperties = ['innerHTML', 'style', 'src'];
  const results = testProperties.filter(key => (JSON.stringify(actual[key]) !== JSON.stringify(expected[key])));
  if (!results.length) {
    console.log("Yay! Test PASSED.");
    return true;
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group();
    results.forEach(key => {
      console.log('actual   :', key ,':', actual[key]);
      console.log('expected :', key ,':', expected[key]);
    });
    console.groupEnd();
    console.trace();
    return false;
  }
}

/**
 * create HTML element by tag and innerHTML
 * @param {string} tag -tag
 * @param {string} html -innerHTML
 * @returns {HTMLElement}
 */
const createElm = (tag, html = '') => {
  const elm = document.createElement(tag);
  elm.innerHTML = html;
  tag === 'img' ? elm.src = src : undefined;
  return elm;
}

const expH1Elm = document.createElement('h1');
expH1Elm.innerHTML = 'ab<font color="blue">cd</font>ef';

const expEmptyPElm = document.createElement('p');

testHTMLs(createElm('p'), expEmptyPElm);
testHTMLs(createElm('h1', 'ab<font color="blue">cd</font>ef'), expH1Elm);

const createImgElm = (src, width = '', height = '') => {
  const elm = document.createElement('img');
  elm.src = src;
  elm.style.width = width;
  elm.style.height = height;
  return elm;
}

const testImgElmA = document.createElement('img');
testImgElmA.src = 'https://cdn.dribbble.com/users/1281272/screenshots/4515441/unicorn.gif';

const testImgElmB = document.createElement('img');
testImgElmB.src = 'https://cdn.dribbble.com/users/1281272/screenshots/4515441/unicorn.gif';
testImgElmB.style.width = '40px';
testImgElmB.style.height = '30px';

testHTMLs(createImgElm('https://cdn.dribbble.com/users/1281272/screenshots/4515441/unicorn.gif'), testImgElmA);
testHTMLs(createImgElm('https://cdn.dribbble.com/users/1281272/screenshots/4515441/unicorn.gif', '40px', '30px'), testImgElmB);

const htmls = [
  { tag: 'h1', html: '🦄 My Friendly Unicorns 🦄' },
  { tag: 'h2', html: 'Click unicorns to know about them.' },
];

const unicornDesc = createElm('div');
unicornDesc.img = createImgElm('', '400px', '400px');
unicornDesc.name = createElm('h2');
unicornDesc.desc = createElm('p');
Object.keys(unicornDesc).forEach(
  key => unicornDesc.appendChild(unicornDesc[key]));
unicornDesc.style.visibility = 'hidden';

const showUnicorn = event => {
  const name = event.srcElement.id;
  const unicorn = unicorns.filter(e => e.name === name)[0];
  unicornDesc.img.src = unicorn.img;
  unicornDesc.name.innerText = unicorn.name;
  unicornDesc.desc.innerText = unicorn.desc;
  unicornDesc.style.visibility = 'visible';
}

window.onload = () => {
  document.title = 'My Friendly Unicorns';

  document.body.style.textAlign = 'center';
  const header = document.createElement('header');
  header.style.display = 'flex';

  header.appendChild(createImgElm('https://cdn.dribbble.com/users/1281272/screenshots/4515441/unicorn.gif', '200px'));

  header.appendChild((() => {
    const div = createElm('div');
    htmls.forEach(obj => div.appendChild((() => {
      const elm = createElm(obj.tag, obj.html);
      elm.style.flexGrow = 1;
      return elm;
    })()));
    div.style.flexGrow = 1;
    return div;
  })());

  header.appendChild(createImgElm('https://cdn.dribbble.com/users/1281272/screenshots/4515441/unicorn.gif', '200px'));

  document.body.appendChild(header);
  document.body.appendChild(document.createElement('hr'));

  document.body.appendChild((() => {
    const div = createElm('div');
    unicorns.forEach(obj => div.appendChild((() => {
      const img = createImgElm(obj.img, '100px', '100px');
      img.id = obj.name;
      img.addEventListener('click', showUnicorn);
      return img;
    })()));
    return div;
  })());

  document.body.appendChild(createElm('br'));
  document.body.appendChild(unicornDesc);

};