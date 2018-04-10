$(document).ready(function(){
	$('.brand-list').on('click','a',function(e){
		e.preventDefault;
		var $this = $(this),
			link = $this.attr('href'),
			text = $this.children('img').attr('alt');
		$('#brandPic img').attr('src', link);
		$('#brandPic img').attr('alt', text);
		$('.brand-list li').removeClass('active');
		$this.parents('li').addClass('active');
		return false;
	});
});