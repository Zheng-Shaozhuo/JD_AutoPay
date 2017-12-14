document.addEventListener('DOMContentLoaded', function() {
	chrome.storage.local.get('isAuto', function(result) {
		console.log(result.isAuto);
		if (10 == result.isAuto) {
			document.getElementById('checbox').checked = true;
		} else {
			document.getElementById('checbox').checked = false;
		}
	});
	

	document.getElementById('checbox').onclick = function() {
		var vv = document.getElementById('checbox').checked;
		chrome.storage.local.get('isAuto', function(result) {
			console.log(result.isAuto);
		});
		
		if (true == vv) {
			chrome.storage.local.set({'isAuto': 10}, function() {
				console.info('存储成功');
			});
		} else {
			chrome.storage.local.set({'isAuto': 99}, function() {
				console.info('存储成功');
			});
		}
	};
});