$('#navbar-button').on('click', toggleNavbar)

function toggleNavbar() {
  const navLinks = $(this).closest('section').children('.nav-links-mobile');

  if (navLinks.hasClass('show')) {
    $(this).closest('section').children('.nav-links-mobile').removeClass('show')
  } else {
    $(this).closest('section').children('.nav-links-mobile').addClass('show')
  }
}