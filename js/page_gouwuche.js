window.onload = function(){
	console.log(location.href);
	chrome.storage.local.get('isAuto', function(result) {
		console.log(result.isAuto);
		if (10 == result.isAuto) {
			var handler = null;
			var GotoShoppingCart = null;

			handler = setInterval(function(){
				GotoShoppingCart = document.getElementById('GotoShoppingCart');
				if (null != GotoShoppingCart) {
					GotoShoppingCart.click();
					clearInterval(handler);
				}
			}, 400);
		} 
	});

	
}