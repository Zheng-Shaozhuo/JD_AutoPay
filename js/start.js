document.addEventListener('DOMContentLoaded', function() {
	chrome.storage.local.get('isAuto', function(result) {
		console.log(result.isAuto);
		if (10 == result.isAuto) {
			document.getElementById('checbox').checked = true;
			document.getElementById('zidong').style.display = 'block';
		} else {
			document.getElementById('checbox').checked = false;
			document.getElementById('zidong').style.display = 'none';
		}
	});

	chrome.storage.local.get('yuyueTime', function(result) {
		console.log(result.yuyueTime);
		if (0 != result.yuyueTime) {
			document.getElementById('autoRechecbox').checked = true;
			document.getElementById('time').value = result.yuyueTime;
		} else {
			document.getElementById('time').value = 1000;
			document.getElementById('autoRechecbox').checked = false;
		}
	});
	
	//是否开启自动抢购
	document.getElementById('checbox').onclick = function() {
		var vv = document.getElementById('checbox').checked;
		
		if (true == vv) {
			chrome.storage.local.set({'isAuto': 10}, function() {
				console.info('存储成功');
			});
			document.getElementById('zidong').style.display = 'block';
		} else {
			chrome.storage.local.set({'isAuto': 99}, function() {
				console.info('存储成功');
			});
			document.getElementById('zidong').style.display = 'none';
			document.getElementById('autoRechecbox').checked = false;
			chrome.storage.local.set({'yuyueTime': 0}, function() {});
		}
	};

	//预约刷新
	document.getElementById('autoRechecbox').onclick = function() {
		var vv = document.getElementById('autoRechecbox').checked;
		var time = document.getElementById('time').value;
		if (true == vv) {
			chrome.storage.local.set({'yuyueTime': time}, function() {});
		} else {
			chrome.storage.local.set({'yuyueTime': 0}, function() {});
		}
	};

	//预约刷新
	document.getElementById('time').onchange = function() {
		document.getElementById('autoRechecbox').checked = false;
		chrome.storage.local.set({'yuyueTime': 0}, function() {});
	};
});