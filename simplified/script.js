'use strict';

const unicornList = document.getElementsByTagName('li');

const showUnicorn = (event) =>{
  for (const unicorn of unicorns) {
    if (unicorn.name === event.target.innerText) {
      document.getElementById('unicorn-img').src = unicorn.img;
      document.getElementById('unicorn-name').innerText = unicorn.name;
      document.getElementById('unicorn-desc').innerText = unicorn.desc;
    }
  }
};

Array(...unicornList).forEach(li => {
  console.log(li);
  li.addEventListener('click', showUnicorn);
});