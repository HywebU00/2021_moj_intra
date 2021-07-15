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

  // 所屬單位清單 顯示／隱藏
  var _allCourts = $('.allCourts');
  var _courtsList = $('.courtsList');
  var _closeCourtsList = _courtsList.find('.closeThis');
  _allCourts.click(function(){
    _courtsList.stop(true, false).slideDown(400);
  })
  _closeCourtsList.click(function(){
    _courtsList.stop(true, false).slideUp(250);
  })

  // 登入區 顯示／隱藏
  var _loginBtn = $('.loginBtn');
  var _loginHere = $('.loginHere');
  var _closeLogin = _loginHere.find('.closeThis');
  _loginBtn.click(function(){
    _loginHere.stop(true, false).slideDown(400).addClass('show');
  })
  _closeLogin.click(function(){
    _loginHere.stop(true, false).slideUp(250).removeClass('show');
  })

  //go top and bottom------------------------------------------
	var _goTop = $('.goTop');
  _goTop.click(function(e){
    e.preventDefault();
    _body.stop(true,false).animate({scrollTop: 0}, 600);
  });

	$(window).scroll(function() {
		if ( $(this).scrollTop() > 200){
			_goTop.addClass('show');
		} else {
      _goTop.removeClass('show');
		}
	});

  // 條列頁 active 樣式
  var _category = $('.category');
  _category.each(function(){
    let _item = $(this).find('li');
    _item.click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })
  })

  var _slideToggle = $('.slideToggle');
  _slideToggle.each(function(){
    let _this = $(this);
    let _ctrl = _this.find('.slideCtrl');
    let _drawer = _this.find('.drawer');
    let text1 = _ctrl.text();
    let text2 = _ctrl.attr('data-altTitle');

    _ctrl.click(function(){
      if (_drawer.is(':visible')) {
        _drawer.slideUp();
        $(this).addClass('openIt').text(text2);
      } else {
        _drawer.slideDown();
        $(this).removeClass('openIt').text(text1);
      }
    })
  })



  // 升降冪箭頭 GUI demo, 程式套版後可能要刪除
  var _sortingTr = $('.list').find('tr').has('.sortingTh');
  _sortingTr.each(function(){
    let _sortingTh = $(this).find('.sortingTh');
    _sortingTh.click(function() {
      _this = $(this);
      _sortingTh.not(_this).removeClass('descending').removeClass('ascending');
      if (_this.hasClass('descending')) {
        _this.removeClass('descending').addClass('ascending');
      } else if (_this.hasClass('ascending')) {
        _this.removeClass('ascending').addClass('descending');
      } else {
        _this.addClass('ascending');
      }
    })
  })


  // 字體大小
  var _fontSize = $('.fontSize');
  var _sizeSelect = _fontSize.find('li');
  var _fsArea = $('.contBox');
  _sizeSelect.click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).hasClass('large')) {
      _fsArea.css('font-size', '1.4rem')
    }
    if ($(this).hasClass('medium')) {
      _fsArea.css('font-size', '1.16rem')
    }
    if ($(this).hasClass('small')) {
      _fsArea.css('font-size', '1rem')
    }
  })




  

})