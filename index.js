var state = {
	items: []
};

var data = localStorage.getItem('data');
if (data) {
	state = JSON.parse(data);
}

window.addEventListener('load', function () {

	var button = document.querySelector('.add');
	var list = document.querySelector('ul');
	var input = document.querySelector('input');
	var reset = document.querySelector('.del');


	update();
	


	function update () {
	list.innerHTML = '';
	for (var i = 0; i < state.items.length; i++) {
		var el = document.createElement('li');
		el.innerText = state.items[i];
		list.appendChild(el);
	}
}
	reset.addEventListener('click', function () {
		localStorage.clear();
		location.reload();
		
	});
	button.addEventListener('click', function () {
		var l = input.value;
		state.items.push(l);
		update();
		localStorage.setItem('data', JSON.stringify(state));
		state.items.sort();
			
	});

	input.addEventListener('keydown', function(event) {
		if (event.keyCode == 13) {
	
			var l = input.value;
			state.items.push(l);
			update();
			localStorage.setItem('data', JSON.stringify(state));
			input.value = '';
			state.items.sort();
		}
	} );
	
})

