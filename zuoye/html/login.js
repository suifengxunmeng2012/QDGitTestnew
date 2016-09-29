window.onload = function(){
	
	if(getCookie("username")){
		alert("cookie已经缓存,登录成功");
	 }

	$("#div_test").innerHTML = testStr(4);
	 $("#div_test").onclick = function(){
	       $("#div_test").innerHTML = testStr(4);
	}

	//邮箱的验证
	$("#eMail").onblur = function() {
    var oValue = this.value.replace(/\s/g, "");
    this.value = oValue;
    var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (reg.oValue) {
        alert("邮箱验证成功");
    } else {
        alert("邮箱输入正确");
    }
  }

  //用户名验证
	 $("#username").onblur = function() {
	    var oValue = this.value.replace(/\s/g, "");
	    this.value = oValue;
	    
	    if (oValue.length > 18 || oValue.length < 6) {
	        alert("用户名的长度是6~18位");
	    } else if (/\d/.test(oValue[0])) {
	       alert("首字母不能为数字");
	    } else if (/\W+/.test(oValue)) {
	        alert("用户名只能由数字、字母和下划线组成");
	    } else {
	        
	        alert("√");
	    }
	}
//密码的验证
	$("#password").onblur = function() {
	   
	    if (this.value.length > 18 || this.value.length < 6) {
	        alert("密码长度是6~18位");
	    } else {
	        //判断密码强度
	        if (/\d+/.test(this.value) && /[a-z]+/.test(this.value) && /[A-Z]+/.test(this.value)) {
	            alert("【强】");
	        } else if (/^\d+$/.test(this.value) || /^[a-z]$/.test(this.value) || /^[A-Z]$/.test(this.value)) {
	            alert("【弱】");
	        } else {
	            alert("【一般】")
	        }
	    }
	}
//再次密码的验证
		$("#passwordR").onblur = function(){
				if(this.value.length > 18 || this.value.length < 6){
					alert("输入有误，请重新输入");
				} else if (!(this.value == $("#password").value) && this.value !="" ) {
					alert("两次输入的密码不一致，请重新输入！");	
													
				}else{
					alert("√");
				}
			}

//验证验证码是否正确
			$("#test_code").onblur = function(){
				if(this.value == $("#div_test").innerHTML){
					alert("验证码正确");
				}else{
					alert("验证码输入不正确");
				}
			}

			$("#login").onclick = function(){
				//1.进行cookie缓存,存储用户名密码
				setCookie("username", $("#username").value, getDate(5));
				setCookie("password", $("#password").value, getDate(5));
				alert("注册成功");
			}


 }


