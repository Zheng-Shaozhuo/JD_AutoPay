window.onload = function(){
	console.log(location.href);
	chrome.storage.local.get('isAuto', function(result) {
		console.log(result.isAuto);
		chrome.storage.local.get('yuyueTime', function(res) {
			console.log(res.yuyueTime);
			if (res.yuyueTime > 0) {
				toKill(res.yuyueTime);
			}
		});

		if (10 == result.isAuto) {
			var box = document.createElement('div');
			box.style.cssText = 'z-index: 9999; position: fixed; top: 50px; right: 100px; width: 200px; height: auto;';
			var ae = document.createElement('a');
			ae.style.cssText = 'font-size: 20px; color: green; padding: 3px 6px; background: #bcbcbc; text-decoration: none; margin: 7px; width: 77px;';
			ae.href = '#';
			ae.innerText = 'START';
			var flag = false;
			var handler = null;
			ae.onclick = toKill;
			box.appendChild(ae);
			document.getElementsByTagName('body')[0].appendChild(box);
		}
		
	});

	function toKill(time = 0) {
		console.log(time);
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
				btnClass = qgbtn.className;
				btnText = qgbtn.text;
			} else if (null != ljqgbtn) {
				btnClass = ljqgbtn.className;
				btnText = ljqgbtn.text;
			} else if (null != jrgucbtn) {
				btnClass = jrgucbtn.className;
			}
			
			if (null != qgbtn) {
				//分之一
				if (-1 == btnClass.indexOf('disable')) {
					if (btnText.indexOf('未开始') > 0) {
						if (0 != time) {
							setTimeout(function(){
								window.location.reload();
							},time);
						}
					}
					else {
						clearInterval(handler);
						qgbtn.click();
					}
				} else {
					if (btnText.indexOf('未开始') > 0) {
						if (0 != time) {
							setTimeout(function(){
								window.location.reload();
							},time);
						}
					}
				}
			}
			else if (null != ljqgbtn) {
				//分支二 加购物车逻辑
				if (-1 == btnClass.indexOf('disable')) {
					if (btnText.indexOf('等待') > 0 || btnText.indexOf('预约') > 0) {
						if (0 != time) {
							setTimeout(function(){
								window.location.reload();
							},time);
						}
						console.log(btnText);
					}
					else {
						clearInterval(handler);
						ljqgbtn.click();
					}
				} else {
					if (btnText.indexOf('等待') > 0 || btnText.indexOf('预约') > 0) {
						if (0 != time) {
							setTimeout(function(){
								window.location.reload();
							},time);
						}
						console.log(btnText);
					}
				}
			}
			else if (null != jrgucbtn) {
				//分支二 加购物车逻辑
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
	}
}