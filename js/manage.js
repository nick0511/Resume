var flag = 0;
function changeA()
	{
		document.getElementById("myframe").src="../../img/张博.png";
		flag = 1;
	}
	function changeB()
	{
		document.getElementById("myframe").src="../../img/范家源.png";
		flag = 2;
	}
function changeC()
	{
		document.getElementById("myframe").src="../../img/刘宇锋.png";
		flag = 3;
	}
function changeD()
	{
		document.getElementById("myframe").src="../../img/伍梓豪.png";
		flag = 4;
	
	}
function changeE()
	{
		document.getElementById("myframe").src="../../img/侯凯.png";
		flag = 5;
	
	}

	function changeF()
	{
		document.getElementById("myframe").src="../../img/景树鹏.png";
		flag = 6;
	
	}
	function look(){
			if (flag==1) {
				window.location.href = "../../张简历/introduce.html";
			}
			if (flag==2) {
				window.location.href = "../../范简历/introduce.html";
			}
			if (flag==3) {
				window.location.href = "../../刘简历/jianli.html";
			}
			if (flag==4) {
				window.location.href = "../../伍简历/MyHtml.html";
			}
			if (flag==5) {
				window.location.href = "../../侯简历/index.html";
			}
			if (flag==6) {
				window.location.href = "../../景简历/景树鹏.html";
			}


	}
function Go()
{
	var A =document.getElementById("removeA").checked;
	var B =document.getElementById("removeB").checked;
	var C =document.getElementById("removeC").checked;
	var D =document.getElementById("removeD").checked;
	var E =document.getElementById("removeE").checked;
	var F =document.getElementById("removeF").checked;
	
	if( A==1){
		var result = confirm("确认删除A？");
		if (result) {
			document.getElementById("A").onclick=function(){removed();};
			alert("A删除成功！");
			document.getElementById("myframe").src="";
			flag = 0;
		}
		else{
			alert("A删除失败！");
			
		}
	}

	if( B==1){
		var result = confirm("确认删除B？");
		if (result) {
			document.getElementById("B").onclick=function(){removed();};
			alert("B删除成功！");
			document.getElementById("myframe").src="";
			flag = 0;
		}
		else{
			alert("B删除失败！");
			
		}
	}
		
	if( C==1){
		var result = confirm("确认删除C？");
		if (result) {
			document.getElementById("C").onclick=function(){removed();};
			alert("C删除成功！");
			document.getElementById("myframe").src="";
			flag = 0;
		}
		else{
			alert("C删除失败！");
		}
	}

	if( D==1){
		var result = confirm("确认删除D？");
		if (result) {
			document.getElementById("D").onclick=function(){removed();};
			alert("D删除成功！");
			document.getElementById("myframe").src="";
			flag = 0;
		}
		else{
			alert("D删除失败！");
		}
	}

	if( E==1){
		var result = confirm("确认删除E？");
		if (result) {
			document.getElementById("E").onclick=function(){removed();};
			alert("E删除成功！");
			document.getElementById("myframe").src="";
			flag = 0;
		}
		else{
			alert("E删除失败！");
		}
	}

	if( F==1){
		var result = confirm("确认删除F？");
		if (result) {
			document.getElementById("F").onclick=function(){removed();};
			alert("F删除成功！");
			document.getElementById("myframe").src="";
			flag = 0;
		}
		else{
			alert("F删除失败！");
		}
	}
}
function removed()
{
	alert("该页面被移除");
	document.getElementById("myframe").src=""; 
	
	}