var listLength = $('#picList').children('li').length;
var nth = 0;

$(document).ready(function() {
	//点击列表小图，大图对应切换，同时选中小图移动到列表中间
	var placeholder = $('#placeholder');
	$('#picList').on('click', 'img', function(e) {
		var $this = $(this),
			source = $this.attr("src");
		placeholder.attr("src", source);
		$('#picList li').removeClass('active');
		$this.parents('li').addClass('active');
		nth = $('#picList li').index('li.active');
		listSlide(nth - 1);
	});

	//点击向后按钮，列表向后滚动
	$('#listBackward').on('click', function() {
		listSlide(nth + 2);
	});
	//点击向前按钮，列表向前滚动
	$('#listForward').on('click', function() {
		listSlide(nth - 2);
	});
})

function listSlide(counter) {
	//图片列表滚动至头或尾部时，按钮不可点击
	if(counter > 0) {
		$('#listForward').removeClass('disable');
		$('#listForward').removeAttr('disabled');
	} else {
		$('#listForward').addClass('disable');
		$('#listForward').attr('disabled', 'disabled');
	}
	if(counter < listLength - 3) {
		$('#listBackward').removeClass('disable');
		$('#listBackward').removeAttr('disabled');
	} else {
		$('#listBackward').addClass('disable');
		$('#listBackward').attr('disabled', 'disabled');
	}

	//列表滚动
	if(counter > listLength - 3) counter = listLength - 3;
	if(counter < 0) counter = 0;
	var left = -counter * 188 + 'px';
	$('#picList').animate({
		left: left
	}, 300);
	nth = counter;
}