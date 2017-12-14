window.onload = function (){
	console.log(location.href);
	
	var handler = null;
	var orderSubmit = null;
	//提交订单
	handler = setInterval(function(){
		orderSubmit = document.getElementsByClassName('submit-btn')[0];
		if (null != orderSubmit) {
			orderSubmit.click();
			clearInterval(handler);
		}
	}, 300);
}