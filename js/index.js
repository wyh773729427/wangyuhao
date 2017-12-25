var oSlide = document.getElementById('slide');
var aSlideBodyDiv = oSlide.children[0].getElementsByTagName('div');
var aSlideNavLi = oSlide.children[1].children[0].getElementsByTagName('li');

//鼠标放上暂停轮播
oSlide.onmouseenter = function() {
	clearTimeout(timer);
}
oSlide.onmouseleave = function() {
	clearTimeout(timer);
	setTimeout(autoMove, interTime);
}

// li点击切换div
var preIndex = 0;
for(var i = 0; i < aSlideNavLi.length; i++) {
	aSlideNavLi[i].index = i;
	aSlideNavLi[i].onclick = function(){
		removeClass(aSlideBodyDiv[preIndex], 'active');
		removeClass(aSlideNavLi[preIndex], 'active');
		addClass(aSlideBodyDiv[this.index], 'active');
		addClass(this, 'active');
		preIndex = this.index;
	}
}


//自动播放轮播图
var slideNumber = aSlideBodyDiv.length;
var interTime = 1500;
var timer;
function autoMove() {
	removeClass(aSlideBodyDiv[preIndex], 'active');
	removeClass(aSlideNavLi[preIndex], 'active');
	preIndex++;
	if(preIndex == slideNumber) preIndex = 0;
	addClass(aSlideBodyDiv[preIndex], 'active');
	addClass(aSlideNavLi[preIndex], 'active');
	clearTimeout(timer);
	timer = setTimeout(autoMove, interTime);
}
setTimeout(autoMove, interTime);


/* 顶部渐隐渐出效果实现 */
var oHeader = document.getElementsByTagName('header')[0];

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
