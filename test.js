$('.header')
	.on('click', 
		function(){ 
			alert('hello'); 
		}
	);

	$('input')
	.keyup( 
		function(e){ 
			console.log(e)
			if(e.keyCode == 13) 
			{alert('hello')};
		}
	);