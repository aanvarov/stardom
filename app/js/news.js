$(function () {


  $(window).on('load', function () {

    setTimeout(function () {
      $('#preloader').fadeOut('slow', function () { });
    }, 2000);
  });

  $('.navbar-toggler').click(function () {
    $('.header__bottom__inner').toggle(300);
  });


  var items = $(".news__items .news__item");
  var numItems = items.length;
  var perPage = 12;

  if ($(window).width() < 1025) {
    perPage = 9;
  };
  if ($(window).width() < 769) {
    perPage = 8;
  };
  if ($(window).width() < 426) {
    perPage = 6;
  };



  items.slice(perPage).hide();

  $('#page-pagination').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: false,
    nextText: false,
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
    }
  });

});