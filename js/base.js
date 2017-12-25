// 给元素点击添加active事件
function addClickClass(arr, className) {
	var preIndex = 0;
	for(var i = 0; i < arr.length; i++) {
		arr[i].index = i;
		arr[i].onclick = function(){
			addClass(this, className);
			removeClass(arr[preIndex], className);
			preIndex = this.index;
		}
	}
}
// 给ele元素添加className
function addClass(ele, className) {
	var str = ele.className;
	var p = / +/g;
	str = str.replace(p," ");
	var arr = str.split(' ');
	if(!w_has(arr, className)) {
		arr.push(className);
		ele.className = arr.join(' ');
	}
}
// 给ele元素移除className
function removeClass(ele, className) {
	var str = ele.className;
	var p = / +/g;
	str = str.replace(p," ");
	var arr = str.split(' ');
	var arr2 = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] != className) arr2.push(arr[i]);
	}
	ele.className = arr2.join(' ');
}
/*查找数组arr中是否含有obj 含有返回true*/
function w_has(arr, obj){
	for(var i in arr) {
		if(obj == arr[i]) return true;
	}
	return false;
}