$(function(){

  var _body = $('body, html');
  var _window = $(window);

  var ww = _window.width();
  var wh = _window.height();
  var wwNew = ww;
  var wwMedium = 700; //此值以下是手機
  var wwWide = 1000;  //此值以上是電腦
  var wwMaximum = 1300;
  var wwSlim = 500;

  var _menu = $('.menu');
  _menu.find('li').has('ul').addClass('hasChild');
  var  _hasChildMenu = _menu.find('.hasChild');
  _hasChildMenu.each(function(){
    let _this = $(this);
    let _subMenu = _this.children('ul');
    _this.hover(
      function(){
        _subMenu.stop(true, false).slideDown(250);
      },
      function(){
        _subMenu.stop(true, false).slideUp(150);
      }
    )
  })


  var _allCourts = $('.allCourts');
  var _courtsList = $('.courtsList');
  var _closeCourtsList = _courtsList.find('.closeThis');
  _allCourts.click(function(){
    _courtsList.stop(true, false).slideDown(400);
  })
  _closeCourtsList.click(function(){
    _courtsList.stop(true, false).slideUp(250);
  })


})