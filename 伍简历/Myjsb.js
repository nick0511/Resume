function get(){
	
	
	var name = document.getElementById("name");
	var nation = document.getElementById("nation");	
	var tel = document.getElementById("tel");
	var major = document.getElementById("major");
	var school = document.getElementById("school");
	var home = document.getElementById("home");
	var mail = document.getElementById("mail");
	var yixiang = document.getElementById("yixiang");
	var zhiwei = document.getElementById("zhiwei");
	var learn = document.getElementById("learn");

//单选框	
	var list = document.Myform.sex;
		for(var i=0;i<list.length;i++)
		{	
			if(list[i].checked)
			{
				sex = list[i];
			}
		}
		
//下拉框	

//学历	
	var myselect=document.getElementById("learn");
	var index=myselect.selectedIndex ;
	var learn = myselect.options[index];
//工作经验
	var myselect1=document.getElementById("exper");
	var index1=myselect1.selectedIndex ;
	var exper = myselect1.options[index1];
//目标行业
	var myselect2=document.getElementById("hangye");
	var index2=myselect2.selectedIndex ;
	var hangye = myselect2.options[index2];

//薪资
	var myselect3=document.getElementById("salary");
	var index3=myselect3.selectedIndex ;
	var salary = myselect3.options[index3];
//地区	
	var myselect4=document.getElementById("area");
	var index4=myselect4.selectedIndex ;
	var area = myselect4.options[index4];
	
//日期框	
	var date=document.getElementById("date");
	
//复选框	
		var Habit=document.getElementsByName("Habit"); 
		var objarray=Habit.length;
		var Habstr="";
		for (i=0;i<objarray;i++)
		{
		  if(Habit[i].checked == true)
		  {
		   Habstr+=Habit[i].value+",";
		  }
		}

//文本框		
	var text = document.getElementById('selfown').value;
	
	
	alert("姓名："+name.value+"  性别:"+sex.value+"  民族:"+nation.value+"出生年月："+ date.value
			+"  联系电话:"+tel.value+"  工作经验:"+exper.value +"  学历:"+learn.value +" 专业：" +major.value+ "  毕业学校:"+school.value 
			+ "  住址:" + home.value + "  邮箱:"+mail.value+"  求职意向:"+yixiang.value
			+ "  目标职位："+ zhiwei.value +"  目标行业："+hangye.value+"  期望薪资："
			+salary.value+" 期望地区"+area.value+"  兴趣：" +Habstr + " 自我评价" + text);
	
	
 	




		
	

}