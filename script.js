function scrollToServices() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
}


function showMessage() {
  alert(
    "AG-R.GROUP\n\nБізбен байланысқаныңызға рақмет!\n\nТелефон: +7 776 110 63 48"
  );
}


function openProject(project) {
  alert(
    project +
    "\n\nЖоба туралы толық ақпарат жақында қосылады."
  );
}


function toggleMenu() {
  const nav = document.querySelector("nav");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.right = "20px";
    nav.style.padding = "20px";
    nav.style.background = "#111";
    nav.style.border = "1px solid #d4af37";
    nav.style.borderRadius = "15px";
  }
}


/* Карточкаларға scroll анимациясы */

const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }

    });
  },
  {
    threshold: 0.15
  }
);


cards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

  observer.observe(card);

});
