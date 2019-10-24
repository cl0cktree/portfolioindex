$(function(){
	/*loader 제어*/

	$(document).ready(function(){
		$('.body-filter-preloader').load('https://cl0cktree.github.io/portfolioindex/cover/cover.html .filter-preloader-loadingbox',function(){
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
		$('.body-section-all').load('https://cl0cktree.github.io/portfolioindex/cover/cover.html .section-num1-article',function(){
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
			if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub1.html')
			{
				$('#slide-wrap').css({'display':'none'})
				$('#slide-wrap-i').css({'display':'block'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
				$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub2.html')
			{
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub3.html')
			{
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub4.html')
			{
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub5.html')
			{
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
			}else if ((location.href=='https://cl0cktree.github.io/portfolioindex/index.html')||(location.href=='https://cl0cktree.github.io/portfolioindex/')||(location.href=='https://cl0cktree.github.io/portfolioindex'))
			{
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('#landing-contents-title, #landing-contents-buttonwrap').stop().animate({'text-indent':'0'},500)
			}
		})
		$('footer').load('https://cl0cktree.github.io/portfolioindex/cover/cover.html .body-footer-contaner',function(){
			if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub1.html')
			{
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li1').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'none'})
				$('#slide-wrap-i').css({'display':'block'})
			}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub2.html')
			{
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li2').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
			}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub3.html')
			{
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li3').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
			}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub4.html')
			{
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li4').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
			}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub5.html')
			{
				$('.ul-li-img1').css({'border':'0px solid #999'})
				$('#list-ul-li5').css({'border':'3px solid #999'})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
			}else if (location.href=='https://cl0cktree.github.io/portfolioindex/index.html')
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
	$('.body-all-header').on('mouseover mouseleave',function(event){
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
				$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/index.html .main-welcolme-summon',function(){
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
				})
				$('#slide-wrap').css({'display':'block'})
				$('#slide-wrap-i').css({'display':'none'})
				$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/index.html .article-main-scrollall')
				$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/index.html .index-btn-wrap')

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
				history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/index.html')

			}else{
				location.href='https://cl0cktree.github.io/portfolioindex/index.html'
			}

		}else{
			$('.body-filter-preloader').show();
			$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/index.html .main-welcolme-summon',function(){
				$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
				$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
				$('.ul-li-img1').css({'border':'0px solid #999'})
			})
			$('#slide-wrap').css({'display':'block'})
			$('#slide-wrap-i').css({'display':'none'})
			$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/index.html .article-main-scrollall')
			$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/index.html .index-btn-wrap')

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
			history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/index.html')

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
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li1').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'none'})
						$('#slide-wrap-i').css({'display':'block'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .index-btn-wrap')

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
						history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub1.html')

					}else{
						location.href='https://cl0cktree.github.io/portfolioindex/sub/sub1.html'

					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li1').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'none'})
					$('#slide-wrap-i').css({'display':'block'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .index-btn-wrap')

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
					history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub1.html')

				}

			}else if (this==document.getElementById('topmenu1-list-span2'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li2').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .index-btn-wrap')

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
						history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub2.html')

					}else{
						location.href='https://cl0cktree.github.io/portfolioindex/sub/sub2.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li2').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .index-btn-wrap')

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
					history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub2.html')

				}

			}else if (this==document.getElementById('topmenu1-list-span3'))
			{

				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li3').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .index-btn-wrap')

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
						history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub3.html')

					}else{
						location.href='https://cl0cktree.github.io/portfolioindex/sub/sub3.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li3').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .index-btn-wrap')

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
					history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub3.html')

				}

			}else if (this==document.getElementById('topmenu1-list-span4'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li4').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .index-btn-wrap')

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
						history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub4.html')

					}else{
						location.href='https://cl0cktree.github.io/portfolioindex/sub/sub4.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li4').css({'border':'3px solid #999'})
					})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .index-btn-wrap')

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
					history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub4.html')

				}

			}else if (this==document.getElementById('topmenu1-list-span5'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li5').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .index-btn-wrap')

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
						history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub5.html')

					}else{
						location.href='https://cl0cktree.github.io/portfolioindex/sub/sub5.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li5').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .index-btn-wrap')

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
					history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub5.html')

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
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li1').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'none'})
						$('#slide-wrap-i').css({'display':'block'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .index-btn-wrap')

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
						history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub1.html')

					}else{
						location.href='https://cl0cktree.github.io/portfolioindex/sub/sub1.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li1').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'none'})
					$('#slide-wrap-i').css({'display':'block'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .index-btn-wrap')

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
					history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub1.html')

				}


			}else if (this==document.getElementById('list-ul-li2'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li2').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .index-btn-wrap')

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
						history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub2.html')

					}else{
						location.href='https://cl0cktree.github.io/portfolioindex/sub/sub2.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li2').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .index-btn-wrap')

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
					history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub2.html')

				}

			}else if (this==document.getElementById('list-ul-li3'))
			{

				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li3').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .index-btn-wrap')

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
						history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub3.html')

					}else{
						location.href='https://cl0cktree.github.io/portfolioindex/sub/sub3.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li3').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .index-btn-wrap')

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
					history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub3.html')

				}

			}else if (this==document.getElementById('list-ul-li4'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li4').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .index-btn-wrap')

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
						history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub4.html')

					}else{
						location.href='https://cl0cktree.github.io/portfolioindex/sub/sub4.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li4').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .index-btn-wrap')

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
					history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub4.html')

				}

			}else if (this==document.getElementById('list-ul-li5'))
			{
				if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) || (agent.search( "edge/")>-1))
				{
					if ((navigator.userAgent.search( "edge/")>-1)||(navigator.userAgent.search( "trident" ) > -1)||(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1))
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .main-welcolme-summon',function(){
							$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li5').css({'border':'3px solid #999'})
						})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .index-btn-wrap')

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
						history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub5.html')

					}else{
						location.href='https://cl0cktree.github.io/portfolioindex/sub/sub5.html'
					}

				}else{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .main-welcolme-summon',function(){
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
							$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
							$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
							$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
							$('.ul-li-img1').css({'border':'0px solid #999'})
							$('#list-ul-li5').css({'border':'3px solid #999'})
					})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .index-btn-wrap')

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
					history.pushState(null,null,'https://cl0cktree.github.io/portfolioindex/sub/sub5.html')

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

					if (location.href=='https://cl0cktree.github.io/portfolioindex/index.html')
					{
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/index.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/index.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/index.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}else if(location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub1.html'){
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li1').css({'border':'3px solid #999'})
						$('#slide-wrap').css({'display':'none'})
						$('#slide-wrap-i').css({'display':'block'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}else if(location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub2.html'){
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li2').css({'border':'3px solid #999'})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}else if(location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub3.html'){
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li3').css({'border':'3px solid #999'})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}else if(location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub4.html'){
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li4').css({'border':'3px solid #999'})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}else if(location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub5.html'){
						$('.body-filter-preloader').show();
						$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .main-welcolme-summon')
						$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
						$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
						$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
						$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
						$('.ul-li-img1').css({'border':'0px solid #999'})
						$('#list-ul-li5').css({'border':'3px solid #999'})
						$('#slide-wrap').css({'display':'block'})
						$('#slide-wrap-i').css({'display':'none'})
						$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .article-main-scrollall')
						$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .index-btn-wrap')
						$('.body-filter-preloader').hide();
					}
				})
			}
		}else{
			$(window).on('popstate',function(event){

				if (location.href=='https://cl0cktree.github.io/portfolioindex/index.html')
				{
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/index.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #fff'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/index.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/index.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}else if(location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub1.html'){
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
					$('#topmenu1-list-span1').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span1').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#list-ul-li1').css({'border':'3px solid #999'})
					$('#slide-wrap').css({'display':'none'})
					$('#slide-wrap-i').css({'display':'block'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub1.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}else if(location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub2.html'){
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
					$('#topmenu1-list-span2').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span2').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#list-ul-li2').css({'border':'3px solid #999'})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub2.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}else if(location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub3.html'){
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
					$('#topmenu1-list-span3').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span3').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#list-ul-li3').css({'border':'3px solid #999'})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub3.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}else if(location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub4.html'){
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
					$('#topmenu1-list-span4').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span4').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#list-ul-li4').css({'border':'3px solid #999'})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub4.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}else if(location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub5.html'){
					$('.body-filter-preloader').show();
					$('.article-main-welcolme').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .main-welcolme-summon')
					$('.topmenu1-list-span').css({'border-bottom':'0px solid #bbb'})
					$('#topmenu1-list-span5').css({'border-bottom':'3px solid #bbb'})
					$('.topmenu1-list-span').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'0px'})
					$('#topmenu1-list-span5').children('.list-span-leftborder, .list-span-rightborder').css({'bottom':'-3px','border-bottom':'3px solid #bbb'})
					$('.ul-li-img1').css({'border':'0px solid #999'})
					$('#list-ul-li5').css({'border':'3px solid #999'})
					$('#slide-wrap').css({'display':'block'})
					$('#slide-wrap-i').css({'display':'none'})
					$('.article-summon-wrap').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .article-main-scrollall')
					$('.scr-index-box').load('https://cl0cktree.github.io/portfolioindex/sub/sub5.html .index-btn-wrap')
					$('.body-filter-preloader').hide();
				}

			})
		}
	/*-------------------------------------------------------------------*/

	/*topmenu 및 top-btn scroll*/
	var scrollindex = $('.article-main-scrollall').each(Array).length;
	$(window).scroll(function(){
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
				$('#phon-icon img').attr('src','https://cl0cktree.github.io/portfolioindex/images/ｐ_icon-1.png')
				$('#menu-icon img').attr('src','https://cl0cktree.github.io/portfolioindex/images/m_icon-1.png')

				$('#section1-article1-nav1').mouseover(function(){
					$('#section1-article1-nav1').stop().css({'background':'#fff'})
					$('.nav1-topmenu1-list a').css({'color':'#333'})
					$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
					$('#phon-icon img').attr('src','https://cl0cktree.github.io/portfolioindex/images/ｐ_icon.png')
					$('#menu-icon img').attr('src','https://cl0cktree.github.io/portfolioindex/images/m_icon.png')
				})
				$('#section1-article1-nav1').mouseleave(function(){
					$('#section1-article1-nav1').stop().css({'background':'rgba(0,0,0,0.5)'})
					$('.nav1-topmenu1-list a').css({'color':'#fff'})
					$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #fff')
					$('#phon-icon img').attr('src','https://cl0cktree.github.io/portfolioindex/images/ｐ_icon-1.png')
					$('#menu-icon img').attr('src','https://cl0cktree.github.io/portfolioindex/images/m_icon-1.png')

				})

			}else{
				$('#section1-article1-nav1').stop().css({'background':'rgba(255,255,255,1)'})
				$('.nav1-topmenu1-list a').css({'color':'#333'})
				$('.list-span-leftborder,.list-span-rightborder').css('border-bottom','3px solid #4e3b29')
				$('.top-btn').css({'opacity':'0','z-index':'-1'})
				$('.index-btn-wrap').css({'z-index':'-2','opacity':'0','height':'0px'})
				$('#phon-icon img').attr('src','https://cl0cktree.github.io/portfolioindex/images/ｐ_icon.png')
				$('#menu-icon img').attr('src','https://cl0cktree.github.io/portfolioindex/images/m_icon.png')

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
		if ((location.href=='https://cl0cktree.github.io/portfolioindex/index.html')||(location.href=='https://cl0cktree.github.io/portfolioindex/')||(location.href=='https://cl0cktree.github.io/portfolioindex'))
		{
			scpar = 500;
		}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub1.html')
		{
			scpar = 350;
		}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub2.html')
		{
			scpar = 350;
		}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub3.html')
		{
			scpar = 50;
		}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub4.html')
		{
			scpar = 0;
		}else if (location.href=='https://cl0cktree.github.io/portfolioindex/sub/sub5.html')
		{
			scpar = 200;
		}

		var mw1 = $('.move-wrap1').height();
		var mw2 = $('.move-wrap2').height();
		var mw3 = $('.move-wrap3').height();

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
					}
				}
			}
		}
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
	})
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
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder2'))||(this==document.getElementById('con-box1-caption2')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder3'))||(this==document.getElementById('con-box1-caption3')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents3';
			}else if ((this==document.getElementById('con-box1-imgborder4'))||(this==document.getElementById('con-box1-caption4')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents4';
			}else if ((this==document.getElementById('con-box1-imgborder5'))||(this==document.getElementById('con-box1-caption5')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents5';
			}else if ((this==document.getElementById('con-box1-imgborder6'))||(this==document.getElementById('con-box1-caption6')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents6';
			}else if ((this==document.getElementById('con-box1-imgborder7'))||(this==document.getElementById('con-box1-caption7')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents7';
			}else if ((this==document.getElementById('con-box1-imgborder8'))||(this==document.getElementById('con-box1-caption8')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents8';
			}else if ((this==document.getElementById('con-box1-imgborder9'))||(this==document.getElementById('con-box1-caption9')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents9';
			}else if ((this==document.getElementById('con-box1-imgborder10'))||(this==document.getElementById('con-box1-caption10')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents10';
			}else if ((this==document.getElementById('con-box1-imgborder11'))||(this==document.getElementById('con-box1-caption11')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents11';
			}else if ((this==document.getElementById('con-box1-imgborder12'))||(this==document.getElementById('con-box1-caption12')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-m.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder13'))||(this==document.getElementById('con-box1-caption13')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-m.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder14'))||(this==document.getElementById('con-box1-caption14')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-m.html #filter-conbox-contents3';
			}else if ((this==document.getElementById('con-box1-imgborder15'))||(this==document.getElementById('con-box1-caption15')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-f.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder16'))||(this==document.getElementById('con-box1-caption16')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-f.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder17'))||(this==document.getElementById('con-box1-caption17')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-g.html #filter-conbox-contents1';
			}else if ((this==document.getElementById('con-box1-imgborder18'))||(this==document.getElementById('con-box1-caption18')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-g.html #filter-conbox-contents2';
			}else if ((this==document.getElementById('con-box1-imgborder19'))||(this==document.getElementById('con-box1-caption19')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-g.html #filter-conbox-contents3';
			}else if ((this==document.getElementById('con-box1-imgborder20'))||(this==document.getElementById('con-box1-caption20')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-g.html #filter-conbox-contents4';
			}else if ((this==document.getElementById('con-box1-imgborder21'))||(this==document.getElementById('con-box1-caption21')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-g.html #filter-conbox-contents5';
			}

			else if ((this==document.getElementById('con-box2-imgborder1'))||(this==document.getElementById('con-box2-caption1')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents12';
			}else if ((this==document.getElementById('con-box2-imgborder2'))||(this==document.getElementById('con-box2-caption2')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents13';
			}else if ((this==document.getElementById('con-box2-imgborder3'))||(this==document.getElementById('con-box2-caption3')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents14';
			}else if ((this==document.getElementById('con-box2-imgborder4'))||(this==document.getElementById('con-box2-caption4')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents15';
			}else if ((this==document.getElementById('con-box2-imgborder5'))||(this==document.getElementById('con-box2-caption5')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents16';
			}else if ((this==document.getElementById('con-box2-imgborder6'))||(this==document.getElementById('con-box2-caption6')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents17';
			}else if ((this==document.getElementById('con-box2-imgborder7'))||(this==document.getElementById('con-box2-caption7')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents18';
			}else if ((this==document.getElementById('con-box2-imgborder8'))||(this==document.getElementById('con-box2-caption8')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents19';
			}else if ((this==document.getElementById('con-box2-imgborder9'))||(this==document.getElementById('con-box2-caption9')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-g.html #filter-conbox-contents6';
			}

			else if ((this==document.getElementById('con-box3-imgborder1'))||(this==document.getElementById('con-box3-caption1')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-g.html #filter-conbox-contents7';
			}else if ((this==document.getElementById('con-box3-imgborder2'))||(this==document.getElementById('con-box3-caption2')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-g.html #filter-conbox-contents8';
			}else if ((this==document.getElementById('con-box3-imgborder3'))||(this==document.getElementById('con-box3-caption3')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents21';
			}else if ((this==document.getElementById('con-box3-imgborder4'))||(this==document.getElementById('con-box3-caption4')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents22';
			}else if ((this==document.getElementById('con-box4-imgborder1'))||(this==document.getElementById('con-box4-caption1')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents23';
			}else if ((this==document.getElementById('con-box4-imgborder2'))||(this==document.getElementById('con-box4-caption2')))
			{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data.html #filter-conbox-contents24';
			}

			else{
				datasum = 'https://cl0cktree.github.io/portfolioindex/data/data-m.html #filter-conbox-contents4';
			}

			$('.click-all-filter').fadeOut('fast').load('https://cl0cktree.github.io/portfolioindex/cover/cover.html .all-filter-conbox',function(){
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
		}),999}
	clock();
	function stop_clock(){
		clearInterval(scounout);
	};
	/*-----------------------------------------------------------*/

	/*index mainslide 부분*/
		var msheight = $('.slide img').height();
		var mswidth = $('.slide').each(Array).length;/*슬라이드 전체 배열의 갯수만큼의 숫자를 추출*/
		s_width = $('.slide').width();
		var wrapwidth = mswidth*100;
		var move=0;
		var bi=0;

		$('#slide-wrap').css({'height':msheight});

		$(window).resize(function(){
			var msheight = $('.slide img').height();
			var mswidth = $('.slide').each(Array).length;/*-슬라이드 전체 배열의 갯수만큼의 숫자를 추출-*/
			var wrapwidth = mswidth*100;
			s_width = $('.slide').width();

			$('#slide-wrap').css({'height':msheight});
		});

		for (var i=0;i<mswidth;i++)/*.slide의 배열이 늘어나면 알아서 아이디와 레프트값 연산 및 .indicator의 btn도 배열 갯수만큼 append*/
		{
			var t=i+1;
			i=i*100;
			$('#slide'+t).css({'left':i+'%'})
			$('.indicator').append('<span id="bulet'+t+'" class="bulet">●</span>')
			i=i/100;
		};

		$('#prev-btn').on('click mouseover mouseout',function(event){
			if (event.type=='click')
			{
				move=move+100;
				bi=1+move/100*-1;
				if (move<100)
				{
					$('.slide-container').stop().animate({'left':move+'%'},100)
					$('#next-btn').css({'z-index':'4','opacity':'1'})
					$('.bulet').css({'color':'#ccc'})
					$('#bulet'+bi).css({'color':'#000'})
					if (move==0)
					{
						$(this).css({'z-index':'-5','opacity':'0'})
					}
				}else{
					move=0;
					$('.slide-container').stop().animate({'left':move+'%'},100)
					$('#next-btn').css({'z-index':'4','opacity':'1'})
					if (move==0)
					{
						$(this).css({'z-index':'-5','opacity':'0'})
					}
				}
			}
			if (event.type=='mouseover')
			{
				stop();
			}else if (event.type=='mouseout')
			{
				start();
			}
		});

		$('#next-btn').on('click mouseover mouseout',function(event){
			if (event.type=='click')
			{
				move=move-100;
				bi=1+move/100*-1;
				if (move>-mswidth*100)/*슬라이드 갯수 최대치 자동 연산*/
				{
					$('.slide-container').stop().animate({'left':move+'%'},100)
					$('#prev-btn').css({'z-index':'4','opacity':'1'})
					$('.bulet').css({'color':'#ccc'})
					$('#bulet'+bi).css({'color':'#000'})
					if (move-100==-mswidth*100)
					{
						$(this).css({'z-index':'-5','opacity':'0'})
					}
				}else{
					move=-mswidth*100+100;
				}
			}
			if (event.type=='mouseover')
			{
				stop();
			}else if (event.type=='mouseout')
			{
				start();
			}
		});

		$('.slide').on('touchstart touchend touchcancle click mouseover mouseleave',function(event){
			/*
			//-현재의 변화되는 x와 ywhkvy 값-
			var px=event.changeedTouches[0].pageX;
			var py=event.changeedTouches[0].pageY;

			//-좌표변화 이벤트가 일어나는지 체크-
			ptouch=getMoveType(px,py);

			//-스크롤과의 충돌방지 부분(스크롤 이벤트를 무시)-
			if (ptouch===1)
			{
				event.preventDefault();
			}
			*/

			/*swipe 이벤트 시작*/
			var cal_width = s_width*0.2;
			var cal_height = msheight*0.2;

			if (event.type=='touchstart')
			{
				event.preventDefault();
				event.stopPropagation();
				tstart=event.originalEvent.touches[0].pageX;
				ystart=event.originalEvent.touches[0].pageY;
			}

			// if (event.type=='touchmove')
			// {
			//
			// 	event.preventDefault();
			// 	tmove=event.originalEvent.touches[0].pageX;
			//
			// 	msswipe = mswidth*100-100;
			// 	if (tstart-tmove>0)
			// 	{
			// 		move=move-100;
			// 	}else if (tstart-tmove<0)
			// 	{
			// 		move=move+100;
			// 	}
			// 	m=move*-1;
			// 	bi=1+m/100;
			//
			// 	if (tstart-tmove>50)
			// 	{
			// 		if (move<msswipe)
			// 		{
			// 			$('#prev-btn').css({'z-index':'4','opacity':'1'})
			// 			$('#next-btn').css({'z-index':'4','opacity':'1'})
			// 			$('.slide-container').animate({'left':move+'%'},100)
			// 			$('.bulet').css({'color':'#ccc'})
			// 			$('#bulet'+bi).css({'color':'#000'})
			//
			// 			if (move==0)
			// 			{
			// 				$('#prev-btn').css({'z-index':'-5','opacity':'0'})
			// 				$('#next-btn').css({'z-index':'4','opacity':'1'})
			// 			}
			// 			if (move-msswipe==0)
			// 			{
			// 				$('#prev-btn').css({'z-index':'4','opacity':'1'})
			// 				$('#next-btn').css({'z-index':'-5','opacity':'0'})
			// 			}
			//
			// 		}else if (move>msswipe){
			// 			$('#prev-btn').css({'z-index':'4','opacity':'1'})
			// 			$('#next-btn').css({'z-index':'-5','opacity':'0'})
			// 		}
			//
			// 	}
			// 	else if (tstart-tmove<-50){
			// 		if (move!==0)
			// 		{
			// 			$('#prev-btn').css({'z-index':'4','opacity':'1'})
			// 			$('#next-btn').css({'z-index':'4','opacity':'1'})
			// 			$('.slide-container').animate({'left':move+'%'},100)
			// 			$('.bulet').css({'color':'#ccc'})
			// 			$('#bulet'+bi).css({'color':'#000'})
			//
			// 			if (move<100)
			// 			{
			// 				$('#prev-btn').css({'z-index':'-5','opacity':'0'})
			// 				$('#next-btn').css({'z-index':'4','opacity':'1'})
			// 			}
			// 		}else{
			// 			$('#prev-btn').css({'z-index':'-5','opacity':'0'})
			// 			$('#next-btn').css({'z-index':'4','opacity':'1'})
			// 		}
			// 	}else{
			// 		if (bi==0)
			// 		{
			// 			bi++;
			// 			alert('click'+bi)
			// 		}else{
			// 			alert('click'+bi)
			// 		}
			// 	}
			// }

			else if (event.type=='touchend')
			{
				event.preventDefault();
				event.stopPropagation();
				// tend=event.originalEvent.touches[0].pageX;
				tmove=event.originalEvent.changedTouches[0].pageX;
				ymove=event.originalEvent.changedTouches[0].pageY;

				stop();
				var tvalue = tstart-tmove;
				var yvalue = ystart-ymove;

				if (tvalue>cal_width)
				{
					var tvalue = cal_width;

					$('#next-btn').stop().click();
					//alert('1-1 = '+tvalue+'/ 1-2 = '+cal_width);

					//move=move-100;

				}else if (tvalue<-cal_width)
				{
					//move=move+100;
					var tvalue = cal_width;

					$('#prev-btn').stop().click();
					//alert('2-1 = '+tvalue+'/ 2-2 = '+cal_width);

				}else if (tstart-tmove<cal_width){

					if(yvalue==0){
						var topminus = 0;
						if ($('#article1-nav1-topmenu1').css('display')=='block')
						{
							var topminus = 50;
						}else{
							var topminus = 100;
						}
						if (this==document.getElementById('slide1'))
						{
							$('body, html').stop().animate({ scrollTop: $("#article-main-scroll1").offset().top-topminus },300);
						}
						if (this==document.getElementById('slide2'))
						{
							$('body, html').stop().animate({ scrollTop: $("#article-main-scroll2").offset().top-topminus },300);
						}
						if (this==document.getElementById('slide3'))
						{
							$('body, html').stop().animate({ scrollTop: $("#article-main-scroll3").offset().top-topminus },300);
						}
						if (this==document.getElementById('slide4'))
						{
							$('body, html').stop().animate({ scrollTop: $("#article-main-scroll4").offset().top-topminus },300);
						}
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
				start();
			}

			else if (event.type=='touchcancle')
			{
				event.preventDefault();
				event.stopPropagation();
				// tend=event.originalEvent.touches[0].pageX;

				stop();
				var tvalue = tstart-tmove;
				var yvalue = ystart-ymove;

				if (tvalue>cal_width)
				{
					var tvalue = cal_width;

					$('#next-btn').stop().click();
					//alert('1-1 = '+tvalue+'/ 1-2 = '+cal_width);

					//move=move-100;

				}else if (tvalue<-cal_width)
				{
					//move=move+100;
					var tvalue = cal_width;

					$('#prev-btn').stop().click();
					//alert('2-1 = '+tvalue+'/ 2-2 = '+cal_width);


				}else if (tstart-tmove<cal_width){

					if(yvalue==0){
						var topminus = 0;
						if ($('#article1-nav1-topmenu1').css('display')=='block')
						{
							var topminus = 50;
						}else{
							var topminus = 100;
						}
						if (this==document.getElementById('slide1'))
						{
							$('body, html').stop().animate({ scrollTop: $("#article-main-scroll1").offset().top-topminus },300);
						}
						if (this==document.getElementById('slide2'))
						{
							$('body, html').stop().animate({ scrollTop: $("#article-main-scroll2").offset().top-topminus },300);
						}
						if (this==document.getElementById('slide3'))
						{
							$('body, html').stop().animate({ scrollTop: $("#article-main-scroll3").offset().top-topminus },300);
						}
						if (this==document.getElementById('slide4'))
						{
							$('body, html').stop().animate({ scrollTop: $("#article-main-scroll4").offset().top-topminus },300);
						}
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
				start();
			}
			else if (event.type=='click')
			{
				var topminus = 0;
				if ($('#article1-nav1-topmenu1').css('display')=='block')
				{
					var topminus = 50;
				}else{
					var topminus = 100;
				}
				if (this==document.getElementById('slide1'))
				{
					$('body, html').stop().animate({ scrollTop: $("#article-main-scroll1").offset().top-topminus },300);
				}
				if (this==document.getElementById('slide2'))
				{
					$('body, html').stop().animate({ scrollTop: $("#article-main-scroll2").offset().top-topminus },300);
				}
				if (this==document.getElementById('slide3'))
				{
					$('body, html').stop().animate({ scrollTop: $("#article-main-scroll3").offset().top-topminus },300);
				}
				if (this==document.getElementById('slide4'))
				{
					$('body, html').stop().animate({ scrollTop: $("#article-main-scroll4").offset().top-topminus },300);
				}
			}

			else if (event.type=='mouseover')
			{
				stop();
			}
			else if (event.type=='mouseleave')
			{
				start();
			}
			return false;
		});

		var cb;
		var cbm;
		$('.bulet').on('click mouseover mouseleave',function(event){
			if (event.type=='click')
			{
				for (cb = $('.bulet').each(Array).length;cb>=1;cb-- )
				{
					if ($(this).attr('id')=='bulet'+cb)
					{
						$('.bulet').css({'color':'#ccc'})
						$(this).css({'color':'#000'})
						cbm = cb*100;

						if (move-cbm<0)
						{
							if (move-cbm<-100)
							{
								$('.slide-container').stop().animate({'left':-cbm+100+'%'},100)

								if (cb==1)
								{
									$('#prev-btn').css({'z-index':'-5','opacity':'0'})
									$('#next-btn').css({'z-index':'4','opacity':'1'})

								}else if ((cb!==1)&&(cb!==mswidth))
								{
									$('#prev-btn').css({'z-index':'4','opacity':'1'})
									$('#next-btn').css({'z-index':'4','opacity':'1'})
								}else if (cb==mswidth)
								{
									$('#prev-btn').css({'z-index':'4','opacity':'1'})
									$('#next-btn').css({'z-index':'-5','opacity':'0'})
								}

							}else if (move-cbm>-100){
								$('.slide-container').stop().animate({'left':0+'%'},100)
							}else if (move-cbm==-100)
							{

								$('.slide-container').stop().animate({'left':-cbm+100+'%'},100)

								if (cb==1)
								{
									$('#prev-btn').css({'z-index':'-5','opacity':'0'})
									$('#next-btn').css({'z-index':'4','opacity':'1'})

								}else if ((cb!==1)&&(cb!==mswidth))
								{
									$('#prev-btn').css({'z-index':'4','opacity':'1'})
									$('#next-btn').css({'z-index':'4','opacity':'1'})
								}else if (cb==mswidth)
								{
									$('#prev-btn').css({'z-index':'4','opacity':'1'})
									$('#next-btn').css({'z-index':'-5','opacity':'0'})
								}
							}
						}
					}
				}
				move=-cbm+100;
			}
			if (event.type=='mouseover')
			{
				stop();
			}else if (event.type=='mouseleave')
			{
				start();
			}
		});

		if ((move==0)||(cb==1))
		{
			$('#prev-btn').css({'z-index':'-5','opacity':'0'})
			$('#next-btn').css({'z-index':'4','opacity':'1'})
			$('.bulet').css({'color':'#ccc'})
			$('#bulet1').css({'color':'#000'})
		}else if ((cb!==1)&&(cb!==mswidth))
		{
			$('#prev-btn').css({'z-index':'4','opacity':'1'})
			$('#next-btn').css({'z-index':'4','opacity':'1'})
		}else if (cb==mswidth)
		{
			$('#prev-btn').css({'z-index':'4','opacity':'1'})
			$('#next-btn').css({'z-index':'-5','opacity':'0'})
		};

		var as=autospeed/1000-1;
		var countid=100/as;
		var count;
		
		function timein(){

			count = setInterval(function(){
				if (as<1)
				{
					timeout()
					as=autospeed/1000-1;
					$('.countbar1, .countbar2').remove('');
				}else{
					var ai=autospeed/1000-as;
					$('.slide-wrap').append('<span class="countbar"></span>')
					$('.countbar').stop().animate({'width':countid*ai+'%'},autospeed-autospeed*0.4925)
					as--;
				}
			},1000)
		}

		function timeout(){
			clearInterval(count);
			as=autospeed/1000-1;
			$('.countbar').remove('');
		}

		var autospeed=3000;
		function start(){
			timein();
			interval = setInterval(function(){
				msswipe = mswidth*100;
				msminus = mswidth*-100+100;
				var m;

				if (move==msminus)
				{
					move=0;
					m=move*-1;
					bi=1+move/100;

				}else{
					move=move-100;
					m=move*-1;
					bi=1+m/100;
				}
				if (move<msswipe)
				{
					$('#prev-btn').css({'z-index':'4','opacity':'1'})
					$('#next-btn').css({'z-index':'4','opacity':'1'})
					$('.bulet').css({'color':'#ccc'})
					$('#bulet'+bi).css({'color':'#000'})
					$('.slide-container').stop().animate({'left':move+'%'},100)
					if (move==0)
					{
						$('#prev-btn').css({'z-index':'-5','opacity':'0'})
						$('#next-btn').css({'z-index':'4','opacity':'1'})
					}
					if (move-msminus==0)
					{
						$('#prev-btn').css({'z-index':'4','opacity':'1'})
						$('#next-btn').css({'z-index':'-5','opacity':'0'})
					}

				}else if (move>msminus){
					$('#prev-btn').css({'z-index':'4','opacity':'1'})
					$('#next-btn').css({'z-index':'-5','opacity':'0'})
				}
			},autospeed)
		}
		start();
		function stop(){
			clearInterval(interval);
			timeout();
		}
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
				radius: Math.floor(Math.random() * 30) + 10,
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
				circle.radius = Math.floor(Math.random() * 60) + 15;
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
