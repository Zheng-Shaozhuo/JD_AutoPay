window.onload = function(){
	console.log(location.href);
	chrome.storage.local.get('isAuto', function(result) {
		console.log(result.isAuto);
		if (10 == result.isAuto) {
			_todo();
			setInterval(function(){
				_todo();
			}, 1000);

			function _todo(){
				var handlersaveConsigneeTitleDivCount = 0;
				var handlersaveConsigneeTitleDiv = null;
				var saveConsigneeTitleDiv = null;
				//保存收货人信息
				handlersaveConsigneeTitleDiv = setInterval(function(){
					saveConsigneeTitleDiv = document.getElementById('saveConsigneeTitleDiv');
					console.log(saveConsigneeTitleDiv);
					if (null != saveConsigneeTitleDiv) {
						clearInterval(handlersaveConsigneeTitleDiv);
						saveConsigneeTitleDiv.click();

						handlersaveConsigneeTitleDivCount++;
						if (handlersaveConsigneeTitleDivCount > 10) {
							clearInterval(handlersaveConsigneeTitleDiv);
						}
					}
				}, 400);
				

				var handlerpayAndShipEditDivCount = 0;
				var handlerpayAndShipEditDiv = null;
				var payAndShipEditDiv = null;
				//保存支付及配送方式
				handlerpayAndShipEditDiv = setInterval(function(){
					payAndShipEditDiv = document.getElementById('payAndShipEditDiv').getElementsByClassName('btn-submit')[0];
					console.log(payAndShipEditDiv);
					if (null != payAndShipEditDiv) {
						clearInterval(handlerpayAndShipEditDiv);
						payAndShipEditDiv.click();

						handlerpayAndShipEditDivCount++;
						if (handlerpayAndShipEditDivCount > 10) {
							clearInterval(handlerpayAndShipEditDiv);
						}
					}
				}, 400);

				var handlerorderSubmitCount = 0;
				var handlerorderSubmit = null;
				var orderSubmit = null;
				//提交订单
				handlerorderSubmit = setInterval(function(){
					orderSubmit = document.getElementById('order-submit');
					console.log(orderSubmit);
					if (null != orderSubmit) {
						clearInterval(handlerorderSubmit);
						orderSubmit.click();

						handlerorderSubmitCount++;
						if (handlerorderSubmitCount > 10) {
							clearInterval(handlerorderSubmit);
						}
					}
				}, 400);
			}
		} 
	});

	
	
}