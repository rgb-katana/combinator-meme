'use strict';

function startCombinating() {
  // Select image input
  const image_input = document.querySelector('#image-input');
  // Listen to input and entire logic.
  image_input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploaded_image = reader.result;
      document.querySelector('.starter').classList.add('hidden');
      document.querySelector('.caption').classList.remove('hidden');
      document.querySelector('#display-image').classList.remove('hidden');
      document.querySelector(
        '#display-image'
      ).style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
  });

  // Selecting phase.
  const handler = document.querySelector('.caption--handler');
  const entireCaption = document.querySelector('.caption');
  const combinator = document.querySelector('.combinator');
  let top = 80;
  let left = 50;

  // functions
  function out(element) {
    element.addEventListener('mouseout', function () {
      element.style.backgroundColor = 'black';
    });
  }

  // Handlers
  handler.addEventListener('mouseover', function (e) {
    const elem = e.target;
    if (elem.classList.contains('move--up-1')) {
      elem.style.backgroundColor = 'green';
      out(elem);
    }

    if (elem.classList.contains('move--down-1')) {
      elem.style.backgroundColor = 'green';
      out(elem);
    }

    if (elem.classList.contains('move--up-10')) {
      elem.style.backgroundColor = 'green';
      out(elem);
    }

    if (elem.classList.contains('move--down-10')) {
      elem.style.backgroundColor = 'green';
      out(elem);
    }

    if (elem.classList.contains('font--bold')) {
      elem.style.backgroundColor = 'green';
      out(elem);
    }

    if (elem.classList.contains('font--italic')) {
      elem.style.backgroundColor = 'green';
      out(elem);
    }

    if (elem.classList.contains('move--left-1')) {
      elem.style.backgroundColor = 'green';
      out(elem);
    }

    if (elem.classList.contains('move--right-1')) {
      elem.style.backgroundColor = 'green';
      out(elem);
    }

    if (elem.classList.contains('finish')) {
      elem.style.backgroundColor = 'green';
      out(elem);
    }
  });

  handler.addEventListener('click', function (e) {
    const elem = e.target;
    console.log(elem);
    if (elem.classList.contains('move--up-1')) {
      if (parseInt(entireCaption.style.top) <= 10) return;
      top--;
      entireCaption.style.top = `${top}%`;
    }

    if (elem.classList.contains('move--down-1')) {
      if (parseInt(entireCaption.style.top) >= 85) return;
      top++;
      entireCaption.style.top = `${top}%`;
    }

    if (elem.classList.contains('move--up-10')) {
      console.log(parseInt(entireCaption.style.top));
      if (parseInt(entireCaption.style.top) < 20) return;
      top -= 10;
      entireCaption.style.top = `${top}%`;
    }

    if (elem.classList.contains('move--down-10')) {
      console.log(parseInt(entireCaption.style.top));
      if (parseInt(entireCaption.style.top) > 75) return;
      top += 10;
      entireCaption.style.top = `${top}%`;
    }

    if (elem.classList.contains('font--bold')) {
      combinator.classList.toggle('boold');
    }

    if (elem.classList.contains('font--italic')) {
      combinator.classList.toggle('itaalic');
    }

    if (elem.classList.contains('move--left-1')) {
      if (left === 41) return;
      left--;
      entireCaption.style.left = `${left}%`;
    }

    if (elem.classList.contains('move--right-1')) {
      console.log(left);
      if (left === 59) return;
      left++;
      entireCaption.style.left = `${left}%`;
    }

    if (elem.classList.contains('finish')) {
      document.querySelector('.caption--handler').style.opacity = '0';
      entireCaption.style.background =
        'linear-gradient(180deg, rgba(2,0,36,0) 40%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)';
    }
  });
}

startCombinating();
