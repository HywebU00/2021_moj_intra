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
      speed:800,
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

    // 相簿內頁
    $('.photoSlick').find('.photoShow').slick({
      asNavFor: '.photoNav',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true
    });
    $('.photoSlick').find('.photoNav').slick({
      asNavFor: '.photoShow',
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });




    // cp 頁圖檔附件
    $('.related').find('.smallImages').slick({
      asNavFor: '.largeImages',
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      centerMode: false,
      draggable: false,
      arrows: true,
      focusOnSelect: true
    });
    // $('.related').find('.smallImages').unslick();

    $('.related').find('.viewLarge').find('.largeImages').slick({
      asNavFor: '.smallImages',
      arrows: true,
      autoplay: false,
      dots: true,
      draggable: true,
      infinite: true,
      rtl: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 400,
      vertical: false,
      mobileFirst:false,
      responsive: []
    });

    var _cpRelatedImages = $('.related').has('.smallImages');
    // console.log(_cpRelatedImages);
    _cpRelatedImages.each(function(){
      let _this = $(this);
      let _viewEnlarge = _this.find('.viewEnlarge');
      let _viewLarge = _this.find('.viewLarge');
      let _closeView = _viewLarge.find('.closeThis>a');

      _viewLarge.before('<div class="cover"></div>');
      let _vCover = _this.find('.cover');

      _viewEnlarge.click(function(){
        setTimeout( function(){ _viewLarge.addClass('show') }, 300);
        // _viewLarge.delay( 800 ).addClass('show');
        _vCover.fadeIn(400);
      })
      _closeView.add(_vCover).click(function(){
        _viewLarge.removeClass('show')
        _vCover.hide();
      })


    })








  // 燈箱 --- 【所屬單位清單】 顯示／隱藏 ，【登入區】顯示／隱藏 ，【進階查詢】 顯示／隱藏 ，
  var _showLightbox =  $('.showLightbox');
  var _lightbox = $('.lightbox');
  var _hideLightbox = _lightbox.find('.closeThis');
  var _lightboxNow;
  const speed = 400;

  _lightbox.before('<div class="cover"></div>');
  var _cover = _lightbox.before('.cover');
  
  _showLightbox.click(function(){
    let boxID = $(this).attr('data-id');
    _lightboxNow = _lightbox.filter( function(){ return $(this).attr('data-id') === boxID} );
    _lightboxNow.stop(true, false).slideDown(speed).addClass('show');
    _lightboxNow.prev(_cover).fadeIn(speed);
    _body.addClass('noScroll');
  })

  _hideLightbox.click(function(){
    _lightboxNow.stop(true, false).slideUp(speed).removeClass('show');
    _cover.fadeOut(speed);
    _body.removeClass('noScroll');
  })

  _cover.click(function(){
    $(this).add($(this).next(_lightbox)).fadeOut(speed);
    _body.removeClass('noScroll');
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


  // 開合區 slideToggle
  var _slideToggle = $('.slideToggle');
  _slideToggle.each(function(){
    let _this = $(this);
    let _ctrl = _this.find('.slideCtrl');
    let _drawer = _this.find('.drawer');
    let text1 = _ctrl.text();
    let text2 = _ctrl.attr('data-altTitle');

    if(_drawer.is(':hidden')) {
      _ctrl.addClass('openIt').text(text2);
    } else {
      _ctrl.removeClass('openIt').text(text1);
    }

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


  // 跑馬燈
  var _marquee = $('.marquee');
  _marquee.each(function(){
    let _mq = $(this);
    let _mqItem = _mq.find('li');
    let _box = _mq.find('.mqBox');
    let count = _mqItem.length;
    let mqH = _mqItem.outerHeight();
    let speed = 600;
    let timer = 4000;
    let i = 0, j;
    let marqueeGo;
    let _button = _mq.find('button');
    
    _box.innerHeight(mqH);
    _mqItem.css({'top': mqH});
    _mqItem.eq(i).css({'top':0, 'left':0});

    if(count>1){
      marqueeGo = setInterval(mqLoop, timer);
      mqHover();

      _button.click(function(){
        $(this).toggleClass('pause');
        if($(this).hasClass('pause')){
          clearInterval(marqueeGo);
        } else {
          marqueeGo = setInterval(mqLoop, timer);
        }
      });

      _mqItem.find('a').focus(function(){
        clearInterval(marqueeGo);
        _mqItem.css({'top':'0','z-index':'-1'});
        $(this).parent().css('z-index','99');
        _mqItem.off('mouseenter mouseleave');
      });

      _mqItem.find('a').keydown(function(ev){
        var keyX = ev.which || ev.keyCode;
        i= $(this).parent().index();
        if(keyX==9 && i==count-1 && ev.shiftKey==0){
          _mqItem.removeAttr('style');
          _mqItem.not(':last').css('top', mqH);
          marqueeGo = setInterval(mqLoop, timer);
          mqHover();
        }
        if(keyX==9 && i==0 && ev.shiftKey==1){
          _mqItem.removeAttr('style');
          _mqItem.not(':first').css('top', mqH);						
          marqueeGo = setInterval(mqLoop, timer);
          mqHover();
        }
      });
    } else {
      _button.hide();
    }

    function mqHover(){
      _mqItem.hover(
        function(){clearInterval(marqueeGo); },
        function(){
          if ( _button.hasClass('pause')) {return;}
          else { marqueeGo = setInterval(mqLoop, timer); }
        }
      );
    }

    function mqLoop(){
      j = (i+1)%count;
      _mqItem.eq(j).stop(true,false).animate({'top': 0}, speed, 'linear');
      _mqItem.eq(i).stop(true,false).animate({'top': -1*mqH}, speed, 'linear',
        function(){
          $(this).css('top', mqH);
          i = j;
        }
      );
    }
  });

})