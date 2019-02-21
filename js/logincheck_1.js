// JavaScript Document
function buttonaction(){
							  var xmlDoc=new ActiveXObject("Microsoft.XMLDOM"); 
							    xmlDoc.async = false;
							    xmlDoc.load("xml/user.xml");
							  var nodes = xmlDoc.documentElement.childNodes;
							  var name = document.getElementById('username');
							  var password = document.getElementById('password');
							 //获取表单栏用户名和密码
							 var exies=0
							  for(var i=0;i<nodes.length;i++){
								var node = nodes[i];
							
								if(name.value==node.childNodes[0].text)
								{	exies=1;
									if(password.value==node.childNodes[1].text)
										window.open("html/用户/首页.html");//转到哪个页面
									else
										alert("password wrong");
								}
							 }//与xml上逐个对比
							  if(name.value=='admin')
							  {
								  exies=1;
									 if(password.value=='admin')
										 window.open("html/管理员/简历模板信息.html");//管理员转到哪个页面
									 else 
										 alert("password wrong");//密码错误
							  }
							  if(exies==0) //没有此用户
								  alert("No This User");
							  
							}