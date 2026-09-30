/* ==========================================================
   COMPACT PROFILE HEADER ON SCROLL
========================================================== */

const profileHeader = document.querySelector(".profile-header");

const compactBreakpoint = 110;


function updateProfileHeader() {

  /*
   * Keep the full profile header at the top of the page.
   * After scrolling down, convert it into a compact profile bar.
   *
   * Only do this on desktop/tablet widths.
   */

  if (window.innerWidth > 800 && window.scrollY > compactBreakpoint) {

    profileHeader.classList.add("compact");

  } else {

    profileHeader.classList.remove("compact");

  }

}


window.addEventListener(
  "scroll",
  updateProfileHeader,
  { passive: true }
);


window.addEventListener(
  "resize",
  updateProfileHeader
);


updateProfileHeader();
