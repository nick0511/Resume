

function save() {
	// text文本
	var list = new Array("name12","phone","email","age","school","salary");
	var list2 = new Array("姓名：","电话：","邮箱：","年龄：","毕业院校：","薪水：");
	//单选框
	var list3 = document.information.sex;
	for(var i = 0;i<list3.length;i++){
		if(list3[i].checked){
			var sex = list3[i].value;
		}
	}

	//复选框  学历
	var myselect=document.getElementById("xueli");
	var index=myselect.selectedIndex;
	var xueli = myselect.options[index];

	//日期
	var date1 = document.getElementById("date1");
	var date2 = document.getElementById("date2");

	//学院
	var xy=document.getElementById("campus");
	var index2=xy.selectedIndex;
	var campus = xy.options[index2];

	//主修专业
	var zy=document.getElementById("zhuanye");
	var index3=zy.selectedIndex;
	var zhuanye = zy.options[index3];

	//多选框
	 var list4 = document.sub.sb;
	var subject = "";
	for(var j = 0;j<list4.length;j++){
		if(list4[j].checked){
			subject += list4[j].value+"、";
		}
	}

	var habit = document.getElementById("comment1");
	var skill = document.getElementById("comment2");
	var self1 = document.getElementById("comment3");




	 alert(list2[0]+document.getElementById(list[0]).value+"　"
	 	+"性别:"+sex+"　"+"学历:"+xueli.value+"　"
	 	+list2[1]+document.getElementById(list[1]).value+"　"
	 	+list2[2]+document.getElementById(list[2]).value+"　"
	 	+list2[3]+document.getElementById(list[3]).value+"　"
	 	+list2[4]+document.getElementById(list[4]).value+"　"
	 	+list2[5]+document.getElementById(list[5]).value+"　"
	 	+"就读时间:"+date1.value+"--"+date2.value+"　"
	 	+"院校："+campus.value+"　"
	 	+"主修专业："+zhuanye.value+"　"
	  	+"主修课程："+subject+"　"
	  	+"爱好："+habit.value+"　"
	  	+"技术："+skill.value+"　"
	  	+"自我评价："+self1.value
	 	);
	}