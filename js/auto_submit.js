window.onload = function(){
	var btn = document.getElementById('order-submit');
	if (btn == null) {
		return ;
	}
	
	var box = document.createElement('div');
	box.style.cssText = 'position: fixed; top: 50px; right: 100px; width: 200px; height: auto;';
	
	var timeV = 800;
	var se = document.createElement('select');
	se.style.cssText = 'display: block; width: 77px; margin: 7px;';
	se.setAttribute('id', 'se');
	se.options.add(new Option('800ms', '800'));
	se.options.add(new Option('300ms', '300'));
	se.options.add(new Option('600ms', '600'));
	se.options.add(new Option('1 s', '1000'));
	se.options.add(new Option('2 s', '2000'));
	se.options.add(new Option('3 s', '3000'));
	
	se.addEventListener('change', function(){
		console.log(this.value);
		timeV = this.value;
	});
	box.appendChild(se);
	
	var ae = document.createElement('a');
	ae.style.cssText = 'pfont-size: 16px; color: red; padding: 3px 6px; background: #bcbcbc; text-decoration: none; margin: 7px; width: 77px;';
	ae.href = '#';
	ae.innerText = 'START';
	var flag = false;
	var handler = null;
	ae.addEventListener('click', function(){
		console.log(flag);
		if (flag) {
			ae.innerText = 'START';
			clearInterval(handler);
		}
		else {
			ae.innerText = 'STOP';
			handler = setInterval(function(){
				btn.click();
			}, timeV);
		}
		flag = !flag;
	})
	box.appendChild(ae);
	
	document.getElementsByTagName('body')[0].appendChild(box);
}