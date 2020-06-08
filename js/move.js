$(function(){
	var portfolioindex_url = 'https://cl0cktree.github.io/portfolioindex';
	// var portfolioindex_url = 'http://clocktree.dothome.co.kr/portfolioindex';
	var scroll_framespeed = 1000/60;
	/*loader 제어*/
	$(document).ready(function(){
		$('.body-filter-preloader').load(portfolioindex_url+'/cover/cover.html .filter-preloader-loadingbox',function(){
			$('.body-filter-preloader').hide();
			var msheight = $('.slide img').height();
			$('#slide-wrap').css({'height':msheight});

			var agent = navigator.userAgent.toLowerCase();
			if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1) || (agent.indexOf("safari") >-1))
			{
				if ((agent.indexOf("safari") >-1)||(navigator.userAgent.search( "trident" )>-1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
				{
					bubble_background2();
				}else{
					bubble_background1();
				}
			}else{
				bubble_background2();
			}

		})
		var footerIcon= $('.ul-li-img1').width();
		$('.ul-li-img1').css({'height':footerIcon});
	});

	/*-----------*/

	/*커버소환*/
	var scall1 = $('#main-scroll1-con').children('.scrollall-con-box').each(Array).length;
	var scall2 = $('#main-scroll2-con').children('.scrollall-con-box').each(Array).length;
	var scall3 = $('#main-scroll3-con').children('.scrollall-con-box').each(Array).length;
	var scib1;
	var scib2;
	var scib3;

	$('body').ready(function(){
		$('.body-section-all').load(portfolioindex_url+'/cover/cover.html .section-num1-article',function(){
			/*ie9에서 탑메뉴 이동 후 동작*/
			for (scib1=1;scib1<=scall1 ;scib1++ )
			{
				var ibheight1 = $('#con-box1-imgborder'+scib1+'img').height();
				$('#con-box1-imgborder'+scib1).css({'height':ibheight1,'line-height':ibheight1});

			}
			for (scib2=1;scib2<=scall2 ;scib2++ )
			{
				var ibheight2 = $('#con-box2-imgborder'+scib2+'img').height();
				$('#con-box2-imgborder'+scib2).css({'height':ibheight2,'line-height':ibheight2});

			}
			for (scib3=1;scib3<=scall3 ;scib3++ )
			{
				var ibheight3 = $('#con-box3-imgborder'+scib3+'img').height();
				$('#con-box3-imgborder'+scib3).css({'height':ibheight3,'line-height':ibheight3});

			}

			if ($('#article1-nav1-topmenu1').css('display')=='block')
			{
				$('.body-all-header').stop().animate({'height':'150px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}else{
				$('.body-all-header').stop().animate({'height':'100px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}
			if (location.href==portfolioindex_url+'/sub/sub1.html')
			{
				$('#slide-wrap').css({'display':'none'})
				$('#slide-wrap-i').css({'display':'block'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
				$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			}else if (location.href==portfolioindex_url+'/sub/sub2.html')
			{
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			}else if (location.href==portfolioindex_url+'/sub/sub3.html')
			{
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			}else if (location.href==portfolioindex_url+'/sub/sub4.html')
			{
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			}else if (location.href==portfolioindex_url+'/sub/sub5.html')
			{
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			}else if ((location.href==portfolioindex_url+'/index.html')||(location.href==portfolioindex_url+'/')||(location.href==portfolioindex_url+''))
			{
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#landing-contents-title, #landing-contents-buttonwrap').stop().animate({'text-indent':'0'},500)
			}
		})
		$('footer').load(portfolioindex_url+'/cover/cover.html .body-footer-contaner',function(){
			if (location.href==portfolioindex_url+'/sub/sub1.html')
			{
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li1').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'none'})
				$('#slide-wrap-i').css({'display':'block'})
			}else if (location.href==portfolioindex_url+'/sub/sub2.html')
			{
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li2').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
			}else if (location.href==portfolioindex_url+'/sub/sub3.html')
			{
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li3').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
			}else if (location.href==portfolioindex_url+'/sub/sub4.html')
			{
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li4').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
			}else if (location.href==portfolioindex_url+'/sub/sub5.html')
			{
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li5').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
			}else if (location.href==portfolioindex_url+'/index.html')
			{
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
			}
		})
	})
	/*------------------------------------------------------------------*/
	/*전체창 리사이즈시 반응형 동작 빈틈보강*/
	$(window).resize(function(){
		var footerIcon= $('.ul-li-img1').width();
		$('.ul-li-img1').css({'height':footerIcon});

		for (scib1=1;scib1<=scall1 ;scib1++ )
		{
			var ibheight1 = $('#con-box1-imgborder'+scib1+'img').height();
			$('#con-box1-imgborder'+scib1).css({'height':ibheight1,'line-height':ibheight1});

		}
		for (scib2=1;scib2<=scall2 ;scib2++ )
		{
			var ibheight2 = $('#con-box2-imgborder'+scib2+'img').height();
			$('#con-box2-imgborder'+scib2).css({'height':ibheight2,'line-height':ibheight2});

		}
		for (scib3=1;scib3<=scall3 ;scib3++ )
		{
			var ibheight3 = $('#con-box3-imgborder'+scib3+'img').height();
			$('#con-box3-imgborder'+scib3).css({'height':ibheight3,'line-height':ibheight3});

		}

		if ($('.body-all-header').css('width')<'480px')
		{

			if ($('#article1-nav1-topmenu1').css('display')=='none')
			{
				$('.body-all-header').animate({'height':'100px'},100)
				$('.article1-nav1-toplogo').animate({'height':'100px'},100)
				return false;
			}
			return false;
		}
		if ($('#article1-nav1-topmenu1').css('display')!='none')
		{
			$('.body-footer-add').animate({'margin-left':'0px'},100)
			$('.nav1-side-menu').animate({'right':'-100%'},100)
			$('.body-all-header').animate({'height':'50px'},100)
			$('.article1-nav1-toplogo').animate({'height':'0px'},100)
			$('#menu-icon input[type=checkbox]').prop('checked',false)
			return false;
		}

	})
	/*----------------------------------------------------------------*/
	/*header 부분 동작부*/
	$('.body-all-header').on('mouseover mouseleave touchstart',function(event){
		if (event.type=='mouseover')
		{
			if ($('#article1-nav1-topmenu1').css('display')=='block')
			{
				$('.body-all-header').stop().animate({'height':'150px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}else{
				$('.body-all-header').stop().animate({'height':'100px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}
		}else if (event.type=='mouseleave')
		{
			if ($('#article1-nav1-topmenu1').css('display')=='block')
			{
				$('.body-all-header').animate({'height':'50px'},100)
				$('.article1-nav1-toplogo').animate({'height':'0px'},100)
			}else{
				$('.body-all-header').animate({'height':'100px'},100)
				$('.article1-nav1-toplogo').animate({'height':'100px'},100)
			}
		}
		else if(event.type=='touchstart'){
			if ($('#article1-nav1-topmenu1').css('display')=='block')
			{
				$('.body-all-header').stop().animate({'height':'150px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}else{
				$('.body-all-header').stop().animate({'height':'100px'},100)
				$('.article1-nav1-toplogo').stop().animate({'height':'100px'},100)
			}
		}
	})


	$('.body-section-all').on('click','.article1-nav1-toplogo',function(){
		$(document).on('click history','.article1-nav1-toplogo a',function(event){
			event.preventDefault();
		})
		var agent = navigator.userAgent.toLowerCase();

		$('img').each(function(){
			var imgWidth = this.naturalWidth;
		})
		var msheight = $('.slide img').height();
		$('.slideshow').css({'height':msheight});

		$('.topmenu1-list-span').css({'border':'0px'})

		if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
		{
			if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" )>-1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
			{
				$('.body-filter-preloader').show();
				$('.article-main-welcolme').load(portfolioindex_url+'/index.html .main-welcolme-summon',function(){
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
				})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.article-summon-wrap').load(portfolioindex_url+'/index.html .article-main-scrollall')
				$('.scr-index-box').load(portfolioindex_url+'/index.html .index-btn-wrap')

				var topbtnm
				if ($('.body-all-header').css('height')=='50px')
				{
					topbtnm = 50;
				}else if ($('.body-all-header').css('height')=='100px')
				{
					topbtnm = 100;
				}else if ($('.body-all-header').css('height')=='150px')
				{
					topbtnm = 150;
				}
				$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
				$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
				$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
				$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

				$('.body-filter-preloader').hide();
				history.pushState(null,null,portfolioindex_url+'/index.html')

			}else{
				location.href=portfolioindex_url+'/index.html'
			}

		}else{
			$('.body-filter-preloader').show();
			$('.article-main-welcolme').load(portfolioindex_url+'/index.html .main-welcolme-summon',function(){
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
			})
			$('#slide-wrap').css({'display':'block'})
			$('#slide-wrap-i').css({'display':'none'})
			$('.article-summon-wrap').load(portfolioindex_url+'/index.html .article-main-scrollall')
			$('.scr-index-box').load(portfolioindex_url+'/index.html .index-btn-wrap')

			var topbtnm
			if ($('.body-all-header').css('height')=='50px')
			{
				topbtnm = 50;
			}else if ($('.body-all-header').css('height')=='100px')
			{
				topbtnm = 100;
			}else if ($('.body-all-header').css('height')=='150px')
			{
				topbtnm = 150;
			}
			$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
			$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
			$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
			$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

			$('.body-filter-preloader').hide();
			history.pushState(null,null,portfolioindex_url+'/index.html')

		}

	})
	$('.body-section-all').on('click','#phon-icon',function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='tel:010-9954-3410','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='tel:010-9954-3410','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	})
	$('.body-section-all').on('click keypress','#menu-icon input[type=checkbox]',function(){
		if ($('.nav1-side-menu').css('right')!=='0px')
		{
			//$('.body-footer-add').animate({'margin-left':'-100%'},100)//footer와 연동하여 밀리는 부분으로 필요시 사용.
			$('.nav1-side-menu').animate({'right':'0px'},100)
			$('.top-btn').stop().animate({'bottom':'90px'},100)
			$('.index-btn-wrap').stop().animate({'bottom':'144px'},100)
		}else{
			//$('.body-footer-add').animate({'margin-left':'0px'},100)
			$('.nav1-side-menu').animate({'right':'-100%'},100)
			if($(window).height()+$(window).scrollTop()>=$(document).height())//현재 window와 현재의 scroll값을 더한 값이 보여지는 document 이상일 경우(현재 scroll 위치) -> top 기준이기 때문에 탑메뉴의 height가 늘어나면 연산을 다시해서 재실행 되는 문제가 있음.
			{
				$('.top-btn').stop().animate({'bottom':'90px'},100)
			}else{
				$('.top-btn').stop().animate({'bottom':'50px'},100)
			}
			if($(window).height()+$(window).scrollTop()>=$(document).height())//현재 window와 현재의 scroll값을 더한 값이 보여지는 document 이상일 경우(현재 scroll 위치) -> top 기준이기 때문에 탑메뉴의 height가 늘어나면 연산을 다시해서 재실행 되는 문제가 있음.
			{
				$('.index-btn-wrap').stop().animate({'bottom':'144px'},100)
			}else{
				$('.index-btn-wrap').stop().animate({'bottom':'104px'},100)
			}
		}
	})
	$('.body-section-all').on('mouseover mouseleave click','.topmenu1-list-span',function(event){

		if (event.type=='mouseover')
		{
			if ($(this).children('span').css('bottom')=='-3px')
				{
					$(this).children('.list-span-leftborder, .list-span-rightborder').css({'border-bottom':'3px solid #000'})
					$(this).children('.list-span-leftborder, .list-span-rightborder').animate({'width':'50%'},100)


				}else{
					$(this).children('.list-span-leftborder, .list-span-rightborder').animate({'width':'50%'},100)
					$(this).children('.list-span-leftborder, .list-span-rightborder').css({'border-bottom':'3px solid #4e3b29'})
				}
		}else if (event.type=='mouseleave')
		{
			if ($(this).children('span').css('bottom')=='-3px')
				{
					$(this).children('.list-span-leftborder, .list-span-rightborder').css({'border-bottom':'3px solid #000'})
					$(this).children('.list-span-leftborder, .list-span-rightborder').animate({'width':'0%'},100)


				}else{
					$(this).children('.list-span-leftborder, .list-span-rightborder').animate({'width':'0%'},100)
					$(this).children('.list-span-leftborder, .list-span-rightborder').css({'border-bottom':'3px solid #4e3b29'})
				}
		}else if (event.type=='click')
		{
			$(document).on('click history','.nav1-topmenu1-list a',function(event){
				event.preventDefault();//a tag 동작제어 - 바로 링크되지 못하도록 방지
			})
			var agent = navigator.userAgent.toLowerCase();
			if (this==document.getElementById('topmenu1-list-span1'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub1.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li1').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'none'})
						$('#slide-wrap-i').css({'display':'block'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub1.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub1.html .index-btn-wrap')

						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

						$('.body-filter-preloader').hide();
						history.pushState(null,null,portfolioindex_url+'/sub/sub1.html')

					}else{
						location.href=portfolioindex_url+'/sub/sub1.html'

					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub1.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li1').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'none'})
					$('#slide-wrap-i').css({'display':'block'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub1.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub1.html .index-btn-wrap')

					var topbtnm
					if ($('.body-all-header').css('height')=='50px')
					{
						topbtnm = 50;
					}else if ($('.body-all-header').css('height')=='100px')
					{
						topbtnm = 100;
					}else if ($('.body-all-header').css('height')=='150px')
					{
						topbtnm = 150;
					}
					$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
					$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
					$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
					$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

					$('.body-filter-preloader').hide();
					history.pushState(null,null,portfolioindex_url+'/sub/sub1.html')

				}

			}else if (this==document.getElementById('topmenu1-list-span2'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub2.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li2').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub2.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub2.html .index-btn-wrap')

						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

						$('.body-filter-preloader').hide();
						history.pushState(null,null,portfolioindex_url+'/sub/sub2.html')

					}else{
						location.href=portfolioindex_url+'/sub/sub2.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub2.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li2').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub2.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub2.html .index-btn-wrap')

					var topbtnm
					if ($('.body-all-header').css('height')=='50px')
					{
						topbtnm = 50;
					}else if ($('.body-all-header').css('height')=='100px')
					{
						topbtnm = 100;
					}else if ($('.body-all-header').css('height')=='150px')
					{
						topbtnm = 150;
					}
					$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
					$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
					$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
					$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

					$('.body-filter-preloader').hide();
					history.pushState(null,null,portfolioindex_url+'/sub/sub2.html')

				}

			}else if (this==document.getElementById('topmenu1-list-span3'))
			{

				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub3.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li3').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub3.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub3.html .index-btn-wrap')

						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

						$('.body-filter-preloader').hide();
						history.pushState(null,null,portfolioindex_url+'/sub/sub3.html')

					}else{
						location.href=portfolioindex_url+'/sub/sub3.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub3.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li3').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub3.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub3.html .index-btn-wrap')

					var topbtnm
					if ($('.body-all-header').css('height')=='50px')
					{
						topbtnm = 50;
					}else if ($('.body-all-header').css('height')=='100px')
					{
						topbtnm = 100;
					}else if ($('.body-all-header').css('height')=='150px')
					{
						topbtnm = 150;
					}
					$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
					$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
					$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
					$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

					$('.body-filter-preloader').hide();
					history.pushState(null,null,portfolioindex_url+'/sub/sub3.html')

				}

			}else if (this==document.getElementById('topmenu1-list-span4'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub4.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li4').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub4.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub4.html .index-btn-wrap')

						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

						$('.body-filter-preloader').hide();
						history.pushState(null,null,portfolioindex_url+'/sub/sub4.html')

					}else{
						location.href=portfolioindex_url+'/sub/sub4.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub4.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li4').css({'border':'3px solid #999'})
					})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub4.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub4.html .index-btn-wrap')

					var topbtnm
					if ($('.body-all-header').css('height')=='50px')
					{
						topbtnm = 50;
					}else if ($('.body-all-header').css('height')=='100px')
					{
						topbtnm = 100;
					}else if ($('.body-all-header').css('height')=='150px')
					{
						topbtnm = 150;
					}
					$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
					$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
					$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
					$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

					$('.body-filter-preloader').hide();
					history.pushState(null,null,portfolioindex_url+'/sub/sub4.html')

				}

			}else if (this==document.getElementById('topmenu1-list-span5'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub5.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li5').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub5.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub5.html .index-btn-wrap')

						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

						$('.body-filter-preloader').hide();
						history.pushState(null,null,portfolioindex_url+'/sub/sub5.html')

					}else{
						location.href=portfolioindex_url+'/sub/sub5.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub5.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li5').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub5.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub5.html .index-btn-wrap')

					var topbtnm
					if ($('.body-all-header').css('height')=='50px')
					{
						topbtnm = 50;
					}else if ($('.body-all-header').css('height')=='100px')
					{
						topbtnm = 100;
					}else if ($('.body-all-header').css('height')=='150px')
					{
						topbtnm = 150;
					}
					$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
					$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
					$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
					$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

					$('.body-filter-preloader').hide();
					history.pushState(null,null,portfolioindex_url+'/sub/sub5.html')

				}

			}
		}
	})
	/*--------------------------------------------------------*/
	/*footer 소환동작 기종체크 후 문자보내기*/
	$('footer').on('click','.footer-add-num',function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='sms:010-9954-3410','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='sms:010-9954-3410','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	})
	/*--------------------------------------------------------*/
	/*햄버거 메뉴 클릭시 bottom:0에 앱형태 ui의 네비 생성 및 네비동작*/
	$('footer').on('click mouseover mouseleave','a',function(event){
		var agent = navigator.userAgent.toLowerCase();
		$(document).on('click history','.list-ul-li a',function(event){
			event.preventDefault();//a tag 동작제어 - 바로 링크되지 못하도록 방지
		})
		if (event.type=='mouseover')
		{
			//$(this).animate({'width':'65%','margin':'17.5%','margin-top':'12px'},50)
			$('.ul-li-img1').css({'border-radius':'12px'})
			$(this).stop().css({'border-radius':'25px'})
		}else if (event.type=='mouseleave')
		{
			//$(this).animate({'width':'80%','margin':'10%','margin-top':'10px'},50)
			$(this).stop().css({'border-radius':'12px'})
		}else if (event.type=='click')
		{

			if (this==document.getElementById('list-ul-li1'))
			{

				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub1.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li1').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'none'})
						$('#slide-wrap-i').css({'display':'block'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub1.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub1.html .index-btn-wrap')

						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

						$('.body-filter-preloader').hide();
						history.pushState(null,null,portfolioindex_url+'/sub/sub1.html')

					}else{
						location.href=portfolioindex_url+'/sub/sub1.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub1.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li1').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'none'})
					$('#slide-wrap-i').css({'display':'block'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub1.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub1.html .index-btn-wrap')

					var topbtnm
					if ($('.body-all-header').css('height')=='50px')
					{
						topbtnm = 50;
					}else if ($('.body-all-header').css('height')=='100px')
					{
						topbtnm = 100;
					}else if ($('.body-all-header').css('height')=='150px')
					{
						topbtnm = 150;
					}
					$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
					$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
					$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
					$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

					$('.body-filter-preloader').hide();
					history.pushState(null,null,portfolioindex_url+'/sub/sub1.html')

				}


			}else if (this==document.getElementById('list-ul-li2'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub2.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li2').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub2.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub2.html .index-btn-wrap')

						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

						$('.body-filter-preloader').hide();
						history.pushState(null,null,portfolioindex_url+'/sub/sub2.html')

					}else{
						location.href=portfolioindex_url+'/sub/sub2.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub2.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li2').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub2.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub2.html .index-btn-wrap')

					var topbtnm
					if ($('.body-all-header').css('height')=='50px')
					{
						topbtnm = 50;
					}else if ($('.body-all-header').css('height')=='100px')
					{
						topbtnm = 100;
					}else if ($('.body-all-header').css('height')=='150px')
					{
						topbtnm = 150;
					}
					$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
					$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
					$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
					$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

					$('.body-filter-preloader').hide();
					history.pushState(null,null,portfolioindex_url+'/sub/sub2.html')

				}

			}else if (this==document.getElementById('list-ul-li3'))
			{

				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub3.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li3').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub3.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub3.html .index-btn-wrap')

						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

						$('.body-filter-preloader').hide();
						history.pushState(null,null,portfolioindex_url+'/sub/sub3.html')

					}else{
						location.href=portfolioindex_url+'/sub/sub3.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub3.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li3').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub3.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub3.html .index-btn-wrap')

					var topbtnm
					if ($('.body-all-header').css('height')=='50px')
					{
						topbtnm = 50;
					}else if ($('.body-all-header').css('height')=='100px')
					{
						topbtnm = 100;
					}else if ($('.body-all-header').css('height')=='150px')
					{
						topbtnm = 150;
					}
					$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
					$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
					$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
					$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

					$('.body-filter-preloader').hide();
					history.pushState(null,null,portfolioindex_url+'/sub/sub3.html')

				}

			}else if (this==document.getElementById('list-ul-li4'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub4.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li4').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub4.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub4.html .index-btn-wrap')

						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

						$('.body-filter-preloader').hide();
						history.pushState(null,null,portfolioindex_url+'/sub/sub4.html')

					}else{
						location.href=portfolioindex_url+'/sub/sub4.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub4.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li4').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub4.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub4.html .index-btn-wrap')

					var topbtnm
					if ($('.body-all-header').css('height')=='50px')
					{
						topbtnm = 50;
					}else if ($('.body-all-header').css('height')=='100px')
					{
						topbtnm = 100;
					}else if ($('.body-all-header').css('height')=='150px')
					{
						topbtnm = 150;
					}
					$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
					$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
					$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
					$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

					$('.body-filter-preloader').hide();
					history.pushState(null,null,portfolioindex_url+'/sub/sub4.html')

				}

			}else if (this==document.getElementById('list-ul-li5'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub5.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li5').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub5.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub5.html .index-btn-wrap')

						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

						$('.body-filter-preloader').hide();
						history.pushState(null,null,portfolioindex_url+'/sub/sub5.html')

					}else{
						location.href=portfolioindex_url+'/sub/sub5.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub5.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li5').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub5.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub5.html .index-btn-wrap')

					var topbtnm
					if ($('.body-all-header').css('height')=='50px')
					{
						topbtnm = 50;
					}else if ($('.body-all-header').css('height')=='100px')
					{
						topbtnm = 100;
					}else if ($('.body-all-header').css('height')=='150px')
					{
						topbtnm = 150;
					}
					$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },200);
					$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
					$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
					$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)

					$('.body-filter-preloader').hide();
					history.pushState(null,null,portfolioindex_url+'/sub/sub5.html')

				}

			}
		}
	})
	/*------------------------------------------------------------------*/

	/*------------------------popState 전체제어--------------------------*/
	var agent = navigator.userAgent.toLowerCase();
	if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
		{
			if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
			{
				$(window).on('popstate',function(event){

					if (location.href==portfolioindex_url+'/index.html')
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/index.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/index.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/index.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}else if(location.href==portfolioindex_url+'/sub/sub1.html'){
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub1.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li1').css({'border':'3px solid #999'})
						$('#slide-wrap').css({'display':'none'})
						$('#slide-wrap-i').css({'display':'block'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub1.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub1.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}else if(location.href==portfolioindex_url+'/sub/sub2.html'){
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub2.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li2').css({'border':'3px solid #999'})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub2.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub2.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}else if(location.href==portfolioindex_url+'/sub/sub3.html'){
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub3.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li3').css({'border':'3px solid #999'})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub3.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub3.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}else if(location.href==portfolioindex_url+'/sub/sub4.html'){
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub4.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li4').css({'border':'3px solid #999'})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub4.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub4.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}else if(location.href==portfolioindex_url+'/sub/sub5.html'){
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub5.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li5').css({'border':'3px solid #999'})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub5.html .article-main-scrollall')
						$('.scr-index-box').load(portfolioindex_url+'/sub/sub5.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}
				})
			}
		}else{
			$(window).on('popstate',function(event){

				if (location.href==portfolioindex_url+'/index.html')
				{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/index.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/index.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/index.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}else if(location.href==portfolioindex_url+'/sub/sub1.html'){
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub1.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
					$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#list-ul-li1').css({'border':'3px solid #999'})
					$('#slide-wrap').css({'display':'none'})
					$('#slide-wrap-i').css({'display':'block'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub1.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub1.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}else if(location.href==portfolioindex_url+'/sub/sub2.html'){
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub2.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
					$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#list-ul-li2').css({'border':'3px solid #999'})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub2.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub2.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}else if(location.href==portfolioindex_url+'/sub/sub3.html'){
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub3.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
					$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#list-ul-li3').css({'border':'3px solid #999'})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub3.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub3.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}else if(location.href==portfolioindex_url+'/sub/sub4.html'){
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub4.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
					$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#list-ul-li4').css({'border':'3px solid #999'})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub4.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub4.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}else if(location.href==portfolioindex_url+'/sub/sub5.html'){
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load(portfolioindex_url+'/sub/sub5.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
					$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#list-ul-li5').css({'border':'3px solid #999'})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load(portfolioindex_url+'/sub/sub5.html .article-main-scrollall')
					$('.scr-index-box').load(portfolioindex_url+'/sub/sub5.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}

			})
		}
	/*-------------------------------------------------------------------*/

	/*topmenu 및 top-btn scroll*/
	var scrollindex = $('.article-main-scrollall').each(Array).length;
	$(window).scroll(function(){
		var scroll_delay_time_1;
		if(!scroll_delay_time_1){
			scroll_delay_time_1 = setTimeout(function(){
				scroll_delay_time_1=null;
				if ($('#article1-nav1-topmenu1').css('display')=='block')
				{
					$('.body-all-header').animate({'height':'50px'},100)
					$('.article1-nav1-toplogo').animate({'height':'0px'},100)
				}else{
					$('.body-all-header').animate({'height':'100px'},100)
					$('.article1-nav1-toplogo').animate({'height':'100px'},100)
				}
				if ($(window).scrollTop()>0)
				{
					$('#section1-article1-nav1').css({'background':'rgba(0,0,0,0.5)'})
					$('.nav1-topmenu1-list a').css({'color':'#fff'})
					$('#phon-icon').css('background-position','-80px -40px')
		
					$('#section1-article1-nav1').mouseover(function(){
						$('#section1-article1-nav1').stop().css({'background':'#fff'})
						$('.nav1-topmenu1-list a').css({'color':'#333'})
						$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
						$('#phon-icon').css('background-position','-80px 0px')
		
					})
					$('#section1-article1-nav1').mouseleave(function(){
						$('#section1-article1-nav1').stop().css({'background':'rgba(0,0,0,0.5)'})
						$('.nav1-topmenu1-list a').css({'color':'#fff'})
						$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #fff')
						$('#phon-icon').css('background-position','-80px -40px')
		
					})
		
					/*
					if ($('#section1-article1-nav1').css('width')<'360px')
					{
						$('#section1-article1-nav1').css({'background':'rgba(0,0,0,0.5)'})
						$('.nav1-topmenu1-list a').css({'color':'#fff'})
						$('#phon-icon img').attr('src',portfolioindex_url+'/images/ｐ_icon-1.png')
						$('#menu-icon img').attr('src',portfolioindex_url+'/images/m_icon-1.png')
		
						$('#section1-article1-nav1').mouseover(function(){
							$('#section1-article1-nav1').stop().css({'background':'#fff'})
							$('.nav1-topmenu1-list a').css({'color':'#333'})
							$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
							$('#phon-icon img').attr('src',portfolioindex_url+'/images/ｐ_icon.png')
							$('#menu-icon img').attr('src',portfolioindex_url+'/images/m_icon.png')
						})
						$('#section1-article1-nav1').mouseleave(function(){
							$('#section1-article1-nav1').stop().css({'background':'rgba(0,0,0,0.5)'})
							$('.nav1-topmenu1-list a').css({'color':'#fff'})
							$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #fff')
							$('#phon-icon img').attr('src',portfolioindex_url+'/images/ｐ_icon-1.png')
							$('#menu-icon img').attr('src',portfolioindex_url+'/images/m_icon-1.png')
		
						})
		
					}else{
						$('#section1-article1-nav1').stop().css({'background':'rgba(255,255,255,1)'})
						$('.nav1-topmenu1-list a').css({'color':'#333'})
						$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
						$('.top-btn').css({'opacity':'0','z-index':'-1'})
						$('.index-btn-wrap').css({'z-index':'-2','opacity':'0','height':'0px'})
						$('#phon-icon img').attr('src',portfolioindex_url+'/images/ｐ_icon.png')
						$('#menu-icon img').attr('src',portfolioindex_url+'/images/m_icon.png')
		
						$('#section1-article1-nav1').mouseover(function(){
							$('#section1-article1-nav1').stop().css({'background':'rgba(255,255,255,1)'})
							$('.nav1-topmenu1-list a').css({'color':'#333'})
							$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
		
						})
						$('#section1-article1-nav1').mouseleave(function(){
							$('#section1-article1-nav1').stop().css({'background':'rgba(255,255,255,1)'})
							$('.nav1-topmenu1-list a').css({'color':'#333'})
							$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
		
						})
		
					}*/
					if ($('.top-btn').css('z-index')=='59')
					{
		
						if(($(window).height()+$(window).scrollTop()>=$('.body-section-content').height())||($('.nav1-side-menu').css('right')=='0px'))//현재 window와 현재의 scroll값을 더한 값이 보여지는 document 이상일 경우(현재 scroll 위치) -> top 기준이기 때문에 탑메뉴의 height가 늘어나면 연산을 다시해서 재실행 되는 문제가 있음.
						{
							$('.top-btn').stop().animate({'bottom':'90px'},200)
						}else{
							$('.top-btn').stop().animate({'bottom':'50px'},200)
						}
					}else{
						$('.top-btn').css({'opacity':'0.5','z-index':'59','cursor':'pointer'})
						if (($(window).height()+$(window).scrollTop()>=$('.body-section-content').height())||($('.nav1-side-menu').css('right')=='0px'))
						{
							$('.top-btn').stop().animate({'bottom':'90px'},200)
		
						}else{
							$('.top-btn').stop().animate({'bottom':'50px'},200)
						}
					}
					if ($('.index-btn-wrap').css('z-index')=='58'){
		
						if (($(window).height()+$(window).scrollTop()>=$('.body-section-content').height())||($('.nav1-side-menu').css('right')=='0px'))//현재 window와 현재의 scroll값을 더한 값이 보여지는 document 이상일 경우(현재 scroll 위치) -> top 기준이기 때문에 탑메뉴의 height가 늘어나면 연산을 다시해서 재실행 되는 문제가 있음.
						{
							$('.index-btn-wrap').stop().animate({'bottom':'144px'},150)
						}else{
							$('.index-btn-wrap').stop().animate({'bottom':'104px'},150)
						}
					}else{
						/*
						var bwheight = scrollindex*24;
						$('.index-btn-wrap').css({'z-index':'58','opacity':'0.5','height':bwheight+'px'})//.index-btn-wrap의 높이 자동계산.
						for (var scrmenu = 1 ; scrmenu<=scrollindex ; scrmenu++)
						{
							$('.index-btn-wrap').append('<a><div class="index-btn-all" id="index-btn-num'+scrmenu+'">'+scrmenu+'</div></a>')
						}
						*/
						$('.index-btn-wrap').css({'z-index':'58','opacity':'0.5'})
		
						if (($(window).height()+$(window).scrollTop()>=$('.body-section-content').height())||($('.nav1-side-menu').css('right')=='0px'))
						{
							$('.index-btn-wrap').stop().animate({'bottom':'144px'},150)
						}else{
							$('.index-btn-wrap').stop().animate({'bottom':'104px'},150)
						}
					}
		
					$('.top-btn').click(function(){
						var topbtnm
						if ($('.body-all-header').css('height')=='50px')
						{
							topbtnm = 50;
						}else if ($('.body-all-header').css('height')=='100px')
						{
							topbtnm = 100;
						}else if ($('.body-all-header').css('height')=='150px')
						{
							topbtnm = 150;
						}
						$('body, html').stop().animate({ scrollTop: $("body").offset().top-topbtnm },400);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)
					})
					if ($(window).scrollTop()==0){
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)
					}
					if ($(window).scrollTop()>70)
					{
						$('#scrollall-back-acc1').stop().animate({'top':'170px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'220px'},100)
					}else{
						$('#scrollall-back-acc1').stop().animate({'top':'270px'},100)
						$('#scrollall-back-acc2').stop().animate({'top':'170px'},100)
					}
		
				}else{
					$('#section1-article1-nav1').css({'background':'rgba(255,255,255,1)'})
					$('.nav1-topmenu1-list a').css({'color':'#333'})
					$('.top-btn').css({'opacity':'0','z-index':'-1','cursor':'initial'})
					$('.index-btn-wrap').css({'z-index':'-2','opacity':'0'})
					//$('.index-btn-all').remove('')
					$('#section1-article1-nav1').mouseover(function(){
						$('#section1-article1-nav1').stop().css({'background':'rgba(255,255,255,1)'})
						$('.nav1-topmenu1-list a').css({'color':'#333'})
						$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
					})
					$('#section1-article1-nav1').mouseleave(function(){
						$('#section1-article1-nav1').stop().css({'background':'rgba(255,255,255,1)'})
						$('.nav1-topmenu1-list a').css({'color':'#333'})
						$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
						$('#phon-icon').css('background-position','-80px 0px')
		
					})
					$('#phon-icon').css('background-position','-80px 0px')
				}
				var scpar
				if ((location.href==portfolioindex_url+'/index.html')||(location.href==portfolioindex_url+'/')||(location.href==portfolioindex_url+''))
				{
					scpar = 500;
				}else if (location.href==portfolioindex_url+'/sub/sub1.html')
				{
					scpar = 350;
				}else if (location.href==portfolioindex_url+'/sub/sub2.html')
				{
					scpar = 350;
				}else if (location.href==portfolioindex_url+'/sub/sub3.html')
				{
					scpar = 50;
				}else if (location.href==portfolioindex_url+'/sub/sub4.html')
				{
					scpar = 0;
				}else if (location.href==portfolioindex_url+'/sub/sub5.html')
				{
					scpar = 200;
				}
		
				var mw1 = $('.move-wrap1').height();
				var mw2 = $('.move-wrap2').height();
				var mw3 = $('.move-wrap3').height();
				var mw4 = $('.move-wrap4').height();
		
				if ($(window).scrollTop()>50)
				{
					$('.move-wrap1').animate({'opacity':'1'},400)
					if ($(window).scrollTop()>mw1)
					{
						$('.move-wrap2').animate({'left':'0','opacity':'1'},400)
						if ($(window).scrollTop()>mw1+mw2)
						{
							$('.move-wrap3').animate({'left':'0','opacity':'1'},400)
							if ($(window).scrollTop()>mw1+mw2+mw3)
							{
								$('.move-wrap4').animate({'left':'0','opacity':'1'},400)
								if ($(window).scrollTop()>mw1+mw2+mw3+mw4)
								{
									$('.move-wrap5').animate({'left':'0','opacity':'1'},400)
								}
							}
						}
					}
				}
			},scroll_framespeed);
		};
	})

	$('.body-section-content').on('click','.index-btn-all',function(){
		$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
		$(this).css({'background':'rgba(255,255,255,1)','border':'1px solid #000'})
		if ($('#article1-nav1-topmenu1').css('display')=='block')
		{
			var topminus = 50;
		}else{
			var topminus = 100;
		}
		if (this==document.getElementById('index-btn-num1'))
		{
			$('body, html').stop().animate({ scrollTop: $("#article-main-scroll1").offset().top-topminus },300);
		}else if (this==document.getElementById('index-btn-num2'))
		{
			$('body, html').stop().animate({ scrollTop: $("#article-main-scroll2").offset().top-topminus },300);
		}else if (this==document.getElementById('index-btn-num3'))
		{
			$('body, html').stop().animate({ scrollTop: $("#article-main-scroll3").offset().top-topminus },300);
		}else if (this==document.getElementById('index-btn-num4'))
		{
			$('body, html').stop().animate({ scrollTop: $("#article-main-scroll4").offset().top-topminus },300);
		}else if (this==document.getElementById('index-btn-num5'))
		{
			$('body, html').stop().animate({ scrollTop: $("#article-main-scroll5").offset().top-topminus },300);
		}
	})
	/*-article-main-scrollall의 영역이 바뀜에 따라 index-btn-all의 색인표시-*/
	$(window).scroll(function(){
		var scroll_delay_time_2;
		if(!scroll_delay_time_2){
			scroll_delay_time_2 = setTimeout(function(){
				scroll_delay_time_2=null;
				$('.article-main-scrollall').each(function(){
					var topminus2 = 0;
					if ($('#article1-nav1-topmenu1').css('display')=='block')
					{
						var topminus2 = 55;
					}else{
						var topminus2 = 105;
					}
					if ($(window).scrollTop()>=$(this).offset().top-topminus2)
					{
						var scm = $(this).attr('id').substring(19,20);
						$('.index-btn-all').css({'background':'rgba(0,0,0,1)','border':'1px solid #fff'})
						$('#index-btn-num'+scm).css({'background':'rgba(255,255,255,1)','border':'1px solid #000'})
					}
				})
			},scroll_framespeed);
		};
	});
	/*----------------------------------------------------------------------*/

	/*기종체크 후 전화연결*/
	$('#phon-icon').click(function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='tel:010-9954-3410','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='tel:010-9954-3410','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	})
	$('.footer-add-num').click(function(){
		if (navigator.userAgent.match(/android/i)) {
			location.href='sms:010-9954-3410','_self';
		} else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
			location.href='sms:010-9954-3410','_self';
		}else{
			alert('모바일에서만 가능합니다.');
		}
	})
	/*------------------------------------------------------------*/
	/*컨탠츠썸네일 클릭시 동작 부분*/

	$('.body-section-content').on('mouseover mouseleave click fadeIn fadeOut','.con-box-imgborder, .con-box-caption',function(event){
		if (event.type=='mouseover')
		{
			if ($(this).is('.con-box-imgborder'))
			{
				if ($('.box-imgborder-filter').length==false)
				{
					$(this).append('<div class="box-imgborder-filter"></div><div class="box-imgborder-word">Click Here!</div>')
				}
			}
			$(this).children('.box-imgborder-filter').css({'opacity':'1'})
			$(this).children('.box-imgborder-filter').stop().animate({'margin-top':'0%'},90)
			$(this).children('.box-imgborder-word').css({'opacity':'1'})
			$(this).children('.box-imgborder-word').stop().animate({'top':'50%','margin-top':'-20px'},100)
		}else if (event.type=='mouseleave')
		{
			$(this).children('.box-imgborder-filter').stop().animate({'margin-top':'-57%'},90)
			$(this).children('.box-imgborder-filter').css({'opacity':'0'})
			$(this).children('.box-imgborder-word').stop().animate({'top':'0','margin-top':'110%'},100)
			$(this).children('.box-imgborder-word').css({'opacity':'0'})
			$('.box-imgborder-filter, .box-imgborder-word').remove()
		}else if (event.type=='click')
		{
			var datasum
			if ((this==document.getElementById('con-box1-imgborder1'))||(this==document.getElementById('con-box1-caption1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder2'))||(this==document.getElementById('con-box1-caption2')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder3'))||(this==document.getElementById('con-box1-caption3')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents3';
			}else if ((this==document.getElementById('con-box1-imgborder4'))||(this==document.getElementById('con-box1-caption4')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents4';
			}else if ((this==document.getElementById('con-box1-imgborder5'))||(this==document.getElementById('con-box1-caption5')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents5';
			}else if ((this==document.getElementById('con-box1-imgborder6'))||(this==document.getElementById('con-box1-caption6')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents6';
			}else if ((this==document.getElementById('con-box1-imgborder7'))||(this==document.getElementById('con-box1-caption7')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents7';
			}else if ((this==document.getElementById('con-box1-imgborder8'))||(this==document.getElementById('con-box1-caption8')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents8';
			}else if ((this==document.getElementById('con-box1-imgborder9'))||(this==document.getElementById('con-box1-caption9')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents9';
			}else if ((this==document.getElementById('con-box1-imgborder10'))||(this==document.getElementById('con-box1-caption10')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents10';
			}else if ((this==document.getElementById('con-box1-imgborder11'))||(this==document.getElementById('con-box1-caption11')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents11';
			}else if ((this==document.getElementById('con-box1-imgborder12'))||(this==document.getElementById('con-box1-caption12')))
			{
				datasum = portfolioindex_url+'/data/data-m.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder13'))||(this==document.getElementById('con-box1-caption13')))
			{
				datasum = portfolioindex_url+'/data/data-m.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder14'))||(this==document.getElementById('con-box1-caption14')))
			{
				datasum = portfolioindex_url+'/data/data-m.html #filter-conbox-contents3';
			}else if ((this==document.getElementById('con-box1-imgborder15'))||(this==document.getElementById('con-box1-caption15')))
			{
				datasum = portfolioindex_url+'/data/data-f.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder16'))||(this==document.getElementById('con-box1-caption16')))
			{
				datasum = portfolioindex_url+'/data/data-f.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder17'))||(this==document.getElementById('con-box1-caption17')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder18'))||(this==document.getElementById('con-box1-caption18')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder19'))||(this==document.getElementById('con-box1-caption19')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents3';
			}else if ((this==document.getElementById('con-box1-imgborder20'))||(this==document.getElementById('con-box1-caption20')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents4';
			}else if ((this==document.getElementById('con-box1-imgborder21'))||(this==document.getElementById('con-box1-caption21')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents5';
			}

			else if ((this==document.getElementById('con-box2-imgborder1'))||(this==document.getElementById('con-box2-caption1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents12';
			}else if ((this==document.getElementById('con-box2-imgborder2'))||(this==document.getElementById('con-box2-caption2')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents13';
			}else if ((this==document.getElementById('con-box2-imgborder3'))||(this==document.getElementById('con-box2-caption3')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents14';
			}else if ((this==document.getElementById('con-box2-imgborder4'))||(this==document.getElementById('con-box2-caption4')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents15';
			}else if ((this==document.getElementById('con-box2-imgborder5'))||(this==document.getElementById('con-box2-caption5')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents16';
			}else if ((this==document.getElementById('con-box2-imgborder6'))||(this==document.getElementById('con-box2-caption6')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents17';
			}else if ((this==document.getElementById('con-box2-imgborder7'))||(this==document.getElementById('con-box2-caption7')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents18';
			}else if ((this==document.getElementById('con-box2-imgborder8'))||(this==document.getElementById('con-box2-caption8')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents19';
			}else if ((this==document.getElementById('con-box2-imgborder9'))||(this==document.getElementById('con-box2-caption9')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents6';
			}

			else if ((this==document.getElementById('con-box3-imgborder1'))||(this==document.getElementById('con-box3-caption1')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents7';
			}else if ((this==document.getElementById('con-box3-imgborder2'))||(this==document.getElementById('con-box3-caption2')))
			{
				datasum = portfolioindex_url+'/data/data-g.html #filter-conbox-contents8';
			}else if ((this==document.getElementById('con-box3-imgborder3'))||(this==document.getElementById('con-box3-caption3')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents21';
			}else if ((this==document.getElementById('con-box3-imgborder4'))||(this==document.getElementById('con-box3-caption4')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents22';
			}else if ((this==document.getElementById('con-box4-imgborder1'))||(this==document.getElementById('con-box4-caption1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents23';
			}else if ((this==document.getElementById('con-box4-imgborder2'))||(this==document.getElementById('con-box4-caption2')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents24';
			}else if ((this==document.getElementById('con-box5-imgborder1'))||(this==document.getElementById('con-box5-caption1')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents25';
			}else if ((this==document.getElementById('con-box5-imgborder2'))||(this==document.getElementById('con-box5-caption2')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents26';
			}else if ((this==document.getElementById('con-box5-imgborder3'))||(this==document.getElementById('con-box5-caption3')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents27';
			}else if ((this==document.getElementById('con-box5-imgborder4'))||(this==document.getElementById('con-box5-caption4')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents28';
			}else if ((this==document.getElementById('con-box5-imgborder5'))||(this==document.getElementById('con-box5-caption5')))
			{
				datasum = portfolioindex_url+'/data/data.html #filter-conbox-contents29';
			}

			else{
				datasum = portfolioindex_url+'/data/data-m.html #filter-conbox-contents4';
			}

			$('.click-all-filter').fadeOut('fast').load(portfolioindex_url+'/cover/cover.html .all-filter-conbox',function(){
				$('.click-all-filter').fadeIn('fast')
				$('.filter-conbox-contentswrap').load(datasum)
			}).fadeIn('fast')
			return false;
		}
		return false;
	})
	$('.click-all-filter').on('mousedown mouseup click fadeOut','.filter-title-closebtn',function(event){
		if (event.type=='mousedown')
		{
			$('.filter-title-closebtn').children('img').css({'width':'18px','height':'18px','left':'-9px','top':'-9px'})
		}
		if (event.type=='mouseup')
		{
			$('.filter-title-closebtn').children('img').css({'width':'20px','height':'20px','left':'-10px','top':'-10px'})
		}
		if (event.type=='click')
		{
			$('#click-all-filter-index').html('')
			$('.click-all-filter').fadeOut('fast')
			$('#click-all-filter-index').html('<div class="filter-loader-loadingbox"><div class="loader-loadingbox-spin"><div class="loadingbox-spin-inaroundf"></div></div></div>')
		}
	})
	$('#contents-button-inside').on('click keydown',function(){

		$('#click-all-filter-landing').css({'z-index':'-10','opacity':'0'})
		$('.move-wrap1').animate({'opacity':'1'},300)
		stop_clock();
	})
	/*------------------------------------------------------------*/
	/*시계*/
	function clock(){
		setTimeout(function(){
			scounout = setInterval(function(){
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth()+1;
				var day = date.getDate();
				var day0;
				var hour = date.getHours();
				var hour0;
				var min = date.getMinutes();
				var min0;
				var second = date.getSeconds();
				var second0;
				var intTime=parseInt(hour,[10]);
				var yearcount = this.value;
				var yearcheck1 = year-yearcount;
				var apmt;

				if(month<10){
					month0='0'+month;
				}else{
					month0=month;
				};
				if(day<10){
					day0='0'+day;
				}else{
					day0=day;
				};
				if(hour>12){
					hour0=hour-12;
					apmt=' PM';
					if(hour0<10){
						hour0='0'+hour0;
					};
				}else{
					hour0=hour;
					apmt=' AM';
					if(hour0<10){
						hour0='0'+hour0;
					};
				};

				if(min<10){
					min0='0'+min;
				}else{
					min0=min;
				};

				if(second<10){
					second0='0'+second;
				}else{
					second0=second;
				};
				var today = year+' / '+month0+' / '+day0;
				var nowC=today+' -'+apmt+' '+hour0+' : '+min0+' : '+second0;
				$('.landing-contents-clock').html(nowC);
			},1000)
		}),999};
	clock();
	function stop_clock(){
		clearInterval(scounout);
	};
	// navigator.geolocation.getCurrentPosition(function(pos) {
	// 	var latitude = pos.coords.latitude;
	// 	var longitude = pos.coords.longitude;
	// 	console.log("현재 위치는 : " + latitude + ", "+ longitude);
	// });
	var ip = "";
	var hostname = "";
	var city = "";
	var region = "";
	var country = "";
	var loc = "";
	var org = "";
	
	$.getJSON("https://ipinfo.io", function(data) {
		ip = data.ip // 접속자 ip
		hostname = data.hostname // 접속자 hostname
		city = data.city // 접속자 도시
		region = data.region // 접속자 지역
		country = data.country // 접속자 국가
		loc = data.loc // 접속 위도, 경도
		org = data.org // ISP (인터넷 서비스 제공사업자)
		$('.filter-landing-contents').append('<div class="cover-city">Your in '+city+'</div>');
	});

	/*-----------------------------------------------------------*/

	/*index mainslide 부분*/
	if($('body').find('#slide-wrap'))
		{
		$('#slide-wrap').append('<div id="slide-container" class="slide-container"></div><ul id="indicator" class="indicator"></ul><div id="prev-btn" class="con-btn"></div><div id="next-btn" class="con-btn"></div>');
		var mswidth;
		var msheight;
		var wrapwidth;
		var dragindex;
		var class_slide;
		var sort_index;
		var app_sort;
		var slideNum=0;
		var jsonLocation = portfolioindex_url+'/data/data.json';
		var sort_slide;
		$.getJSON(jsonLocation, function(data){
			$.each(data, function(I, item){
				slideNum++;
				$('.slide-container').append('<div class="slide" id="slide'+slideNum+'" data-index="'+slideNum+'"><img src='+item.img_url+' alt="'+item.alt_text+'"></div>');
				$('.indicator').append('<li id="bulet'+slideNum+'" class="bulet" data-index="'+slideNum+'">●</li>');
				$('.bulet').css({'color':'#999'});
				$('#bulet1').css({'color':'#000'});
				mswidth = $('.slide').each(Array).length;/*슬라이드 전체 배열의 갯수만큼의 숫자를 추출*/
				for (var i=0;i<mswidth;i++)/*.slide의 배열이 늘어나면 알아서 아이디와 레프트값 연산 및 .indicator의 btn도 배열 갯수만큼 append*/
				{
					var t=i+1;
					sort_slide=i*100;
					$('#slide'+t).css({'left':sort_slide+'%'});
				};
			});
			//--이미지 로드와의 시간차로 height가 느리게 잡히는 것을 강제로 끌어내어 처음부터 height값 강제 적용.
			function lazy_0(){
				if($('#slide-wrap').height()==0||$('#slide-wrap').height()==null){
					$(document).ready(function(){
							msheight = $('.slide').children('img').height();
							$('#slide-wrap').css({'height':msheight});
						}
					);
				};
			};
			if($('#slide-wrap').height()==0||$('#slide-wrap').height()==null){
				setInterval(lazy_0,0);
			};
			//-----
			mswidth = $('.slide').each(Array).length;/*슬라이드 전체 배열의 갯수만큼의 숫자를 추출*/
			s_width = $('.slide').width();
			msheight = $('.slide img').height();
			var sort_all;
			var move;
			var autospeed = 3000;
			var barspeed = autospeed-200;
			var movespeed = 100;
			var boundspeed = 100;
			var framespeed = 1000/60;
			class_slide = document.getElementsByClassName('slide');
			sort_index = $('.slide, .bulet').data('index');
			app_sort = mswidth+1;

			$(window).resize(function(){
				var delay_time;
				if(!delay_time){
					delay_time = setTimeout(function() {
						delay_time=null;
						msheight = $('.slide img').height();
						var mswidth = $('.slide').each(Array).length;/*-슬라이드 전체 배열의 갯수만큼의 숫자를 추출-*/
						wrapwidth = mswidth*100;
						s_width = $('.slide').width();
						$('#slide-wrap').css({'height':msheight});
					},framespeed);
				}
			});

			//console.log(sort_index);
			page();
			controll();
			if(sort_index==1){
				$('#prev-btn').css({'z-index':'-1','opacity':'0'});
				$('#next-btn').css({'z-index':'4','opacity':'1'});
			}
			function nextBtn(){
				// console.log('app_sort = '+app_sort);
				if(sort_index<mswidth){
					sort_index++;
					move=(sort_index-1)*-100;
					$('.slide-container').stop().animate({'left':move+'%','transition-timing-function':'linear'},movespeed);
					$('.bulet').css({'color':'#999'});
					$('#bulet'+sort_index).css({'color':'#000'});
					if(sort_index==mswidth){
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'-1','opacity':'0'});
					}else if(sort_index==1){
						$('#prev-btn').css({'z-index':'-1','opacity':'0'});
						$('#next-btn').css({'z-index':'4','opacity':'1'});
					}else{
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'4','opacity':'1'});
					}
				}else{
					sort_index=1;
					move=(sort_index-1)*-100;
					if(sort_index==mswidth){
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'-1','opacity':'0'});
					}else if(sort_index==1){
						$('#prev-btn').css({'z-index':'-1','opacity':'0'})
						$('#next-btn').css({'z-index':'4','opacity':'1'})
					}else{
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'4','opacity':'1'});
					}
					$('.slide-container').stop().animate({'left':move+'%','transition-timing-function':'linear'},movespeed);
					$('.bulet').css({'color':'#999'});
					$('#bulet'+sort_index).css({'color':'#000'});
				}
				page();
				// inner_controll_s();
				//sort_all = parseInt($('.slide').data('index'));
			};

			function prevBtn(){
				if(sort_index>0&&move<0){
					// console.log('before = '+move+' / sort = '+sort_index);
					sort_index--;
					move=(sort_index-1)*-100;
					if(sort_index==mswidth){
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'-1','opacity':'0'});
					}else if(sort_index==1){
						$('#prev-btn').css({'z-index':'-1','opacity':'0'})
						$('#next-btn').css({'z-index':'4','opacity':'1'})
					}else{
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'4','opacity':'1'});
					}
					$('.slide-container').stop().animate({'left':move+'%','transition-timing-function':'linear'},movespeed);
					$('.bulet').css({'color':'#999'});
					$('#bulet'+sort_index).css({'color':'#000'});
				}else{
					sort_index=mswidth;
					move=(sort_index-1)*-100;
					if(sort_index==mswidth){
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'-1','opacity':'0'});
					}else if(sort_index==1){
						$('#prev-btn').css({'z-index':'-1','opacity':'0'})
						$('#next-btn').css({'z-index':'4','opacity':'1'})
					}else{
						$('#prev-btn').css({'z-index':'4','opacity':'1'});
						$('#next-btn').css({'z-index':'4','opacity':'1'});
					}
					$('.slide-container').stop().animate({'left':move+'%','transition-timing-function':'linear'},movespeed);
					$('.bulet').css({'color':'#999'});
					$('#bulet'+sort_index).css({'color':'#000'});
				}
				page();
				// inner_controll_s();
			};

			function stop_next(){
				clearTimeout(nextBtn);
			}
			function stop_prev(){
				clearTimeout(prevBtn);
			}

			$('#prev-btn').on('mouseover mouseout click',function(){
				// event.preventDefault();
				// event.stopPropagation();
				stop_s();
				stop_bar();
				if (event.type=='mouseover')
				{
					// event.preventDefault();
					// event.stopPropagation();
					stop_s();
					stop_bar();
					// inner_controll_p();
				}else if (event.type=='mouseout')
				{
					start_s();
					startbar();
					// inner_controll_s();
				}
				else if (event.type=='click')
				{
					// event.preventDefault();
					// event.stopPropagation();
					setTimeout(stop_bar,0);
					setTimeout(stop_s,0);
					setTimeout(stop_next,0);
					prevBtn();
					setTimeout(startbar,0);
					setTimeout(start_s,0);
				}
			});

			$('#next-btn').on('mouseover mouseout click',function(){
				// event.preventDefault();
				// event.stopPropagation();
				stop_s();
				stop_bar();
				if (event.type=='mouseover')
				{
					// event.preventDefault();
					// event.stopPropagation();
					stop_s();
					stop_bar();
					// inner_controll_p();
				}else if (event.type=='mouseout')
				{
					start_s();
					startbar();
					// inner_controll_s();
				}
				else if (event.type=='click')
				{
					// event.preventDefault();
					// event.stopPropagation();
					setTimeout(stop_bar,0);
					setTimeout(stop_s,0);
					setTimeout(stop_prev,0);
					nextBtn();
					setTimeout(startbar,0);
					setTimeout(start_s,0);
				}
			});

			$('.slide').on('touchstart touchmove touchend touchcancle click mouseover mouseleave',function(event){
				cal_width = s_width*0.3;
				cal_height = msheight*0.5;
				var dragmove;
				var slideNum;
				var updown;
				var tvalue;
				var yvalue;

				/*swipe 이벤트 시작*/
				if (event.type=='touchstart')
				{
					event.preventDefault();
					event.stopPropagation();
					tstart=event.originalEvent.touches[0].pageX;
					ystart=event.originalEvent.touches[0].pageY;
					// tstart=event.originalEvent.targetTouches[0].pageX;
					// ystart=event.originalEvent.targetTouches[0].pageY;
					stop_s();
					stop_bar();
				}
				else if (event.type=='touchmove'){
					event.preventDefault();
					event.stopPropagation();
					tmove=event.originalEvent.changedTouches[0].pageX;
					ymove=event.originalEvent.changedTouches[0].pageY;
					tvalue = tstart-tmove;
					yvalue = ystart-ymove;

					stop_s();
					stop_bar();

					slideNum =$('.slide').css('width').replace('px', '');
					mswidth = $('.slide').each(Array).length;
					sort_index = $(this).index();
					sort_floor=Math.floor(sort_index);
					app_left = (app_sort-1)*100;
					app_right = -100;
					move=(sort_index)*-100;
					drag_return=(sort_floor)*-100;
					dragmove = (tvalue/slideNum)*-100;
					updown=move+dragmove;
					if(yvalue>cal_height){
						$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
					}else if(yvalue<cal_height){
						if((yvalue*-1)>cal_height){
							$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
						}
					}
					$('.slide-container').css({'left':updown+'%'});
				}
				else if (event.type=='touchend')
				{
					event.preventDefault();
					event.stopPropagation();
					tmove=event.originalEvent.changedTouches[0].pageX;
					ymove=event.originalEvent.changedTouches[0].pageY;
					tvalue = tstart-tmove;
					yvalue = ystart-ymove;
					slideNum = $('.slide').css('width').replace('px', '');
					mswidth = $('.slide').each(Array).length;
					sort_index = $(this).index();
					sort_floor=Math.floor(sort_index);
					move=(sort_index)*-100;
					drag_return=(sort_floor)*-100;
					dragmove = (tvalue/slideNum)*-100;
					updown=move+dragmove;
					// console.log(tvalue-cal_width);
					mswidth = $('.slide').each(Array).length;
					stop_s();
					stop_bar();
					nextBtn();
					if (tvalue>cal_width){
						if(sort_index==mswidth){
							if(updown!==drag_return){
								$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
							}
						}else{
							// $('#next-btn').stop().click();
							nextBtn();
						}
					}else if(tvalue<-cal_width){
						if(sort_index==1){
							if(updown!==drag_return){
								$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
							}
						}else{
							stop_next();
							// $('#prev-btn').stop().click();
							prevBtn();
						}
					}
					else if(tvalue<cal_width&&tvalue>0){
						if(updown!==drag_return){
							// console.log('app_sort = '+app_sort);
							// console.log('dragmove = '+dragmove+' / move = '+move+' / drag_return'+drag_return);
							$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
						}
					}else if(tvalue>-cal_width&&tvalue<0){
						if(updown!==drag_return){
							$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
						}
					}else if(tvalue==0){
						if(yvalue==0){
							click_move();
						}else{
							if(yvalue>cal_height){
								$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
							}else if(yvalue<cal_height){
								if((yvalue*-1)>cal_height){
									$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
								}
							}
						}
					}
					start_s();
					startbar();
				}
				else if (event.type=='touchcancle')
				{
					event.preventDefault();
					event.stopPropagation();
					tmove=event.originalEvent.changedTouches[0].pageX;
					ymove=event.originalEvent.changedTouches[0].pageY;
					tvalue = tstart-tmove;
					yvalue = ystart-ymove;
					slideNum = $('.slide').css('width').replace('px', '');
					mswidth = $('.slide').each(Array).length;
					sort_index = $(this).index();
					sort_floor=Math.floor(sort_index);
					move=(sort_index)*-100;
					drag_return=(sort_floor)*-100;
					dragmove = (tvalue/slideNum)*-100;
					updown=move+dragmove;
					// console.log(tvalue-cal_width);
					mswidth = $('.slide').each(Array).length;
					stop_s();
					stop_bar();
					nextBtn();
					if (tvalue>cal_width){
						if(sort_index==mswidth){
							if(updown!==drag_return){
								$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
							}
						}else{
							// $('#next-btn').stop().click();
							nextBtn();
						}
					}else if(tvalue<-cal_width){
						if(sort_index==1){
							if(updown!==drag_return){
								$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
							}
						}else{
							stop_next();
							// $('#prev-btn').stop().click();
							prevBtn();
						}
					}
					else if(tvalue<cal_width&&tvalue>0){
						if(updown!==drag_return){
							// console.log('app_sort = '+app_sort);
							// console.log('dragmove = '+dragmove+' / move = '+move+' / drag_return'+drag_return);
							$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
						}
					}else if(tvalue>-cal_width&&tvalue<0){
						if(updown!==drag_return){
							$('.slide-container').stop().animate({'left':drag_return+'%'},boundspeed);
						}
					}else if(tvalue==0){
						if(yvalue==0){
							click_move();
						}else{
							if(yvalue>cal_height){
								$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
							}else if(yvalue<cal_height){
								if((yvalue*-1)>cal_height){
									$('body, html').stop().animate({ scrollTop: $("body").offset().top+yvalue },300);
								}
							}
						}
					}
					start_s();
					startbar();
				}
				else if (event.type=='mouseover')
				{
					event.preventDefault();
					event.stopPropagation();
					stop_s();
					stop_bar();
					// inner_controll_p();
				}
				else if (event.type=='mouseleave')
				{
					start_s();
					startbar();
					// inner_controll_s();
				}
				else if(event.type=='click'){
					event.preventDefault();
					event.stopPropagation();
					setTimeout(stop_s,0);
					setTimeout(stop_bar,0);
					click_move();
					start_s();
					startbar();
				};
				return false;
			});

			$('.bulet').on('click mouseover mouseleave',function(){
				if (event.type=='click')
				{
					setTimeout(stop_bar,0);
					setTimeout(stop_s,0);
					sort_index = $(this).data('index');
						move=(sort_index-1)*-100;
						if(sort_index==mswidth){
							$('#prev-btn').css({'z-index':'4','opacity':'1'});
							$('#next-btn').css({'z-index':'-1','opacity':'0'});
						}else if(sort_index==1){
							$('#prev-btn').css({'z-index':'-1','opacity':'0'})
							$('#next-btn').css({'z-index':'4','opacity':'1'})
						}else{
							$('#prev-btn').css({'z-index':'4','opacity':'1'});
							$('#next-btn').css({'z-index':'4','opacity':'1'});
						}
						$('.bulet').css({'color':'#999'});
						$('#bulet'+sort_index).css({'color':'#000'});
						$('.slide-container').stop().animate({'left':move+'%'},movespeed);
						page();
						// inner_controll_s();
					setTimeout(startbar,0);
					setTimeout(start_s,0);
				}
				if (event.type=='mouseover')
				{
					stop_s();
					stop_bar();
					// inner_controll_p();
				}else if (event.type=='mouseleave')
				{
					start_s();
					startbar();
					// inner_controll_s();
				}
			});

			function lazy_0(){
				if($('#slide-wrap').height()==0){
					$(document).ready(function(){
							msheight = $('.slide').children('img').height();
							$('#slide-wrap').css({'height':msheight});
							// console.log(msheight+' --')
						}
					);
				};
			};
			function startbar(){
				setTimeout(lazy_0,0);
				if($('#slide-wrap').find('.controll').length<1){
					$('#slide-wrap').append('<span class="timebar" style="display:inline-block;position:absolute;top:0px;left:0px;width:0;height:100%;background:rgba(0,0,0,1);z-index:-1"></span>')
					$('.timebar').stop().animate({'width':'100%'},barspeed);
					bar_on = setInterval(function(){
							$('.timebar').remove();
							$('#slide-wrap').append('<span class="timebar" style="display:inline-block;position:absolute;top:0px;left:0px;width:0;height:100%;background:rgba(0,0,0,1);z-index:-1"></span>')
							$('.timebar').stop().animate({'width':'100%'},barspeed);
					},autospeed);
				}else{
					if($('.controll input[type=checkbox]').prop('checked')==false){
						$('#slide-wrap').append('<span class="timebar" style="display:inline-block;position:absolute;top:0px;left:0px;width:0;height:100%;background:rgba(0,0,0,1);z-index:-1"></span>')
						$('.timebar').stop().animate({'width':'100%'},barspeed);
						bar_on = setInterval(function(){
								$('.timebar').remove();
								$('#slide-wrap').append('<span class="timebar" style="display:inline-block;position:absolute;top:0px;left:0px;width:0;height:100%;background:rgba(0,0,0,1);z-index:-1"></span>')
								$('.timebar').stop().animate({'width':'100%'},barspeed);
						},autospeed);
					}
				}
			};
			function page(){
				if($('#slide-wrap').find('.pagecount').length<1){
					$('#slide-wrap').append('<div class="pagecount" style="position:absolute;top:0;right:0;width:60px;background:rgba(0,0,0,0.7);color:#fff;z-index:3;"><span style="display:block;width:100%;text-align:center;">'+sort_index+' / '+slideNum+'</span></div>')
				}
				else{
					$('.pagecount').children('span').text(sort_index+' / '+slideNum);
				}
			};
			function click_snd(){
				var clickSnd = new Audio();
				clickSnd.src = "media/t_btn_click.mp3";
				clickSnd.load();
				clickSnd.play();
			};
			function controll(){
				var controll_right;
				if($('#slide-wrap').find('.pagecount')){
					controll_right=60;
				}else{
					controll_right=0;
				}
				if($('#slide-wrap').find('.controll').length<1){
					$('#slide-wrap').append('<div class="controll" style="position:absolute;top:0;right:'+controll_right+'px;width:60px;background:rgba(0,0,0,0.7);color:#fff;z-index:4;">\
					<input type="checkbox" id="controll_btn" name="controll_btn"><label for="controll_btn"><span class="btn_word" style="display:block;width:100%;text-align:center;cursor:pointer;">Stop</span></label></div>')
				}
				$('.controll input[type=checkbox]').click(function(){
					if ($(this).prop('checked')==true)
					{
						$('.controll label').children('span').text('Play');
						stop_s();
						stop_bar();
					}else{
						$('.controll label').children('span').text('Stop');
						start_s();
						startbar();
					}
					click_snd();
				});
			};
			//-----------------현재 비 활성화 중으로 현재의 auto slide 상태를 바로 확인하고 싶을 때는 start_s()와 startbar()안의 if문을 일반 실행 형태로 바꾸고 inner_controll_s()/inner_controll_p() 활성화 할 것.
			function inner_controll_s(){
				$('.controll input[type=checkbox]').prop('checked',false);
				$('.controll label').children('span').text('Stop');
			};
			function inner_controll_p(){
				$('.controll input[type=checkbox]').prop('checked',true);
				$('.controll label').children('span').text('Play');
			};
			//----------------------------------------------------------------------------------------------
			function click_move(){
				var topminus = 0;
				if ($('#article1-nav1-topmenu1').css('display')=='block')
				{
					var topminus = 50;
				}else{
					var topminus = 100;
				}
				if(sort_index==1){
					$('body, html').stop().animate({ scrollTop: $("#article-main-scroll1").offset().top-topminus },300);
				}else if(sort_index==2){
					$('body, html').stop().animate({ scrollTop: $("#article-main-scroll2").offset().top-topminus },300);
				}else if(sort_index==3){
					$('body, html').stop().animate({ scrollTop: $("#article-main-scroll3").offset().top-topminus },300);
				}else if(sort_index==4){
					$('body, html').stop().animate({ scrollTop: $("#article-main-scroll4").offset().top-topminus },300);
				}else if(sort_index==5){
					$('body, html').stop().animate({ scrollTop: $("#article-main-scroll5").offset().top-topminus },300);
				}
			};
			function start_s(){
				setTimeout(lazy_0,0);
				stop_next();
				if($('#slide-wrap').find('.controll').length<1){
					slide_on = setInterval(function(){
						nextBtn();
					},autospeed);
				}else{
					if($('.controll input[type=checkbox]').prop('checked')==false){
						slide_on = setInterval(function(){
							nextBtn();
						},autospeed);
					}
				}
			};
			start_s();
			startbar();
			function stop_s(){
				clearInterval(slide_on);
			};
			function stop_bar(){
				$('.timebar').remove();
				clearInterval(bar_on);
			};
		});
	};

	/*------------------------------------------------------------*/
//=============램덤 방울 particle============
	function bubble_background1(){
		var b_canbus=document.querySelector('.main-scrollall-backb');
		//setInterval(function(){/*처음에 딜레이를 주고 싶으면 이것도 활성화*/
		for (var i=1; i<5; ++i)
		{
			(function(i){
				setTimeout(function(){
					setInterval(function(){/*기본적인 딜레이 조절.처음 부부과 같이 활성화시 처음 시간+기본딜레이 시간 후에 시작 됨.*/
						var pb=Math.floor(Math.random()*60)+15;
						var bl=Math.floor(Math.random()*92)+4;
						var bt=Math.floor(Math.random()*5)+10;
						var hbt=bt/2;
						//var btm=hbt*200;
						var bubble='<span class="bubble" id="bubble'+i+'" style="width:'+pb+'px;height:'+pb+'px;left:'+bl+'%;border:2px solid rgba(0,0,0,0.15);animation:bubble-act '+hbt+'s linear infinite;"></span>';
						var bo=$('#bubble'+i);
						b_canbus.insertAdjacentHTML('beforeend',bubble);
						if (bo)
						{
							bo.remove(b_canbus.bo);
						};
					},2600);
				},i*300);
			})(i);
		}
		//},2600);
	};
	//===es6버전 original version=====================
	// function bubble_background2(){
	// 	const b_canbus=document.querySelector('.main-scrollall-backb');
	// 	const circleArray = [];
	// 	let loopCancel;
	// 	const canvas = document.createElement('canvas');
	// 	const context = canvas.getContext('2d');
	// 	b_canbus.appendChild(canvas);

	// 	function toRadian(d) {
	// 		return d * Math.PI / 180;
	// 	}

	// 	class Circle {
	// 		constructor(info) {
	// 			this.index = info.index;
	// 			this.x = info.x;
	// 			this.y = info.y;
	// 			this.speed = info.speed;
	// 			this.radius = info.radius;
	// 			this.startAngle = info.startAngle;
	// 			this.endAngle = info.endAngle;
	// 			this.clockwise = info.clockwise;
	// 			this.draw();
	// 		}

	// 		draw() {
	// 			context.beginPath();
	// 			context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
	// 			context.fillStyle = 'rgba(255, 255, 255, 0)';
	// 			context.fill();
	// 			context.strokeStyle = 'rgba(0, 0, 0, 0.15)';
	// 			context.lineWidth = '2';
	// 			context.stroke();
	// 			context.closePath();
	// 			context.fillStyle = '#fff';
	// 			//context.font = '30px bold sans-serif';
	// 			context.textAlign = "center";
	// 			//context.fillText(this.index, this.x, this.y+10);
	// 		}
	// 	}

	// 	function setLayout() {
	// 		canvas.width = window.innerWidth;
	// 		canvas.height = window.innerHeight;
	// 	}

	// 	function init() {
	// 		setLayout();
	// 		let x;
	// 		let y;
	// 		let speed;
	// 		let circle;

	// 		for (let i = 0; i < 5; i++) {
	// 			x = (Math.random() * window.innerWidth * 0.6)+(Math.random() * window.innerWidth * 0.4);
	// 			y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
	// 			//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.
	// 			speed = Math.random()*3 + 2;
	// 			circle = new Circle({
	// 				index: i,
	// 				x: x,
	// 				y: y,
	// 				speed: speed,
	// 				radius : Math.floor(Math.random()*30)+10,
	// 				startAngle : 360,
	// 				endAngle : 350,
	// 				clockwise : false
	// 			});
	// 			circleArray.push(circle);
	// 		}

	// 		render();
	// 	}


	// 	function render() {
	// 		context.clearRect(0, 0, canvas.width, canvas.height);
	// 		let circle;
	// 		for (let i = 0; i < circleArray.length; i++) {
	// 			circle = circleArray[i];
	// 			circle.y -= circle.speed;
	// 			if (circle.y < -circle.radius) {
	// 				circle.y = canvas.height;
	// 				circle.x = (Math.random() * window.innerWidth * 0.6)+(Math.random() * window.innerWidth * 0.4);
	// 				circle.radius = Math.floor(Math.random()*60)+15;
	// 			}
	// 			circle.draw();
	// 		}
	// 		loopCancel=requestAnimationFrame(render);
	// 	}
	// 	init();
	// 	window.addEventListener('resize', setLayout);
	// }
	//==========================================================================

	function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }
	function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function bubble_background2() {
		var b_canbus = document.querySelector('.main-scrollall-backb');
		var circleArray = [];
		var loopCancel;
		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');
		b_canbus.appendChild(canvas);
		function toRadian(d) {
			return d * Math.PI / 180;
		}

		var Circle =
		/*#__PURE__*/
		function () {
			function Circle(info) {
			_classCallCheck(this, Circle);

			this.index = info.index;
			this.x = info.x;
			this.y = info.y;
			this.speed = info.speed;
			this.radius = info.radius;
			this.startAngle = info.startAngle;
			this.endAngle = info.endAngle;
			this.clockwise = info.clockwise;
			this.draw();
			}

			_createClass(Circle, [{
			key: "draw",
			value: function draw() {
				context.beginPath();
				context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, toRadian(360), this.clockwise);
				context.fillStyle = 'rgba(255, 255, 255, 0)';
				context.fill();
				context.strokeStyle = 'rgba(0, 0, 0, 0.15)';
				context.lineWidth = '2';
				context.stroke();
				context.closePath();
				context.fillStyle = '#fff';
				//context.font = '30px bold sans-serif';
				context.textAlign = "center";
				//context.fillText(this.index, this.x, this.y+10);
				}
			}]);

		return Circle;
	}();

		function setLayout() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight*1.2;
		}

		function init() {
			setLayout();
			var x;
			var y;
			var speed;
			var circle;

			for (var i = 0; i < 5; i++) {
			x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
			y = Math.random() * window.innerHeight * 0.9; //높이 random생성.
			//y = window.innerHeight+100; //처음부터 맨 아래에서 생성하고 싶은 경우 사용.

			speed = Math.random() * 3 + 2;
			circle = new Circle({
				index: i,
				x: x,
				y: y,
				speed: speed,
				radius: Math.floor(Math.random() * 30) + 20,
				startAngle: 360,
				endAngle: 350,
				clockwise: false
			});
			circleArray.push(circle);
			}

			render();
		}

		function render() {
			context.clearRect(0, 0, canvas.width, canvas.height);
			var circle;

			for (var i = 0; i < circleArray.length; i++) {
			circle = circleArray[i];
			circle.y -= circle.speed;

			if (circle.y < -circle.radius) {
				circle.y = canvas.height;
				circle.x = Math.random() * window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.2;
				circle.radius = Math.floor(Math.random() * 30) + 20;
			}

			circle.draw();
			}

			loopCancel = requestAnimationFrame(render);
		}

		init();
		window.addEventListener('resize', setLayout);
	};
//==========================================================
	/*------------------------formmail-----------------------------*/


	/*-------------------------------------------------------------*/
	return false;
});
