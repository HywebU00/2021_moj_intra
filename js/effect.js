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


    // ----------------------------------- 外掛套件 slick 參數設定
    // 小圖 banner 水平輪播
    $('.adBannerSlick').find('.slick').slick({ 
      arrows: true,                       //左右箭頭
      autoplay: true,                    //自動播放
      autoplaySpeed: 4000,                //自動播放秒數
      dots: false,                        //顯示圓點
      draggable: true,                    //滑鼠可以拖曳
      infinite: true,                     //無限輪播
      pauseOnHover: true,                 //滑鼠移過後暫停自動撥放
      rtl: false,                         //改變輪播方向
      slidesToShow: 3,                    //一次顯示幾張
      slidesToScroll: 1,                  //一次輪播幾張
      vertical: false,                   //改成垂直方向
      mobileFirst:true,
      responsive: [
        {
          breakpoint: 1254,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1460,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1666,
          settings: {
            slidesToShow: 6
          }
        }
      ]
    });
  
    // 小圖 banner 垂直輪播
    $('.adBannerSlideV').find('.slick').slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: false,
      draggable: false,
      infinite: true,
      pauseOnHover: true,
      rtl: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      mobileFirst:false,
      responsive: []
    });

    // 大圖 banner 水平輪播
    $('.bigBannerSlick').find('.slick').slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      draggable: true,
      infinite: true,
      pauseOnHover: true,
      rtl: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      mobileFirst:false,
      responsive: []
    });
    

  // 所屬單位清單 顯示／隱藏
  // var _allCourts = $('.allCourts');
  // var _courtsList = $('.courtsList');
  // var _closeCourtsList = _courtsList.find('.closeThis');
  // _allCourts.click(function(){
  //   _courtsList.stop(true, false).slideDown(400);
  // })
  // _closeCourtsList.click(function(){
  //   _courtsList.stop(true, false).slideUp(250);
  // })

  // 登入區 顯示／隱藏
  // var _loginBtn = $('.loginBtn');
  // var _loginHere = $('.loginHere');
  // var _closeLogin = _loginHere.find('.closeThis');
  // _loginBtn.click(function(){
  //   _loginHere.stop(true, false).slideDown(400).addClass('show');
  // })
  // _closeLogin.click(function(){
  //   _loginHere.stop(true, false).slideUp(250).removeClass('show');
  // })



  // 燈箱 --- 【所屬單位清單】 顯示／隱藏 ，【登入區】顯示／隱藏 ，【進階查詢】 顯示／隱藏 ，
  var _showLightbox =  $('.showLightbox');
  var _lightbox = $('.lightbox');
  var _hideLightbox = _lightbox.find('.closeThis');
  var _lightboxNow;
  var _cover;
  const speed = 400;

  _lightbox.before('<div class="cover"></div>');
  
  _showLightbox.click(function(){
    let boxID = $(this).attr('data-id');
    _lightboxNow = _lightbox.filter( function(){ return $(this).attr('data-id') === boxID} );
    _cover = _lightboxNow.prev('.cover');
    _lightboxNow.stop(true, false).slideDown(speed).addClass('show');
    _cover.fadeIn(speed);
  })

  _hideLightbox.click(function(){
    _lightboxNow.stop(true, false).slideUp(speed).removeClass('show');
    _cover.fadeOut(speed);
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
  var _fsArea = $('.contBox').add('.row>section[class]');
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