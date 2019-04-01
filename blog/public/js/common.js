;(function($){
	var $login = $('#login');
	var $register = $('#register');

	//1.登录和注册面板的切换
	//1.1从登陆面板到注册面板
	$('#go-register').on('click',function(){
		$login.hide()
		$register.show()
	})
	//1.2注册面板到登陆面板
	$('#go-login').on('click',function(){
		$register.hide()
		$login.show()
	})

	//2.用户注册
	$('#sub-register').on('click',function(){
		//2.1获取表单数据
		var username = $register.find('[name="username"]').val()
		var password = $register.find('[name="password"]').val()
		var repassword = $register.find('[name="repassword"]').val()
		//2.2验证
		var errMsg = '';
		var $err = $register.find('.err')
		//用户名以字母开头包含数字下划线3——10位字符
		if(!/^[a-z][0-9a-z_]{2,9}$/i.test(username)){
			errMsg = '用户名以字母开头包含数字下划线3——10位字符'
		}
		//密码3-6
		else if(!/^\w{3,6}$/.test(password)){
			errMsg = '密码3-6'
		}
		//密码输入一样
		else if(password != repassword){
			errMsg = '两次密码输入不一样'
		}
		if(errMsg){//验证不通过
			$err.html(errMsg);
			return;
		}else{//验证通过
			$err.html('')
			//2.3发送ajax提交数据
			$.ajax({
				url:'/user/register',
				type:'post',
				dataJson:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(result){
				console.log(result);
			})
			.fail(function(err){
				$err.html('请求失败 请稍后再试');
			})
		}

		
	})





})(jQuery);