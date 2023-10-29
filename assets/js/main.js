const collapsableNavbar = (function () {
  const toggleIcon = document.querySelector(".toggle-icon");
  const navListEl = document.querySelector(".navbar-mobile");
  toggleIcon.addEventListener("click", (e) => {
    const isOpen = navListEl.style.display === "block" ? true : false;
    if (isOpen) {
      navListEl.style.display = "none";
    } else {
      navListEl.style.display = "block";
    }
  });
})();

const setDateTimeDefault = (function () {
  const dateTimeInputEl = document.querySelector(`input[type=datetime-local]`);

  const date = new Date();
  const month = date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const currentDate = `${year}-${+month + 1}-${day}T${hours}:${minutes}`;

  dateTimeInputEl.value = currentDate;
})();
