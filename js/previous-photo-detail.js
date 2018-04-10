var listLength = $('#picList').children('li').length;
var nth = 0;

$(document).ready(function() {
	//点击列表小图，大图对应切换，同时选中小图移动到列表中间
	$('#picList').on('click', 'img', function(e) {
		var picNewLi = $(this).parents('li');
		changePic(picNewLi);
	});

	//点击图片向后按钮，图片切换
	$('#picBackward').on('click', function() {
		var picNewLi = $('#picList .active').next('li');
		changePic(picNewLi);
	});

	//点击图片向前按钮，图片切换
	$('#picForward').on('click', function() {
		var picNewLi = $('#picList .active').prev('li');
		changePic(picNewLi);
	});

	//点击图片列表向后按钮，列表向后滚动
	$('#listBackward').on('click', function() {
		listSlide(nth + 3);
	});
	//点击图片列表向前按钮，列表向前滚动
	$('#listForward').on('click', function() {
		listSlide(nth - 3);
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
	if(counter < listLength - 5) {
		$('#listBackward').removeClass('disable');
		$('#listBackward').removeAttr('disabled');
	} else {
		$('#listBackward').addClass('disable');
		$('#listBackward').attr('disabled', 'disabled');
	}

	//列表滚动
	if(counter > listLength - 5) counter = listLength - 5;
	if(counter < 0) counter = 0;
	var left = -counter * 224.85 + 'px';
	$('#picList').animate({
		left: left
	}, 300);
	nth = counter;
}

function changePic(picNewLi) {
	var picNew = picNewLi.children().children('img');
	var source = picNew.attr('src');
	var text = picNew.attr('alt');
	$('#placeholder').attr('src', source);
	$('#placeholder').attr('alt', text);
	$('#picIntro').replaceWith('<p id="picIntro">' + text + '</p>');
	$('#picListInrow li').removeClass('active');
	picNewLi.addClass('active');

	nth = $('#picList li').index(picNewLi);
	if(nth>0){
		$('#picForward').removeClass('disable');
		$('#picForward').removeAttr('disabled');
	}else{
		$('#picForward').addClass('disable');
		$('#picForward').attr('disabled','disabled');
	}
	if(nth<listLength-1){
		$('#picBackward').removeClass('disable');
		$('#picBackward').removeAttr('disabled');
	}else{
		$('#picBackward').addClass('disable');
		$('#picBackward').attr('disabled','disabled');
	}

	listSlide(nth - 2);
}