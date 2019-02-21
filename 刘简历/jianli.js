function output(){
	var shuzu1 = new Array("name6","email","age","school","where","salary","comment4","comment1","comment2","comment3");
	var shuzu2 = new Array("姓名：","电话：","年龄：","毕业院校：","住址：","薪资要求：","个人喜好：","课程：","技术：","自述：");
	var myselect=document.getElementById("xueli");var index=myselect.selectedIndex;var xueli = myselect.options[index];
	var date1 = document.getElementById("date1");var date2 = document.getElementById("date2");
	var yuanxiao=document.getElementById("yuanxiao");var index2=yuanxiao.selectedIndex;var campus = yuanxiao.options[index2];
	var zhuanye=document.getElementById("zhuanye");var index3=zhuanye.selectedIndex;var zhuanye = zhuanye.options[index3];
	var shuzu3 = document.information.sex;
		for(var i = 0;i<shuzu3.length;i++){
			if(shuzu3[i].checked){
			var sex = shuzu3[i].value;
			}
		}

		alert
		(shuzu2[0]+document.getElementById(shuzu1[0]).value+"　"
		+"性别:"+sex+"　"
		+"学历:"+xueli.value+"　"
		+"就读时间:"+date1.value+"到"+date2.value+"　"

	 	+shuzu2[1]+document.getElementById(shuzu1[1]).value+"　"
	 	+shuzu2[2]+document.getElementById(shuzu1[2]).value+"　"
	 	+shuzu2[3]+document.getElementById(shuzu1[3]).value+"　"
	 	+shuzu2[4]+document.getElementById(shuzu1[4]).value+"　"
	 	+shuzu2[5]+document.getElementById(shuzu1[5]).value+"　"
	 	+"院系："+yuanxiao.value+"　"
	  	+"主修专业："+zhuanye.value+"　"
	 	+shuzu2[6]+document.getElementById(shuzu1[6]).value+"　"
	 	+shuzu2[7]+document.getElementById(shuzu1[7]).value+"　"
	 	+shuzu2[8]+document.getElementById(shuzu1[8]).value+"　"
	 	+shuzu2[9]+document.getElementById(shuzu1[9]).value+"　"
		);
	}