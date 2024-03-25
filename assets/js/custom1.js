const slideIndex = Array.from({ length: 100}, () => 1);
const slideId = Array.from({ length: 100 }, (_, i) => `mySlides${i + 1}`);

for (let i = 0; i < slideId.length; i++) {
  showSlides(1, i);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  const x = document.getElementsByClassName(slideId[no]);
  if (n > x.length || n < 1) {
    slideIndex[no] = (n > x.length) ? 1 : x.length;
  }
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}