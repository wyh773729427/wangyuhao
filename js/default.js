
/* 顶部渐隐渐出效果实现 */
var oHeader = document.getElementsByTagName('header')[0];
var oSlide = document.getElementsByClassName('main_slide')[0];

var oSlideHeight = parseInt(getComputedStyle(oSlide, null).height);//获取轮播图高度

window.onscroll = function(){
	//距离顶部高度
	var height = document.documentElement.scrollTop || document.body.scrollTop;
	// if(height > headerAlpha) return;
	//动态计算header应该有的透明度
	var headerAlpha = height / oSlideHeight;
	headerAlpha = headerAlpha >= 1 ? 1 : headerAlpha;
	oHeader.style.background = 'rgba(221, 64, 59, '+headerAlpha+')';
}
