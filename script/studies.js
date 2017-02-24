window.onload = function () {
    var x = document.getElementsByClassName('even')
	/*for (var i = 0, len = x.length; i < len; i++) {
		alert(x[i].innerHTML);
	}*/

	var myTd = document.getElementById('my-td');

	var td = document.getElementsByTagName('td');

	for (var i = 0, len = td.length; i < len; i++) {
		
		td[i].addEventListener('click', function(e){
			e.preventDefault();

			var highlighted = document.getElementsByClassName('highlighted');

			for (var i = highlighted.length - 1; i >= 0; i--) {
				highlighted[i].classList.remove('highlighted');
			}

			this.classList.add('highlighted');
		});

		td[i].addEventListener('mouseover', function(e){
			e.preventDefault();
			myTd.innerText = this.innerText;
		});

		td[i].addEventListener('mouseout', function(e){
			e.preventDefault();
			myTd.innerText = '';
		});

	}
	
}