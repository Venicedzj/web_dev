//添加函数
function add() {
	var Add = document.getElementById("add");
	var item = document.getElementById("txArea");
	Add.onclick = function() {
		if (item.value != "") {
			var ul = document.getElementById("ul");
			var elemtLi = document.createElement("li");
			elemtLi.setAttribute("id", item.value);
			elemtLi.setAttribute("name", "li");
			elemtLi.setAttribute("class", "liclass");
			var d=new Date()
			var day=d.getDate()
			var month=d.getMonth() + 1
			var year=d.getFullYear()
			elemtLi.innerHTML = '<input type="checkbox" name="cb" id=C' + item.value + '>' + item.value+" ----"+year+"/"+month+"/"+day;

			ul.appendChild(elemtLi);
			item.value = "";
		} else alert("请输入待办事务!");
	}

}
//全选函数
function sltAll() {
	var sltall = document.getElementById("sltAll");
	sltall.onclick = function() {
		var cb = document.getElementsByName("cb");
		if (cb[0] != null) {
			for (var i = 0; i < cb.length; i++)
				cb[i].checked = true;
		} else alert("待办事务列表为空!");
	}
}
//反选函数
function ivtSlet() {
	var ivtslet = document.getElementById("ivtSlet");
	ivtslet.onclick = function() {
		var cb = document.getElementsByName("cb");
		if (cb[0] != null) {
			for (var i = 0; i < cb.length; i++) {
				if (!cb[i].checked)
					cb[i].checked = true;
				else
					cb[i].checked = false;
			}
		} else alert("待办事务列表为空!");
	}
}
//删除函数
function Delete() {
	var del = document.getElementById("del");
	del.onclick = function() {
		var liItem = document.getElementsByName("li");
		if (liItem[0] != null) {
			var ul = document.getElementById("ul");
			var cb = document.getElementsByName("cb");
			var i = 0;
			while (i < cb.length) {
				if (cb[i].checked){
					console.log(liItem[i]);
					ul.removeChild(liItem[i]);}
				else
					i++;
			}
		} else alert("待办事务列表为空!");
	}
}

/*function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if (c_end == -1) c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}

function setCookie(c_name, value, expiredays) {
	var exdate = new Date()
	exdate.setDate(exdate.getDate() + expiredays)
	document.cookie = c_name + "=" + escape(value) +
		((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
}

function checkCookie() {
	username = getCookie('username')
	if (username != null && username != "") {
		alert(username + ',欢迎回来!')
	} else {
		username = prompt('欢迎使用备忘录,请输入你的姓名：', "")
		if (username != null && username != "") {
			setCookie('username', username, 365)
		}
	}
}*/

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent(add);
addLoadEvent(sltAll);
addLoadEvent(ivtSlet);
addLoadEvent(Delete);
//addLoadEvent(checkCookie);