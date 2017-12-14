window.onload = function(){
	console.log(location.href);
	chrome.storage.local.get('isAuto', function(result) {
		console.log(result.isAuto);
		if (10 == result.isAuto) {
			var box = document.createElement('div');
			box.style.cssText = 'z-index: 9999; position: fixed; top: 50px; right: 100px; width: 200px; height: auto;';
			var ae = document.createElement('a');
			ae.style.cssText = 'font-size: 20px; color: green; padding: 3px 6px; background: #bcbcbc; text-decoration: none; margin: 7px; width: 77px;';
			ae.href = '#';
			ae.innerText = 'START';
			var flag = false;
			var handler = null;
			ae.addEventListener('click', function(){
				var handler = null;
				var qgbtn = null;	//抢购
				var ljqgbtn = null; //立即抢购
				var jrgucbtn = null; //加入购物车
				var btnClass = null; //按钮className
				var btnText = null; //按钮提示文字
				handler = setInterval(function(){
					qgbtn = document.getElementById('choose-btn-ko');
					ljqgbtn = document.getElementById('btn-reservation');
					jrgucbtn = document.getElementById('InitCartUrl');
					if (null != qgbtn) {
						//分之一
						btnClass = qgbtn.className;
						if (-1 == btnClass.indexOf('disable')) {
							btnText = qgbtn.text;
							if (btnText.indexOf('未开始') > 0) {
								console.log(btnText);
							}
							else {
								clearInterval(handler);
								qgbtn.click();
							}
						}
					}
					else if (null != ljqgbtn) {
						//分支二 加购物车逻辑
						btnClass = ljqgbtn.className;
						if (-1 == btnClass.indexOf('disable')) {
							btnText = ljqgbtn.text;
							if (btnText.indexOf('等待') > 0 || btnText.indexOf('预约') > 0) {
								console.log(btnText);
							}
							else {
								clearInterval(handler);
								ljqgbtn.click();
							}
						}
					}
					else if (null != jrgucbtn) {
						//分支二 加购物车逻辑
						btnClass = jrgucbtn.className;
						if (btnClass.indexOf('disable') > 0) {
							clearInterval(handler);
						}
						clearInterval(handler);
						jrgucbtn.click();
					}
					else {
						return ;
					}
					
				}, 800);
			})
			box.appendChild(ae);
			document.getElementsByTagName('body')[0].appendChild(box);
		} 
	});
	

	
}