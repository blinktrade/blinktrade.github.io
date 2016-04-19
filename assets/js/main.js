(function ($) {
  "use strict";

  function onScrollAnimations() {
    $('.wp-1').waypoint(function() {

      var delay = 0;
      $.each($('.wp-sequence-1'), function(index, btn){
        setTimeout(function(){
          $(btn).addClass('animated fadeInUp');
        }, delay);
        delay += 750;
      });

    }, {
      offset: '75%'
    });
    $('.wp-2').waypoint(function() {
      var delay = 0;
      $.each($('.wp-sequence-2'), function(index, btn){
        setTimeout(function(){
          $(btn).addClass('animated fadeInUp');
        }, delay);
        delay += 300;
      });
    }, {
      offset: '75%'
    });
    $('.wp-3').waypoint(function() {
      $('.wp-3').addClass('animated fadeInUp');
    }, {
      offset: '75%'
    });
    $('.wp-4').waypoint(function() {
      $('.wp-4').addClass('animated fadeIn');
    }, {
      offset: '75%'
    });
    $('.wp-5').waypoint(function() {
      $('.wp-5').addClass('animated fadeInRight');
    }, {
      offset: '50%'
    });
    $('.wp-6').waypoint(function() {
      $('.wp-6').addClass('animated fadeInLeft');
    }, {
      offset: '100%'
    });
    $('.wp-7').waypoint(function() {
      $('.wp-7').addClass('animated fadeInUp');
    }, {
      offset: '60%'
    });
    $('.wp-8').waypoint(function() {
      $('.wp-8').addClass('animated fadeInUp');
    }, {
      offset: '60%'
    });
  }

  function navMobileCollapse() {
    // avoid having both mobile navs opened at the same time
    $('#collapsingMobileUser').on('show.bs.collapse', function () {
      $('#collapsingNavbar').removeClass('in');
      $('[data-target="#collapsingNavbar"]').attr('aria-expanded', 'false');
    });
    $('#collapsingNavbar').on('show.bs.collapse', function () {
      $('#collapsingMobileUser').removeClass('in');
      $('[data-target="#collapsingMobileUser"]').attr('aria-expanded', 'false');
    });
    // dark navbar
    $('#collapsingMobileUserInverse').on('show.bs.collapse', function () {
      $('#collapsingNavbarInverse').removeClass('in');
      $('[data-target="#collapsingNavbarInverse"]').attr('aria-expanded', 'false');
    });
    $('#collapsingNavbarInverse').on('show.bs.collapse', function () {
      $('#collapsingMobileUserInverse').removeClass('in');
      $('[data-target="#collapsingMobileUserInverse"]').attr('aria-expanded', 'false');
    });
  }

  function scrollToTop() {
    $('.scroll-top').on('click', function(e) {
      e.preventDefault();
      $.scrollTo('html, body', 1000, {
        easing:'easeInOutExpo',
        offset:0,
        'axis':'y'
      });
    });
    $('.btn-getstarted').on('click', function(e) {
      e.preventDefault();
      $.scrollTo('#getstarted', 1000, {
        easing:'easeInOutExpo',
        offset:0,
        'axis':'y'
      });
    });
    $('.btn-team').on('click', function(e) {
      e.preventDefault();
      $.scrollTo('#team', 1000, {
        easing:'easeInOutExpo',
        offset:0,
        'axis':'y'
      });
    });
  }

  function carousel() {
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
        margin: 50,
        nav: true,
        dots: false,
        autoWidth: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
      });
    })
  }

  function headerFixed(){
    $(window).scroll(function() {
      if ($(this).scrollTop() > 15) {
        $('.navbar').css("position", "fixed");
        $('.navbar').addClass("bg-white");
        $('.navbar').removeClass("bg-inverse-custom");
        $('.navbar .logo').attr('src', 'assets/img/logo-p.png');
        $('.navbar-divider').css('background-color', 'rgba(66, 71, 83, 0.24)');
      } else {
        $('.navbar').position("position", "absolute");
        $('.navbar').addClass("bg-inverse-custom");
        $('.navbar').removeClass("bg-white");
        $('.navbar .logo').attr('src', 'assets/img/logo-p-white.png');
        $('.navbar-divider').css('background-color', 'rgba(255,255,255,0.2)');
      }
    })
  }

  function init() {
    headerFixed();
    onScrollAnimations();
    navMobileCollapse();
    scrollToTop();
    // carousel();
  }

  init();

})(jQuery);

