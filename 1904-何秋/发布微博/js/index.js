function login (){
	this.btn = tools.$("#login");
	this.div = tools.$("#box");
	this.bindEvents();
}
login.prototype = {
	constructor : login,
	bindEvents : function (){
		this.btn.onclick =  () =>{
			this.popBox();
		}
			// 事件委托给div
		this.div.onclick = e => {
			switch(e.target.id) {
				case "loginBtn": this.submitClick();
				case "closeBtn": this.gbBtnClick(); break;
				
			}
		}
		
	},
	popBox : function (){
		//在div里添加登录框
		this.div.innerHTML = '<h4>用户发布</h4><a id="closeBtn" class="gb" href="javascript:;">×</a><p><label>用户名：<input id="username" type="text"></label></p><p><textarea rows="" cols="" id="text"></textarea></p><p><button id="loginBtn" class="loginBtn" type="submit">点击发布</button></p>';
		// 居中显示
		tools.showCenter(this.div);
		//添加遮罩
		this.modal = document.createElement("div");
		this.modal.className = "modal";
		document.body.appendChild(this.modal);
		
		new tz(this.div, "h4");
	},
	// 关闭按钮的方法
	gbBtnClick: function () {
		this.div.style.display = "none";
		this.modal.remove();
	},
	// 登录按钮的方法
	submitClick: function () {
		// 获取用户名和文本信息
		let username = tools.$("#username").value;
		let textarea = tools.$("#text").value;
		if(username === "" || textarea === "") {
			alert("用户名和文本信息不能为空");
		}else{
			//提交信息
			console.log(username, textarea);
		}
	}
}
new login();