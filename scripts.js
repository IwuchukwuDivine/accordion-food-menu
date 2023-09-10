let headerBtn = document.querySelectorAll('.accordion-header');
const viewBtn = document.querySelector('.view');
const accordionBody = document.querySelector('.accordion');
const menuView = document.querySelector('.menu');


headerBtn.forEach(accordionHeader => {
  accordionHeader.addEventListener("click", () => {
    accordionHeader.classList.toggle("active");
    const  accordionBody = accordionHeader.nextElementSibling;
    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  })
});

viewBtn.addEventListener('click', () => {
  accordionBody.style.display = "initial";
  menuView.style.display = "none";
})