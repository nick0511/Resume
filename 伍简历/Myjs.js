window.onload = function(){
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
	
	var xmlDoc=new ActiveXObject("Microsoft.XMLDOM"); 
							    

								xmlDoc.async = false;
							    
							    xmlDoc.load("5554.xml");								
							  var nodes = xmlDoc.documentElement.childNodes;
							  for(var i=0;i<nodes.length;i++){
								var node = nodes[i];
									name.value=node.childNodes[0].text;
									if(node.childNodes[1].text=="male")
										{
											document.getElementById("male").checked=1;
											document.getElementById("female").checked=0;			
										
										}
									else{
										
										document.getElementById("female").checked=1;									
										document.getElementById("mail").checked=0;
										}
									nation.value = node.childNodes[3].text;
									date.value = node.childNodes[4].text;
									tel.value = node.childNodes[5].text;
									
							//  	name.value=node.ChildNodes[0].text;
								//nation.value=node.ChildNodes[1].text;
							  	
							  }
		
	}
	
	


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
	
var fso;
try { 
fso=new ActiveXObject("Scripting.FileSystemObject"); 

} catch (e) { 
alert("当前浏览器不支持");
return;
} 


var f1 = fso.createtextfile("伍.xml",true);
f1.write("<?xml version\=\"1.0\" encoding=\"GB2312\"?>"+"\r\n"
			+"<?xml-stylesheet type=\"text/xsl\" href=\"伍.xsl\" ?>"+"\r\n"
			+"<简历>\r\n<模板2>"
			+"<姓名>"+name.value+"<\/姓名>"+"\r\n"
			+"<性别>"+sex.value+"<\/性别>"+"\r\n"
			+"<民族>"+nation.value+"<\/民族>"+"\r\n"
			+"<出生年月>"+ date.value+"<\/出生年月>"+"\r\n"
			+"<联系电话>"+tel.value+"<\/联系电话>"+"\r\n"
			+"<工作经验>"+exper.value +"<\/工作经验>"+"\r\n"
			+"<学历>"+learn.value+"<\/学历>"+"\r\n"
			+"<专业>" +major.value+"<\/专业>" +"\r\n"
			+"<毕业学校>"+school.value+"<\/毕业学校>" +"\r\n"
			+ "<住址>" + home.value + "<\/住址>"+"\r\n"
			+"<邮箱>"+mail.value+"<\/邮箱>"+"\r\n"
			+"<求职意向>"+yixiang.value+"<\/求职意向>"+"\r\n"
			+ "<目标职位>"+ zhiwei.value+ "<\/目标职位>"+"\r\n"
			+" <目标行业>"+hangye.value+" <\/目标行业>"+"\r\n"
			+"<期望薪资>"+salary.value+"<\/期望薪资>"+"\r\n"
			+"<期望地区>"+area.value+"<\/期望地区>"+"\r\n"
			+" <兴趣>" +Habstr +" <\/兴趣>" +"\r\n"
			+ "<自我评价>"+ text+ "<\/自我评价>"
			+"<\/模板2>\r\n<\/简历>");  



alert("XML已经写入");

		
	

}
