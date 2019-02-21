function deGet(){
	var a= document.getElementById("a1");
	var b= document.getElementById("a2");
	var c= document.getElementById("a3");
	var d= document.getElementById("a4");
	var e= document.getElementById("a5");
	var f= document.getElementById("a6");
	var g= document.getElementById("a7");
	var h= document.getElementById("a8");
	var i= document.getElementById("a9");
	var j= document.getElementById("a10");
	
	
	
	alert("姓 名:" + a.value +"    籍 贯:"+b.value+"    身份证号:" +c.value+"    户口所在地:"+d.value+"    政治面貌:"+e.value+"    毕业院校:"+f.value+"    专业:"+g.value+"    联系电话:"+h.value+"    Q Q:"+i.value+"    出生年月:"+j.value);

}
function imgpreview(filedom){
	if(window.FileReader){
		var reader= new FileReader();
	}
	else{
		alert("你的设备不支持图片预览功能")
	}
	var file=fileDom.files[0];
	var imageType=/ ^image\//
	if(!imageType.test(file.type))
	{
		aletr("请选择图片!")
		return;
	}
	
	reader.onload=function(e)
	{
		var img=document.getElementById("preview");
		img.src=e.target.result;
	}
};
