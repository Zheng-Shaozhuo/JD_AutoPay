window.onload = function(){
	console.log(location.href);
	
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