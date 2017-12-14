window.onload = function(){
	console.log(location.href);
	chrome.storage.local.get('isAuto', function(result) {
		console.log(result.isAuto);
		if (10 == result.isAuto) {
			var handler = null;
			var orderSubmit = null;
			//提交订单
			handler = setInterval(function(){
				orderSubmit = document.getElementById('order-submit');
				if (null != orderSubmit) {
					orderSubmit.click();
					clearInterval(handler);
				}
			}, 300);
		} 
	});

	
}