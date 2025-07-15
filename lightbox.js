const thumbs = Array.from(document.querySelectorAll('.gallery-img'));
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const btnPrev= document.getElementById('lb-prev');
const btnNext= document.getElementById('lb-next');
const btnClose= document.getElementById('lb-close');
let current = 0;


thumbs.forEach((img, idx) => {
  img.addEventListener('click', () => show(idx));
});

function show(i) {
  current  = i;
  lbImg.src  = thumbs[current].src;
  lbImg.alt = thumbs[current].alt;
  lightbox.classList.remove('hide');
}

function navigate(dir) {
  current = (current + dir + thumbs.length) % thumbs.length;
  lbImg.src = thumbs[current].src;
  lbImg.alt = thumbs[current].alt;
}

btnPrev.onclick = () => navigate(-1);
btnNext.onclick = () => navigate(+1);
btnClose.onclick= () => lightbox.classList.add('hide');

document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('hide')) return;
  if (e.key === 'Escape') lightbox.classList.add('hide');
  if (e.key === 'ArrowLeft')  navigate(-1);
  if (e.key === 'ArrowRight') navigate(+1);
});
