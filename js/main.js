$(function () {

  var mixer = mixitup('.directions_list');

  $('.directions_filter-button').on('click', function (){
    $('.directions_filter-button').removeClass('directions_filter-button--active');
    $(this).addClass('directions_filter-button--active')
  })

  $('.team_slider').slick({
    arrows: false,
    slidesToShow:4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
  })

  $('.team_slider-prev').on('click', function(action){
    action.preventDefault()
    $('.team_slider').slick('slickPrev')
  })

  $('.team_slider-next').on('click', function(action){
    action.preventDefault()
    $('.team_slider').slick('slickNext')
  })

  $('.testimonials_slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials_dots'),
    waitForAnimate: false,
  })

  $('.testimonials_prev').on('click', function(action){
    action.preventDefault()
    $('.testimonials_slider').slick('slickPrev')
  })

  $('.testimonials_next').on('click', function(action){
    action.preventDefault()
    $('.testimonials_slider').slick('slickNext')
  })
  
  

  // ### realize a list with drop-down items ###

  // $('.program_accordeon-link').on('click', function(action){
  //   action.preventDefault(),
  //   $(this).toggleClass('program_accordeon-link--active'),
  //   $(this).children('.program_accordeon-text').slideToggle()
  // })

  $('.program_accordeon-link').on('click', function(action){
    action.preventDefault()
    if ($(this).hasClass('program_accordeon-link--active')){
      $(this).removeClass('program_accordeon-link--active')
      $(this).children('.program_accordeon-text').slideUp()
    }else{
      $('.program_accordeon-link').removeClass('program_accordeon-link--active')
      $('.program_accordeon-text').slideUp()
      $(this).addClass('program_accordeon-link--active')
      $(this).children('.program_accordeon-text').slideDown()
    }
  })

})