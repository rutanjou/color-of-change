(function(){
	var app = {
		init: function(){
			$('input[type=range]').on ('change',this.onChange);
		},
		onChange:function(){
			var r = $('#r').val();
			var g = $('#g').val();
			var b = $('#b').val();
			var j = $('#j').val();
			$('body').css('background', 'rgba('+r+','+g+','+b+','+j+')');
		    $('#affich').html('<h1>'+r+'/' +g+'/' +b+'/' +j+'</h1>');
		},
		
	}
	app.init();
})();