window.onload = function(){
	console.log(location.href);
	chrome.storage.local.get('isAuto', function(result) {
		console.log(result.isAuto);
		if (10 == result.isAuto) {
			var handler = null;
			var tryBtn = null;

			handler = setInterval(function(){
				tryBtn = document.getElementById('tryBtn');
				if (null != tryBtn) {
					if (confirm('是否重新抢购')) {
						tryBtn.click();
						clearInterval(handler);
					}
					else {
						clearInterval(handler);
					}
				}
			}, 400);
		} 
	});

	
}