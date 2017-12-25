// 账号密码登陆 手机快捷登陆切换
var btnAccountLogin = document.querySelector('#accountLogin');
var oDivAccountLogin = document.querySelector('.accountLogin');
var btnPhoneLogin = document.querySelector('#phoneLogin');
var oDivPhoneLogin = document.querySelector('.phoneLogin');

btnAccountLogin.onclick = function() {
	oDivPhoneLogin.style.right = '-100%';
	removeClass(btnPhoneLogin, 'active');
	oDivAccountLogin.style.left = '0';
	addClass(this, 'active');
}
btnPhoneLogin.onclick = function() {
	oDivAccountLogin.style.left = '-100%';
	removeClass(btnAccountLogin, 'active');
	oDivPhoneLogin.style.right = '0';
	addClass(this, 'active');
}

// 更多方式下拉
var main = document.querySelector('main');//8.2rem
var otherWay = document.querySelector('#otherWay');
var footer = document.querySelector('footer');//2.8rem
otherWay.flag = true;
otherWay.onclick = function() {
	if(this.flag) {
		this.flag = !this.flag;
		footer.style.height = '.8rem';
		main.style.height = '10.2rem';
		this.children[0].style.transform= 'rotateZ(90deg)';
	}
	else {
		this.flag = !this.flag;
		footer.style.height = '2.8rem';
		main.style.height = '8.2rem';
		this.children[0].style.transform= 'rotateZ(-90deg)';
	}
}