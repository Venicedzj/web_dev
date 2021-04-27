//当前页面移动完毕
var endCurrPage = false;
//后续页面移动完毕
var endNextPage = false;
//入场动画和出场动画
var outClass = '';
var inClass = '';

var animEndEventNames = {
		'WebkitAnimation': 'webkitAnimationEnd',
		'OAnimation': 'oAnimationEnd',
		'msAnimation': 'MSAnimationEnd',
		'animation': 'animationend'
	},
	//animation end event name
	animEndEventName = animEndEventNames[Modernizr.prefixed('animation')]

$(function() {
	//保存各个View的默认class
	$(".pt-page").each(function() {
		var $page = $(this);
		$page.data('originalClassList', $page.attr('class'));
	});
	//设置默认页面
	$(".pt-page").eq(0).addClass('pt-page-current');
	console.log($(".pt-page").eq(0).addClass('pt-page-current'));
});

//View切换
function changeView(newView) {
	$currPage = $(".pt-page-current").eq(0);
	$nextPage = $(newView);

	//清除原来添加的动画，层级等样式(正常动画结束时会自动清除，这样做防止用户在动画结束前就点击切换其他的)
	$(".pt-page").each(function() {
		$(this).attr('class', $(this).data('originalClassList'));
	});
	$currPage.addClass("pt-page-current");
	$nextPage.addClass("pt-page-current");


	//如果就是当页则不切换
	if ($currPage.attr("id") == $nextPage.attr("id")) {
		return;
	}

	//新页面入场
	$currPage.addClass(outClass).on(animEndEventName, function() {
		$currPage.off(animEndEventName);
		endCurrPage = true;
		if (endNextPage) {
			onEndAnimation($currPage, $nextPage);
		}
	});

	//旧页面出场
	$nextPage.addClass(inClass).on(animEndEventName, function() {
		$nextPage.off(animEndEventName);
		endNextPage = true;
		if (endCurrPage) {
			onEndAnimation($currPage, $nextPage);
		}
	});
}

//所有动画都结束后
function onEndAnimation($outpage, $inpage) {
	endCurrPage = false;
	endNextPage = false;

	$outpage.attr('class', $outpage.data('originalClassList'));
	$inpage.attr('class', $inpage.data('originalClassList') + ' pt-page-current');
}


var i = 0;

function pevPage() {
	//设置动画效果
	outClass = 'pt-page-moveToRight';
	inClass = 'pt-page-moveFromLeft';
	var view = "#view";
	changeView(view + ((i + 1) % 2));
	i = (i + 1) % 2;
	j = i;
}

var j = 0;

function nextPage() {
	//设置动画效果
	outClass = 'pt-page-moveToLeft';
	inClass = 'pt-page-moveFromRight';
	var view = "#view";
	changeView(view + ((j + 1) % 2));
	j = (j + 1) % 2;
	i = j;
}