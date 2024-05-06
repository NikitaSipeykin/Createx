$(function () {

  var mixer = mixitup('.directions_list');

  $('.directions_filter-button').on('click', function () {
    $('.directions_filter-button').removeClass('directions_filter-button--active');
    $(this).addClass('directions_filter-button--active')
  })

  $('.team_slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    responsive:[{
      breakpoint: 1100,
      settings: {slidesToShow: 3,},
    },
    {
      breakpoint: 750,
      settings: {slidesToShow: 2,},
    },
    {
      
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        draggable: true,
      },
    },],
  })

  $('.team_slider-prev').on('click', function (action) {
    action.preventDefault()
    $('.team_slider').slick('slickPrev')
  })

  $('.team_slider-next').on('click', function (action) {
    action.preventDefault()
    $('.team_slider').slick('slickNext')
  })

  $('.testimonials_slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials_dots'),
    waitForAnimate: false,
    responsive:[{
      breakpoint: 700,
      settings: {},
    
    },],
  })

  $('.testimonials_prev').on('click', function (action) {
    action.preventDefault()
    $('.testimonials_slider').slick('slickPrev')
  })

  $('.testimonials_next').on('click', function (action) {
    action.preventDefault()
    $('.testimonials_slider').slick('slickNext')
  })



  // ### realize a list with drop-down items ###

  // $('.program_accordeon-link').on('click', function(action){
  //   action.preventDefault(),
  //   $(this).toggleClass('program_accordeon-link--active'),
  //   $(this).children('.program_accordeon-text').slideToggle()
  // })

  $('.program_accordeon-link').on('click', function (action) {
    action.preventDefault()
    if ($(this).hasClass('program_accordeon-link--active')) {
      $(this).removeClass('program_accordeon-link--active')
      $(this).children('.program_accordeon-text').slideUp()
    } else {
      $('.program_accordeon-link').removeClass('program_accordeon-link--active')
      $('.program_accordeon-text').slideUp()
      $(this).addClass('program_accordeon-link--active')
      $(this).children('.program_accordeon-text').slideDown()
    }
  })


  let map;

  // async function initMap() {
  //   // The location of Uluru
  //   const position = { lat: -25.344, lng: 131.031 };
  //   // Request needed libraries.
  //   //@ts-ignore
  //   const { Map } = await google.maps.importLibrary("maps");
  //   const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  //   // The map, centered at Uluru
  //   map = new Map(document.getElementById("map"), {
  //     zoom: 8,
  //     center: {lat: -34.397, lng: 150.644},
  //     mapId: "DEMO_MAP_ID",
  //   });

  //   // The marker, positioned at Uluru
  //   const marker = new AdvancedMarkerView({
  //     map: map,
  //     position: position,
  //     title: "Uluru",
  //   });
  // }

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  $(".header_nav-list a, .header_top-btn, .footer_go-top").on("click", function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header_top').hasClass('header_top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)
  $('.burger, .overlay, .header_top a').on('click', function (e) {
    e.preventDefault()
    $('.header_top').toggleClass('header_top--open')
    $('.overlay').toggleClass('overlay--show')
  })


})