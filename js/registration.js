//选择职业“学生”，出现学校输入框
$(document).ready(function() {
	$('#occupation').on('change', function() {
		var option = $('#occupation option').not(function() {
			return !this.selected
		});
		if(option.val() == 1) {
			$('#occupation').parent().after('<div class="form-group student"><label>学校：</label><input type="text" name="school" placeholder="请输入学校名字" /></div>');
		} else {
			$('.form-group.student').remove();
		}
	});
});

$(document).ready(function() {
	//点击“下一步”按钮时，判断内容是否填写正确
	$('#btnNext').on('click', function() {
		var a = 0;
		$('.reg-1 input').each(function() {
			var value = $(this).val();
			value = value.replace(' ', '');
			if(value.length == 0) {
				$(this).addClass('error');
				a = 1;
			}
		});
		$('.reg-1 select').each(function() {
			var value = $(this).val();
			if(!value) {
				$(this).addClass('error');
				a = 1;
			}
		});
		$('.reg-1 input[type=tel]').each(function() {
			var value = $(this).val();
			console.log(isNaN(value));
			if(isNaN(value)) {
				$(this).addClass('error');
				a = 2;
			}
		});
		if(a == 1) {
			alert('请将内容填写完整。')
		} else {
			if(a == 2) {
				alert('请填写正确格式的联系方式');
			} else {
				$('.reg-1').hide();
				$('.reg-2').show();
			}
		}
	});

	//点击“上一步”按钮，返回第一步
	$('#btnReturn').on('click', function() {
		$('.reg-1').show();
		$('.reg-2').hide();
	});

	//点击“提交”按钮，判断内容是否填写正确
	$('#btnSubmit').on('click', function() {
		var a = 0;
		$('.reg-2 input[type=number]').each(function() {
			var value = $(this).val();
			value = value.replace(' ', '');
			if(value.length == 0) {
				$(this).addClass('error');
				a = 1;
			}
		});
		$('.reg-2 input[type=file]').each(function() {
			var value = $(this).val();
			if(!value) {
				$(this).parents('.upload-container').addClass('error');
			}
		});
		if(a == 1) {
			alert('请将内容填写完整。')
			return false;
		} else {
			$(this).parents('form').submit();
		}
	})

	//提示错误的输入框，填写后去除错误提示
	$('form').on('change', 'select, input', function() {
		$(this).removeClass('error');
		$(this).parents('.upload-container').removeClass('error');
	})
});

//关闭弹窗
$(document).ready(function(){
	$('.pop-container').on('click','.pop-bg, button', function(){
		$('.pop-container').hide();
	});
});
