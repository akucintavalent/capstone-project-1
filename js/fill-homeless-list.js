import homeless from './homeless-info.js';

const homelessList = document.querySelector('.participants-section ul');
const homeless1 = homelessList.querySelector('li');
const moreButton = document.querySelector('.participants-section button');

function showHomeless(homeless) {
  const homelessEl = homeless1.cloneNode(true);
  const img = homelessEl.querySelector('img');
  const h3 = homelessEl.querySelector('h3');
  const profession = homelessEl.querySelector('p.profession');
  const description = homelessEl.querySelector('p.description');

  img.setAttribute('src', homeless.image.path);
  img.setAttribute('alt', homeless.image.alt);
  h3.innerText = homeless.name;
  profession.innerText = homeless.profession;
  description.innerText = homeless.description;

  homelessList.appendChild(homelessEl);

  return homelessEl;
}

function drawMobile() {
  homelessList.innerHTML = '';
  for (let i = 0; i < homeless.length; i += 1) {
    const homelessEl = showHomeless(homeless[i]);
    homeless[i].homelessEl = homelessEl;
    if (i > 1) {
      homelessEl.style.display = 'none';
    }
  }
  homeless1.remove();
  moreButton.style.display = 'initial';
}

function showRestOfHomeless() {
  for (let i = 2; i < homeless.length; i += 1) {
    homeless[i].homelessEl.style.display = 'grid';
  }
  moreButton.style.display = 'none';
}

moreButton.addEventListener('click', showRestOfHomeless);

drawMobile();
if (window.innerWidth > 768) {
  showRestOfHomeless();
}

window.onresize = () => {
  if (window.innerWidth < 768) {
    drawMobile();
  } else {
    showRestOfHomeless();
  }
};