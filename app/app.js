$(function () {
  /* Slider */

  $('[data-slider]').slick({
    Infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  })

  $('[data-slider_2]').slick({
    Infinity: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  })

  /* Mobile nav*/

  const navToggle = $('#navToggle')
  const nav = $('#nav')

  $(navToggle).on('click', function (event) {
    event.preventDefault()

    nav.toggleClass('show')
  })
})
