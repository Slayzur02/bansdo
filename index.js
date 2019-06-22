document.getElementById('bino-button').addEventListener('click', function(e) {
	document.getElementById('telescopes').style.display='none';
	document.getElementById('bino').style.display = 'none';
	document.getElementById('books').style.display = 'none'
	document.getElementById('bino').style.display = 'flex'
});

document.getElementById('tele-button').addEventListener('click', function(e) {
	document.getElementById('telescopes').style.display='none';
	document.getElementById('bino').style.display = 'none';
	document.getElementById('books').style.display = 'none'
	document.getElementById('telescopes').style.display = 'flex'
});

document.getElementById('book-button').addEventListener('click', function(e) {
	document.getElementById('telescopes').style.display='none';
	document.getElementById('bino').style.display = 'none';
	document.getElementById('books').style.display = 'none'
	document.getElementById('books').style.display = 'flex'
});


