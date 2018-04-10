$(document).ready(function() {
	var counter = 0;
	var left;
	var forwardBtn = $('.page-turn .forward'),
		backwardBtn = $('.page-turn .backward');
	//优秀模特列表向后翻页
	backwardBtn.on('click', function() {
		var width = $('.list-container').css('width');
		if(counter < 2 && counter >= 0) {
			counter += 1;
			left = -counter * (parseFloat(width) + 5) + 'px';
			$('.model-list').animate({
				left: left
			}, 300);
			forwardBtn.removeClass('disable');
			forwardBtn.removeAttr('disabled');
		}
		if(counter == 2) {
			$(this).attr('disabled', 'disabled');
			$(this).addClass('disable');
		}
	});
	//优秀模特列表向前翻页
	forwardBtn.on('click', function() {
		var width = $('.list-container').css('width');
		if(counter <= 2 && counter > 0) {
			counter -= 1;
			left = -counter * (parseFloat(width) + 5) + 'px';
			$('.model-list').animate({
				left: left
			}, 300);
			backwardBtn.removeClass('disable');
			backwardBtn.removeAttr('disabled');
		}
		if(counter == 0) {
			$(this).attr('disabled', 'disabled');
			$(this).addClass('disable');
		}
	})
});

//多行文本省略
$(document).ready(function() {
	$('.introduction .text').each(function(i){
		var divH = $(this).height();
		var $p = $("p", $(this)).eq(0);
		while($p.height() > divH) {
			$p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
		};
	});
});