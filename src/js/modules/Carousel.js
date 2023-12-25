function Carousel() {
  $('.hero-wrap__carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '-18px',
    autoplay: false,
    centerMode: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    swipe: false
  });

  $('.hero-wrap__events').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '35px',
    autoplay: false,
    centerMode: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    dots: false,
    arrows: false
  });
}

module.exports = Carousel